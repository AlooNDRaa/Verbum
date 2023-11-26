import Timer from "./temporizador";

export function EnterPas() {
    const backgroundImageUrl = 'url(https://i.pinimg.com/originals/a7/d4/09/a7d409d7bae019934e8511a85f8e4ff8.gif)';
  
    return (
      <>
        <div className="relative">
          <div
            className=" h-screen absolute w-full"
            style={{ backgroundImage: backgroundImageUrl }}
          >
          </div>
        <div className="fixed opacity-60 z-50 ml-9">
          <Timer/>
        </div>
          <div className="bg-cover bg-center h-screen bg-dph opacity-60 flex justify-center items-center relative z-20">
            <div className="bg-gray-500 rounded w-[20rem] lg:w-[42rem] h-[12rem] lg:h-[17rem] flex flex-col justify-center p-14">
              <h1 className="text-4xl lg:text-6xl text-center mb-9 font-semibold opacity- text-[#fe0000]">
                Password required
              </h1>
              <input
                className="border-none rounded-xl text-2xl text-black p-3 m-2 lg:p-5 bg-gray-300"
                type="password"
                name="password"
                placeholder="PALĪDZĪBAAAAAAAAAAAAAAAAAA"
                required
                />
            </div>
          </div>
        </div>
      </>
    );
  }
  