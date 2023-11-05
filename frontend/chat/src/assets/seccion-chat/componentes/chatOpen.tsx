import Navopen from "./compOpenChat/navOpenChat";
import Mensajes from "./compOpenChat/mensajes"


function Chatopen (){

    return(
        <>
        <div className="w-full h-screen ">
            <Navopen/>
            <Mensajes/>
        </div>
        </>
    )
}
export default Chatopen;