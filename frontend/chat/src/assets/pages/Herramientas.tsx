function Herramientas() {

  return (
    <>
      <div className='bg-[#101015] max-width pt-[80px] pl-[70px]'>
      <Navbar></Navbar>
        <div className='grid grid-cols-2 gap-[10px] -mb-[700px]'>
          <div className="container  h-screen">
            <h3 className="text-white text-[40px] font-medium font-['DM Sans']">Envía mensajes privados</h3> <br />
            <h3 className="text-pink-600 text-[20px] font-medium font-['DM Sans'] -mt-[20px]">Envía mensajes y llamadas gratis de forma <br />simple, confiable y privada</h3> <br />
            <h3 className="text-pink-600 text-[20px] font-medium font-['DM Sans'] -mt-[20px]">disponibles en todo el mundo.</h3>
          </div>
          <h1 className="
           text-white text-[74px] top-0 right-0 font-bold font-['DM Sans']">Herramientas
          </h1>
        </div> 
        <div className='Cajas pb-[10px]'>
          <div className='Cajas__vertical grid grid-cols-4 mr-[50px]'>
            <h2 className="w-[110px] h-[45px] bg-neutral-700 hover:bg-pink-600 rounded-lg text-neutral-200  hover:text-stone-600 text-[30px] pt-[150px] pr-[175px] pb-[150px] pl-[90px] font-medium font-['DM Sans'] hover:pt-[100px] hover:pb-[200px]">Simple
              <p className="simple-text  text-zinc-800 text-left text-[20px] -mr-[160px] -ml-[50px] pt-[30px] invisible hover:visible">Es tan simple que ya
              sabes cómo utilizarla.</p>
            </h2>
            <h2 className="w-[110px] h-[45px] bg-neutral-700 hover:bg-pink-600 rounded-lg text-neutral-200  hover:text-stone-600 text-[30px] pt-[150px] pr-[175px] pb-[150px] pl-[90px] font-medium font-['DM Sans'] hover:pt-[100px] hover:pb-[200px]">Rápido
              <p className="simple-text  text-zinc-800 text-left text-[20px] -mr-[160px] -ml-[50px] pt-[30px] invisible hover:visible">Entrega mensajes más rápido
              que cualquier otra aplicación.</p>
            </h2>
            <h2 className="w-[110px] h-[45px] bg-neutral-700 hover:bg-pink-600 rounded-lg text-neutral-200  hover:text-stone-600 text-[30px] pt-[150px] pr-[185px] pb-[150px] pl-[80px] font-medium font-['DM Sans'] hover:pt-[100px] hover:pb-[200px]">Seguro
              <p className="simple-text text-zinc-800 text-left text-[20px] -mr-[160px] -ml-[50px] pt-[30px] invisible hover:visible">Mantiene tus mensajes a
              salvo de ataques de hackers.</p>
            </h2>
            <h2 className="w-[110px] h-[45px] bg-neutral-700 hover:bg-pink-600 rounded-lg text-neutral-200  hover:text-stone-600 text-[30px] pt-[150px] pr-[195px] pb-[150px] pl-[70px] font-medium font-['DM Sans'] hover:pt-[100px] hover:pb-[200px]">Moderno
              <p className="simple-text text-zinc-800 text-left text-[20px] -mr-[180px] -ml-[50px] pt-[30px] invisible hover:visible">Permite que personalices completamente tu aplicación.</p>
            </h2>
          </div>
          <div className='Cajas__horizontal grid grid-cols-2 mt-[50px] mb-[200px]'>
            <h2 className=" bg-neutral-700 hover:bg-pink-600 rounded-lg w-[45px] h-10 text-center text-neutral-200 hover:text-stone-600 text-[30px] pt-[80px] pr-[338px] pb-[120px] pl-[210px] hover:pr-[518px] hover:pl-[30px]
             font-medium font-['DM Sans']">Android/ios
              <p className="simple-text__bottom  text-zinc-800 text-left text-[20px] -mr-[150px] "> Haz click aquí </p>
             </h2>
            <h2 className=" bg-neutral-700 hover:bg-pink-600 rounded-lg w-[45px] h-10 text-center text-neutral-200  hover:text-stone-600 text-[30px] pt-[80px] pr-[408px] pb-[120px] pl-[140px] -ml-[20px] font-medium  hover:pr-[518px] hover:pl-[30px] hover:mr-[50px] font-['DM Sans']">Windows/Mac
              <p className=" text-zinc-800 text-left text-[20px] -mr-[150px] "> Haz click aquí </p>
            </h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default Herramientas