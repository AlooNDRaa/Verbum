import { useState } from "react";
import Board from "./board";
import "../../Styles/index.css";

function Game() {
  const [history, setHistory] = useState([{ squares: new Array(9) }]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const [finished, setFinished] = useState(false);
  const handleClick = (i: number) => {
    if (finished) {
      return;
    }
    if (stepNumber >= 9) {
      setFinished(true);
      return;
    }
    const _history = history.slice(0, stepNumber + 1);
    const squares = [..._history[_history.length - 1].squares];
    console.log("history:", _history.length, stepNumber);
    if (squares[i]) {
      return;
    }
    const winner = calculateWinner(squares);
    if (winner) {
      setFinished(true);
      return;
    }
    squares[i] = xIsNext ? "X" : "O";
    setHistory([..._history, { squares }]);
    setStepNumber(_history.length);
    setXIsNext(!xIsNext);
  };
  const jumpTo = (step: number) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
    setFinished(false);
  };
  const _history = [...history];
  const squares = [..._history[stepNumber].squares];
  const winner = calculateWinner(squares);
  const status = winner
    ? "Winner: " + winner
    : "Next player: " + (xIsNext ? "X" : "O");
  const moves = _history.map((_step, move) => {
    const desc = move ? "Move number #" + move : "Start Game";
    return (
      <li className="p-3"
       key={move}>
        <button 
        className="mt-1" 
        onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });
  return (
    <div className="w-full backdrop-blur-md bg-opacity-75">
    <div className="flex flex-flow">
      <Board
        squares={squares}
        finished={finished}
        onClick={i => handleClick(i)}
      />
    <div className="ml-6 text-white p-5 h-[30rem] border">
        <div className="font-bold">{status}</div>
        <ol className="pl-8">{moves}</ol>
      </div>
    </div>
    </div>
  );
}
function calculateWinner(squares: Array<string>) {
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
  const length = lines.length;
  for (let i = 0; i < length; i++) {
    const [a, b, c] = lines[i];
    const player = squares[a];
    if (player && player === squares[b] && player === squares[c]) {
      return player;
    }
  }
  return null;
}

export default Game;
