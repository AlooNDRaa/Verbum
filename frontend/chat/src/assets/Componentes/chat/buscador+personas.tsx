import Buscador from "./buscadorChat";
import Person from "./personasChat";
function Fusion() {
    return(
        <>
        <div className="text-white border border-stone-700 w-80 h-screen bg-[#161616] opacity-95 max-sm:hidden ">
         <Buscador/>
         <Person/>
        </div>
        </>
    )
}
export default Fusion;