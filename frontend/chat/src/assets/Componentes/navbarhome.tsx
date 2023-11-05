import { Link } from 'react-scroll';
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { CiMenuFries } from 'react-icons/ci';


function Navbar () {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
   
    const content = <>
       <div className="lg:hidden block absolute top-10 w-full left-0 right-0 bg-black transition rounded-md ">
          <ul className='text-center text-x1 p-5'>
            <Link spy={true} smooth={true} to="home">
              <li className='my-4 py-4 border-b border-slate-800 hover:bg.slate-800 hover:rounded'>Inicio</li>
              </Link>
            <Link spy={true} smooth={true} to="About">
              <li className='my-4 py-4 border-b border-slate-800 hover:bg.slate-800 hover:rounded'>Verbum Blog</li>  
              </Link>          
            <Link spy={true} smooth={true} to="Services">
              <li className='my-4 py-4 border-b border-slate-800 hover:bg.slate-800 hover:rounded'>Ayuda</li>    
              </Link>        
            <Link spy={true} smooth={true} to="Projects">
              <li className='my-4 py-4 border-b border-slate-800 hover:bg.slate-800 hover:rounded'>Projects</li>
              </Link>
          </ul>
        </div>
     </>


    return (
        <nav>

           <div className="h-5 flex justify-between bg-[#101015] z-50 text-white lg:py-8 px-10 py-4">
                <div className="flex items-center flex-1">
                <img src="/Group 1.png" alt="Mi Imagen" className="w-6 h-6 max-w-full sm:w-8 sm:h-8 md:w-15 md:h-15 lg:w-10 lg:h-10 xl:w-10 xl:h-10"/>
                </div>
                <div className="lg:flex md:flex lg:flex-1 items center justify-end font-normal hidden">
                    <div className="flex-10">
                    <ul className="flex gap-16 mr-16 text-[18px]">
            <Link spy={true} smooth={true} to="home">
              <li className='hover:text-fuchsia-600 transition hover:border-fuchsia-600 hover:scale-110 cursor-pointer -mt-2'>Inicio</li>
              </Link>
            <Link spy={true} smooth={true} to="About">
              <li className='hover:text-fuchsia-600 transition  hover:border-fuchsia-600 hover:scale-110 cursor-pointer -mt-2'>Verbum Blog</li> 
              </Link>           
            <Link spy={true} smooth={true} to="Services">
              <li className='hover:text-fuchsia-600 transition hover:border-fuchsia-600 hover:scale-110 cursor-pointer -mt-2'>Ayuda</li> 
              </Link>          
            <Link spy={true} smooth={true} to="Projects">
              <li className='hover:text-fuchsia-600 transition  hover:border-fuchsia-600 hover:scale-110 cursor-pointer -mt-2'>Verbum privado</li>
              </Link>
         </ul>
                    </div>
                </div>
                <div>
                   {click && content}
                </div>

                <button className='block sm:hidden transition' onClick={handleClick}>
                  {click ? <FaTimes/> : <CiMenuFries/>}  
                </button>
           </div>
 
        </nav>       
    )}
    
    export default Navbar ;