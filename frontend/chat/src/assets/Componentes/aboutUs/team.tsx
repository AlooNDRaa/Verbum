import { GiHorseHead, GiFox, GiSeaTurtle, GiKoala   } from "react-icons/gi";


export function Team() {
    return(
        <>
        <div className="p-7 mb-12">
            <h2 className="text-5xl lg:text-6xl font-semibold text-white" id="our-team">
                Our Team:
            </h2>
            <div className="p-6 mt-12 flex flex-wrap lg:flex justify-around">
                <div className="flex flex-col justify-center  items-center bg-black text-pink-200 m-2 h-[7rem] w-[7rem] lg:h-[10rem] lg:w-[10rem] rounded-full">
                    <GiFox size='50'/>
                    <button>
                    <h3 className="text-xl font-semibold ">
                      <a href="https://github.com/AlooNDRaa" target="_blank">Alondra</a>  
                    </h3>
                    </button>
                </div>
                <div className="flex flex-col justify-center items-center bg-black text-pink-200 m-2  h-[7rem] w-[7rem] lg:h-[10rem] lg:w-[10rem] rounded-full">
                    <GiHorseHead size='50' className='ml-2 '/>
                    <button>
                    <h3 className="text-xl font-semibold ">
                      <a href="https://github.com/Ysluna" target="_blank">Yamila</a>  
                    </h3>
                    </button>
                </div>
                <div className="flex flex-col justify-center items-center bg-black text-pink-200 m-2  h-[7rem] w-[7rem] lg:h-[10rem] lg:w-[10rem] rounded-full">
                    <GiSeaTurtle size='50'/>
                    <button>
                    <h3 className="text-xl font-semibold ">
                      <a href="https://github.com/BrendaRuthHerrera" target="_blank">Brenda</a>  
                    </h3>
                    </button>
                </div>
                <div className="flex flex-col justify-center items-center bg-black text-pink-200 m-2  h-[7rem] w-[7rem] lg:h-[10rem] lg:w-[10rem] rounded-full">
                    <GiKoala  size='50'/>
                    <button>
                    <h3 className="text-xl font-semibold ">
                      <a href="https://github.com/Arleth-cordero20" target="_blank">Arleth</a>  
                    </h3>
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}