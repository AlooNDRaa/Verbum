import Logo from '../imgs/verbumlog.png';
import Navbar from '../Componentes/navbarhome';
import imgchat from '../imgs/Chat-user.png';
import LogoHover from '../imgs/Group 3 (1).png';
import Footer from '../Componentes/footerhome';

function Home() {
    return (
    <div className='container-global relative flex bg-[#101015]'>
         <Navbar></Navbar>
        <div className="container-father grid grid-cols-6 gap-4 grid-rows-[auto, 1fr] mb-96">
               <div className="son1 flex items-center mt-48 flex flex-col col-span-3">
                  <h1 className=" font-semibold text-9xl text-white">Verbum</h1>
                  <h2 className='font-semibold text-pink-600 text-3xl hover:uppercase mt-8'>Ahora podes estar en todos lados!</h2>
                  <h2 className='font-semibold text-gray-500 text-2xl hover:uppercase hover:text-transparent mt-8'>Incluso sin dejar rastro </h2>
               </div>
                <div className='son2 flex items-center mt-20 mx-8 col-span-3'>
                    <div className='relative group'>
                <img src={Logo} alt="img-logo" className=""/>
                <img src={LogoHover} alt="img-logo-hover" className="logo-hover-image absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out"/>
                </div>
                </div>
                <div className='son3 col-span-2'>
                   <h2 className='font-semibold mt-48 mx-10 text-4xl text-white'>Solta tu vomito verbal junto a tus amigos usando nuestra version de chat clasica.  </h2>
                </div>
                <div className='son4 col-start-3 col-end-5 mt-48 mb-10 '>
                  <img src={imgchat} alt="img-chat" className=""/>
                
                </div>
                <div className='son5 col-span-2'>
                    <h2 className='font-semibold mt-48 mx-10 text-4xl text-white'> Juga online al tic tac toe. Personaliza el color de tu chat.</h2>
                </div>
        </div>
        <Footer/>
    </div>
    );
}
            
export default Home;
