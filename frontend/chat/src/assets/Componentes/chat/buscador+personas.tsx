import Buscador from "./buscadorChat";
import Chatuser from "./chatanduser/userchats";
// import Person from "./personasChat";
function Fusion() {
    return(
        <>
        <div className="text-white border border-stone-700 w-90 h-screen bg-[#161616] opacity-95 max-sm:hidden ">
         <Buscador/>
         <Chatuser/>
        </div>
        </>
    )
}
export default Fusion;