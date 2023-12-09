import React, { useState, useEffect } from "react";
import Board from "./board";
import "../../Styles/index.css";
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

const Game = () => {
  const [history, setHistory] = useState([{ squares: new Array(9).fill(null) }]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const [finished, setFinished] = useState(false);
  const [players, setPlayers] = useState({
    player1: '',
    player2: '',
  });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:3000/user");
        const users = await response.json();

        if (users.length > 0) {
          setPlayers((prevPlayers) => ({
            ...prevPlayers,
            player1: users[0].username,
          }));
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
    

    socket.on('move', ({ squares, stepNumber, xIsNext }) => {
  
      setHistory(prevHistory => [...prevHistory, { squares }]);
      console.log(history);
      setStepNumber(stepNumber);
      setXIsNext(xIsNext);
      setFinished(calculateWinner(squares) || stepNumber >= 9);
    });

    socket.on('players', (users) => {
      if (users.length > 0) {
        setPlayers((prevPlayers) => ({
          ...prevPlayers,
          player1: users[0].username,
          player2: users[1] ? users[1].username : '',
        }));
      }
    });

    socket.on('gameState', (newGameState) => {
      setHistory(newGameState.history);
      setStepNumber(newGameState.stepNumber);
      setXIsNext(newGameState.xIsNext);
      setFinished(calculateWinner(newGameState.history[newGameState.stepNumber].squares) || newGameState.stepNumber >= 9);
    });

    return () => {
      socket.off('move');
      socket.off('players');
      socket.off('gameState'); 
    };
  }, []);

  const handleClick = (i: number) => {
    if (finished) {
      return;
    }
  
    setHistory((prevHistory) => {
      const _history = prevHistory.slice(0, stepNumber + 1);
      const squares = _history[_history.length - 1].squares.slice();
  
      if (calculateWinner(squares) || squares[i]) {
        return prevHistory;
      }
  
      squares[i] = xIsNext ? "X" : "O";
  
      socket.emit('move', { squares, stepNumber: _history.length, xIsNext });
  
      return [..._history, { squares }];
    });
  
    setStepNumber((prevStepNumber) => prevStepNumber + 1);
    setXIsNext((prevXIsNext) => !prevXIsNext);
    setFinished((prevFinished) => prevFinished || calculateWinner(history[history.length - 1].squares) || (stepNumber + 1) >= 9);
  };
  const jumpTo = (step: React.SetStateAction<any>) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
    setFinished(false);
  };

  const status = finished
    ? "Game Over"
    : `Next player: ${xIsNext ? "X" : "O"}`;

  return (
    <div className="w-full backdrop-blur-md bg-opacity-75">
      <div className="flex flex-flow">
        <Board
          squares={history[stepNumber].squares}
          finished={finished}
          onClick={(i) => handleClick(i)}
        />
        <div className="ml-6 text-white p-5 h-[30rem] border">
          <div className="font-bold">{status}</div>
          <div className="mb-2">Players:</div>
          <div className="mb-3">{players.player1}</div>
          <div>{players.player2}</div>
          <ol className="pl-8 overflow-y-auto max-h-[25rem] ">
            {history.map((_step, move) => (
              <li className="p-3" key={move}>
                <button
                  className="mt-1 "
                  onClick={() => jumpTo(move)}
                >
                  {move ? `Move number #${move}` : "Start Game"}
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

function calculateWinner(squares: any[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Game;