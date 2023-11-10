import Navopen from "./compOpenChat/navOpenChat";
import Mensajes from "./compOpenChat/mensajes"


function Chatopen (){

    return(
        <>
        <div className="w-[100%] h-screen  ">
            <Navopen/>
            <Mensajes/>
        </div>
        </>
    )
}
export default Chatopen;