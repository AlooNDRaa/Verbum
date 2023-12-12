interface NavopenProps {
    selectedUser: string | null;
  }
  
  function Navopen({ selectedUser }: NavopenProps) {
    return (
      <>
        <div className="flex justify-start bg-[#191A26] ">
          <div className="w-full h-20 p-2 px-4 ">
            <h2 className="text-white font-semibold text-2xl mt-3">{selectedUser}</h2>
          </div>
        </div>
      </>
    );
  }
  
  export default Navopen;
  