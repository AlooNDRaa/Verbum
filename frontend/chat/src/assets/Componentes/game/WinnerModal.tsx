import { Square } from './Square'

interface WinnerModalProps {
  winner: string | null;
  resetGame: () => void;
}

export function WinnerModal({ winner, resetGame }: WinnerModalProps) {
    if (winner === null) return null;
  
    const winnerText = winner === null ? 'Empate' : `Ganó: ${winner}`;

  return (
    <section className='winner'>
      <div className='text'>
        <h2>{winnerText}</h2>

        <header className='win'>
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
 