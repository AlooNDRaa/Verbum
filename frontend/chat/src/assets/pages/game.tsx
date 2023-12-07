import { useState } from 'react'
import confetti from 'canvas-confetti'
import { Square } from '../Componentes/game/Square'
import { TURNS } from '../Componentes/game/logic/constants'
import { checkWinnerFrom, checkEndGame } from '../Componentes/game/logic/board'
import { WinnerModal } from '../Componentes/game/WinnerModal'
import { saveGameToStorage, resetGameStorage } from '../Componentes/game/logic/storage/gameStorage'


export function GameCYR() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
  })

  const [turn, setTurn] = useState<TURNS>(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ? (turnFromStorage as TURNS) : TURNS.X
  })

  // null es que no hay ganador, false es que hay un empate
  const [winner, setWinner] = useState<string | boolean | null>(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    resetGameStorage()
  }

  const updateBoard = (index: number) => {
    // no actualizamos esta posición
    // si ya tiene algo
    if (board[index] || winner) return
    // actualizar el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    // cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    // guardar aqui partida
    saveGameToStorage({
      board: newBoard,
      turn: newTurn
    })
    // revisar si hay ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false) // empate
    }
  }

  return (
    <main className='grid'>
    <div className='board bg-[#101015] w-full h-screen  mx-auto '>
      <h1 className='text-white mb-16 text-center'>Tic tac toe</h1>
      <button className=' border-white text-white bg-transparent w-28 rounded-md transition duration-200 font-bold cursor-pointer hover:bg-gray-300 hover:text-gray-700' onClick={resetGame}>Reset del juego</button>
      <section className='game grid grid-cols-3 gap-10'>
        {board.map((square, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {square}
            </Square>
          )
        })}
      </section>

      <section className='turn flex justify-center m-15 mx-auto w-fit-content relative rounded-10'>
        <Square isSelected={turn === TURNS.X} updateBoard={() => {}} index={0}
       
        >
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O} updateBoard={() => {}} index={0}>
          {TURNS.O}
        </Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner} />
    </div>
    </main>
  )
}
