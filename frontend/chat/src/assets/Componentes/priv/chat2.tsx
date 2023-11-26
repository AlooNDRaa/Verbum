import Fusion from "../chat/buscador+personas";
import Chatopen from "../chat/chatOpen";
import Nav from "../chat/navChat";




function Chat2() {
  return (
    <div className='flex h-screen items-stretch '>
      <Nav/>
      <Fusion/>
      <Chatopen/>
    </div>
  )
}

export default Chat2;