export function Tools() {
    return (
        <div className="container flex flex-wrap lg:ml-6 justify-around mt-[10rem]">
        <h1 className="text-white text-6xl font-semibold font-['DM Sans']">
          Tools
        </h1>
      <div className="sm:mt-5 ml-2 flex flex-col flex-wrap">
        <h3 className="text-white lg:text-3xl font-medium font-['DM Sans']">Send private messages</h3> <br />
        <h3 className="text-pink-600 lg:text-2xl font-medium font-['DM Sans'] -mt-[20px]">Send free messages and calls in a <br />simple, reliable and private way</h3> <br />
        <h3 className="text-pink-600 lg:text-2xl font-medium font-['DM Sans'] -mt-[20px]">available worldwide.</h3>
      </div>
        <div className="Cajas mb-[26rem] mt-[12rem] p-1">
        <div className="Cajas-Vertical flex flex-wrap items-center justify-center  gap-7">
          <div className="w-[17rem] h-[17rem] flex flex-col text-center bg-neutral-700 hover:bg-pink-600 rounded-lg text-neutral-200 hover:text-stone-600 pt-20 pl-22 pr-22 hover:pb-8 active:scale-[.99] active:duration-75 transition-all hover:scale-[1.08] ease-in-out">
            <h2 className="lg:text-3xl ">
                Simple
            </h2>
            <p className="simple-text text-center mt-4 text-xl text-transparent hover:text-zinc-900">
                 It's so simple that <br/> you already know how to use it          
             </p>
          </div>
          <div className="w-[17rem] h-[17rem] flex flex-col text-center bg-neutral-700 hover:bg-pink-600 rounded-lg text-neutral-200 hover:text-stone-600 pt-20 pl-22 pr-22 hover:pb-8 active:scale-[.99] active:duration-75 transition-all hover:scale-[1.08] ease-in-out">
            <h2 className="lg:text-3xl ">
                Fast
            </h2>
            <p className="simple-text text-center mt-4 text-xl text-transparent hover:text-zinc-900">
                Deliver messages faster than any other app        
             </p>
          </div>
          <div className="w-[17rem] h-[17rem] flex flex-col text-center bg-neutral-700 hover:bg-pink-600 rounded-lg text-neutral-200 hover:text-stone-600 pt-20 pl-22 pr-22 hover:pb-8 active:scale-[.99] active:duration-75 transition-all hover:scale-[1.08] ease-in-out">
            <h2 className="lg:text-3xl ">
                Safe
            </h2>
            <p className="simple-text text-center mt-4 text-xl text-transparent hover:text-zinc-900">
                Keeps your messages safe from hacker attacks               
              </p>
          </div>
          <div className="w-[17rem] h-[17rem] flex flex-col text-center bg-neutral-700 hover:bg-pink-600 rounded-lg text-neutral-200 hover:text-stone-600 pt-20 pl-22 pr-22 hover:pb-8 active:scale-[.99] active:duration-75 transition-all hover:scale-[1.08] ease-in-out">
            <h2 className="lg:text-3xl ">
                Modern
            </h2>
            <p className="simple-text text-center mt-4 text-xl text-transparent hover:text-zinc-900">
                Allows you to completely customize your application.               
            </p>
          </div>
        </div>
        <div className="Cajas-horizontal mb-20 mt-7 flex flex-wrap gap-7 justify-around text-center aling-center ">
          <div className="lg:w-[28rem] lg:h-[12rem] w-[17rem] h-[17rem] text-neutral-200 hover:text-zinc-900 bg-neutral-700 hover:bg-pink-600 rounded-lg  pt-16 pl-22 pr-22 hover:pb-8 active:scale-[.99] active:duration-75 transition-all hover:scale-[1.08] ease-in-out">
            <h2 className="text-2xl mb-1">
              Android/Ios
            </h2>
              <p className="text-xl text-white">
                Click here
              </p>
          </div>
          <div className="lg:w-[28rem] lg:h-[12rem] w-[17rem] h-[17rem]  text-neutral-200 hover:text-zinc-900 bg-neutral-700 hover:bg-pink-600 rounded-lg  pt-16 pl-22 pr-22 hover:pb-8 active:scale-[.99] active:duration-75 transition-all hover:scale-[1.08] ease-in-out">
            <h2 className="text-2xl mb-1">
              Windows/Mac
            </h2>
              <p className="text-xl text-white">
                Click here
              </p>
          </div>
        </div>
       </div>
       </div>
    )   
}