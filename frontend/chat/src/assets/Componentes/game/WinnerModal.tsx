import { Square } from './Square'

interface WinnerModalProps {
  winner: string | null;
  resetGame: () => void;
}

export function WinnerModal({ winner, resetGame }: WinnerModalProps) {
    if (winner === null) return null;
  
    const winnerText = winner === null ? 'Empate' : `Ganó: ${winner}`;

  return (
    <section className='winner fixed inset-0 grid place-items-center bg-white bg-opacity-70'>
      <div className='text bg-gray-900 h-300 w-320 border-2 border-white rounded-10 flex flex-col justify-center items-center gap-20'>
        <h2>{winnerText}</h2>

        <header className='win m-0 auto w-fit-content border-2 border-white rounded-10 flex gap-15'>
          {winner && <Square
              isSelected={false}
              updateBoard={() => {}}
              index={0}
            >
              {winner}
            </Square>}
        </header>

        <footer>
          <button onClick={resetGame}>Empezar de nuevo</button>
        </footer>
      </div>
    </section>
  );
}
 