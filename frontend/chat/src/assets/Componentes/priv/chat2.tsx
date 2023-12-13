import Mensajes from "./mensajespriv";

function Chat2() {
  const backgroundImageUrl2: string = 'https://i.gifer.com/origin/56/5620089ec3ce11732302d655bae5063d_w200.gif';
  
  
  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(10, 10, 10, 20), rgba(0, 0, 0, 0.7)), url(${backgroundImageUrl2})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div>
      <div
        style={backgroundStyle}
        className='flex h-screen items-stretch'>
        <Mensajes />
      </div>
    </div>
  );
}

export default Chat2;
