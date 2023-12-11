// import Navopen from "./compOpenChat/navOpenChat";
// import Mensajes from "./compOpenChat/mensajes";
// // import PersonasChat from "../chat/buscador+personas"
// import NavChat from "../chat/navChat"

import Chatuser from "./chatanduser/userchats";


function Chatopen (){

    return(
        <>
       
        <div className="w-full flex h-screen items-stretch "> 
          <Chatuser/>
        </div>
        </>
    )
}
export default Chatopen;