import Mensajes from "./compOpenChat/mensajes";
import PersonasChat from "../chat/buscador+personas"
import NavChat from "../chat/navChat"


function Chatopen (){

    return(
        <>
       
        <div className="flex items-stretch "> 
            <NavChat/>
            <PersonasChat/>
            <Mensajes/>
        </div>
        </>
    )
}
export default Chatopen;