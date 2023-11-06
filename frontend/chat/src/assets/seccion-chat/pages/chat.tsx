import Nav from "../componentes/navChat";
import Fusion from "../componentes/buscador+personas";
import Chatopen from "../componentes/chatOpen";
import io from 'socket.io-client';

const Socket = io("/")

Socket

function Chat() {
  return (
    <div className='flex items-stretch '>
      <Nav/>
      <Fusion/>
      <Chatopen/>
    </div>
  )
}

export default Chat