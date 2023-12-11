interface NavopenProps {
    selectedUser: string | null;
  }
  
  function Navopen({ selectedUser }: NavopenProps) {
    return (
      <>
        <div className="flex justify-start">
          <div className="w-full h-20   p-2 px-4  bg-[#191A26] ">
            <div>
            </div>
            <h2 className="text-white font-semibold text-2xl mt-3">{selectedUser}</h2>
          </div>
        </div>
      </>
    );
  }
  
  export default Navopen;
  