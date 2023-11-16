import Navbar from "../Componentes/navbarhome"
import Footer from "../Componentes/footerhome"
function Herramientas() {

  return (
    <>
      <div className='bg-[#101015] w-full grid relative'>
        <Navbar></Navbar>
          <div className="container flex justify-around mt-[10rem]">
            <h1 className="
              text-white text-[74px] font-bold font-['DM Sans']">Herramientas
            </h1>
          <div>
            <h3 className="text-white text-[40px] font-medium font-['DM Sans']">Envía mensajes privados</h3> <br />
            <h3 className="text-pink-600 text-[20px] font-medium font-['DM Sans'] -mt-[20px]">Envía mensajes y llamadas gratis de forma <br />simple, confiable y privada</h3> <br />
            <h3 className="text-pink-600 text-[20px] font-medium font-['DM Sans'] -mt-[20px]">disponibles en todo el mundo.</h3>
          </div>
          </div>
         
        <div className='Cajas grid mt-[4rem] mb-[9rem] pl-[6rem] gap-3'>
          <div className='Cajas__vertical grid grid-cols-4 mr-[50px]'>
            <h2 className="w-[110px] h-[45px] bg-neutral-700 hover:bg-pink-600 rounded-lg text-neutral-200  hover:text-stone-600 text-[30px] pt-[150px] pr-[175px] pb-[150px] pl-[90px] font-medium font-['DM Sans'] hover:pt-[100px] hover:pb-[200px] active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out">Simple
              <p className="simple-text  text-left text-[20px] -mr-[160px] -ml-[50px] pt-[30px] text-transparent hover:text-zinc-900">Es tan simple que ya
              sabes cómo utilizarla.</p>
            </h2>
            <h2 className="w-[110px] h-[45px] bg-neutral-700 hover:bg-pink-600 rounded-lg text-neutral-200  hover:text-stone-600 text-[30px] pt-[150px] pr-[175px] pb-[150px] pl-[90px] font-medium font-['DM Sans'] hover:pt-[100px] hover:pb-[200px] active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out">Rápido
              <p className="simple-text  text-left text-[20px] -mr-[160px] -ml-[50px] pt-[30px] text-transparent hover:text-zinc-800">Entrega mensajes más rápido
              que cualquier otra aplicación.</p>
            </h2>
            <h2 className="w-[110px] h-[45px] bg-neutral-700 hover:bg-pink-600 rounded-lg text-neutral-200  hover:text-stone-600 text-[30px] pt-[150px] pr-[185px] pb-[150px] pl-[80px] font-medium font-['DM Sans'] hover:pt-[100px] hover:pb-[200px] active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out">Seguro
              <p className="simple-text text-left text-[20px] -mr-[160px] -ml-[50px] pt-[30px] text-transparent hover:text-zinc-800">Mantiene tus mensajes a
              salvo de ataques de hackers.</p>
            </h2>
            <h2 className="w-[110px] h-[45px] bg-neutral-700 hover:bg-pink-600 rounded-lg text-neutral-200  hover:text-stone-600 text-[30px] pt-[150px] pr-[195px] pb-[150px] pl-[70px] font-medium font-['DM Sans'] hover:pt-[100px] hover:pb-[200px] active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out">Moderno
              <p className="simple-text text-left text-[20px] -mr-[180px] -ml-[50px] pt-[30px] text-transparent hover:text-zinc-800">Permite que personalices completamente tu aplicación.</p>
            </h2>
          <div className='Cajas__horizontal flex text-center mt-[50px] mb-[200px] gap-[14rem]'>
            <div className="">
            <h2 className=" bg-neutral-700 hover:bg-pink-600 rounded-lg w-[32rem] p-9 h-[12rem] text-center text-neutral-200 hover:text-stone-600 text-[30px]  font-medium font-['DM Sans'] active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out">Android/ios
              <p className="simple-text__bottom text-[20px] text-center mt-2"> Haz click aquí </p>
             </h2>
            </div>
            <div className=" ">
            <h2 className=" bg-neutral-700 hover:bg-pink-600 rounded-lg w-[32rem] text-center p-9 h-[12rem] text-neutral-200  hover:text-stone-600 text-[30px]  font-medium  font-['DM Sans'] active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out">Windows/Mac
              <p className=" text-[20px] text-center mt-2 "> Haz click aquí </p>
            </h2>
            </div>
            </div>
          </div>
        </div>
      <Footer/>
      </div>
       
    
      
    </>
  )
}

export default Herramientas