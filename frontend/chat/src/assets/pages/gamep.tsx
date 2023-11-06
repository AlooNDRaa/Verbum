import { Nameanimate } from '../Componentes/fondo';
import Game from '../Componentes/game';

export function GameCYR() {
  return (
    <>
      <div className="contpag text-white" >
        <div className="fixed flex flex-col m-7" style={{ zIndex: 2}}>
            <h1 className="mb-2 text-[1.5rem]">Cruz y raya</h1>
          <div className="conectplayers pl-4">
            <div>
                <h2 className='text-xl mb-3'>Players:</h2>
              <input className="rounded mb-3 bg-transparent border p-1" type="text" placeholder="Player 1" style={{ background: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(10px)' }} /><br />
              <input className="rounded bg-transparent border p-1" type="text" placeholder="Player 2" style={{ background: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(10px)' }} />
            </div>
          </div>
        </div>
        <div>
          <div className="fixed ml-[24rem] mt-[11.3rem]" style={{ zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Game />
          </div>
        </div>
      </div>
      <Nameanimate style={{ position: 'absolute', zIndex: 0, top: 0, left: 0, width: '100%', height: '100%' }} />
    </>
  );
}
