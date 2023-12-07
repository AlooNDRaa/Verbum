import Nav from "../Componentes/chat/navChat";
import Fusion from "../Componentes/chat/buscador+personas";
//import Chatopen from "../Componentes/chat/chatOpen";




function Chat() {
  return (
    <div className='flex h-screen items-stretch bg-[#161616] opacity-90 '>
      <Nav/>
      <Fusion/>
      
    </div>
  )
}

export default Chat
