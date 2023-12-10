import Nav from "../Componentes/chat/navChat";
import Chatuser from "../Componentes/chat/chatanduser/userchats";
//import Chatopen from "../Componentes/chat/chatOpen";




function Chat() {
  return (
    <div className='flex items-stretch bg-[#161616] opacity-90 '>
      <Nav/>
      <Chatuser/>
    </div>
  )
}

export default Chat
