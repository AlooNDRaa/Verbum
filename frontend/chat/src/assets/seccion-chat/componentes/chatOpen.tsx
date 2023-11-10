import Navopen from "./compOpenChat/navOpenChat";
import Mensajes from "./compOpenChat/mensajes"


function Chatopen (){

    return(
        <>
        <div className="w-full ">
            <Navopen/>
            <Mensajes/>
        </div>
        </>
    )
}
export default Chatopen;