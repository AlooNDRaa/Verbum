interface NavopenProps {
    selectedUser: string | null;
  }
  
  function Navopen({ selectedUser }: NavopenProps) {
    return (
      <>
        <div className="flex justify-start">
          <div className="w-full h-20 fixed z-50 bg-[#161616] opacity-95 flex items-stretch">
            <div>
              {/* Puedes mostrar la imagen del usuario aquí si es necesario */}
            </div>
            <h1 className="text-[#eff6ff] text-lg mt-4 ">{selectedUser || 'Nombre por defecto'}</h1>
          </div>
        </div>
      </>
    );
  }
  
  export default Navopen;
  