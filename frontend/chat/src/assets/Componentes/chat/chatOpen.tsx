import Navopen from "./compOpenChat/navOpenChat";
import Mensajes from "./compOpenChat/mensajes";
import PersonasChat from "../chat/buscador+personas"
import NavChat from "../chat/navChat"


function Chatopen (){

    return(
        <>
       
        <div className="w-full flex h-screen items-stretch "> 
            <NavChat/>
            <PersonasChat/>
            <Navopen/>
            <Mensajes/>
        </div>
        </>
    )
}
export default Chatopen;