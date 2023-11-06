import Buscador from "./buscadorChat";
import Person from "./personasChat";
function Fusion() {
    return(
        <>
        <div className="text-white border border-stone-700 w-60 h-screen bg-[#161616] opacity-95">
         <Buscador/>
         <Person/>
        </div>
        </>
    )
}
export default Fusion;