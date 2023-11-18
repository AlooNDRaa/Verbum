export function EnterPas() {
    const backgroundImageUrl = 'url(https://i.pinimg.com/originals/a7/d4/09/a7d409d7bae019934e8511a85f8e4ff8.gif)';
  
    return (
      <>
        <div className="relative">
          <div
            className="bg-cover h-screen absolute w-full"
            style={{ backgroundImage: backgroundImageUrl }}
          ></div>
  
          <div className="bg-cover bg-center h-screen bg-dph opacity-50 flex justify-center items-center relative z-20">
            <div className="bg-gray-500 rounded w-[42rem] h-[17rem] flex flex-col justify-center p-14">
              <h1 className="text-6xl text-center mb-9 font-semibold text-[#fe0000]">
                Password required
              </h1>
              <input
                className="border-none rounded-xl text-2xl text-gray-600 p-5 bg-gray-400"
                type="password"
                placeholder=""
              />
            </div>
          </div>
        </div>
      </>
    );
  }
  