interface NavopenProps {
    selectedUser: string | null;
  }
  
  function Navopen({ selectedUser }: NavopenProps) {
    return (
      <>
        <div className="flex justify-start">
          <div className="w-full h-20 fixed  p-2 px-4 z-20 bg-[#101015] opacity-95 flex items-stretch">
            <div>
            </div>
            <h1 className="text-white font-semibold text-2xl mt-3 ">{selectedUser}</h1>
          </div>
        </div>
      </>
    );
  }
  
  export default Navopen;
  