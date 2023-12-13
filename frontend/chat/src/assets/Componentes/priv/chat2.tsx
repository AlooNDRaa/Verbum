import Mensajes from "./mensajespriv";



function Chat2() {

  const backgroundImageUrl2: string = 'url(https://i.gifer.com/origin/56/5620089ec3ce11732302d655bae5063d_w200.gif)';

  return (
    <div>
    <div
    style={{ backgroundImage: backgroundImageUrl2 }}
    className='flex h-screen items-stretch bg-black bg-cover'>
     <Mensajes/>
    </div>
  </div>
  )
}

export default Chat2;