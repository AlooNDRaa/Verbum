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
    <main className='board'>
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <section className='game'>
        {board.map((square, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {square}
            </Square>
          )
        })}
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X} updateBoard={() => {}} index={0}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O} updateBoard={() => {}} index={0}>
          {TURNS.O}
        </Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  )
}
