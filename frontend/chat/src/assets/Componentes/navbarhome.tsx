import { Link } from 'react-scroll';
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { CiMenuFries } from 'react-icons/ci';
import Logo from '../imgs/verbumlog.png';


function Navbar () {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
   
    const content = <>
       <div className="lg:hidden block absolute bg-[#191A26] bg-opacity-40 top-10 w-full left-0 right-0 transition rounded-md ">
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

           <div className="fixed top-0 left-0 right-0 h-5 flex justify-between bg-[#191A26] bg-opacity-40 z-50 text-white lg:py-8 xl:py-10 px-10  p-4">
                <div className="flex items-center flex-1">
                <img src={Logo} alt="img-logo" className="w-6 h-6 max-w-full  sm:w-8 sm:h-8 md:w-15 md:h-15 lg:w-10 lg:h-10 xl:w-12 xl:h-12"/>
                </div>
                <div className="lg:flex md:flex lg:flex-1 bg-white items center justify-end font-normal hidden">
                    <div className="flex-10">
                    <ul className="flex gap-16 mr-16 text-[18px]">
            <Link spy={true} smooth={true} to="home">
              <li className='hover:text-[#B80E65] font-semibold transition hover:border-fuchsia-600 hover:scale-110 cursor-pointer -mt-2'>Inicio</li>
              </Link>
            <Link spy={true} smooth={true} to="About">
              <li className='hover:text-[#B80E65] transition font-semibold hover:border-fuchsia-600 hover:scale-110 cursor-pointer -mt-2'>Verbum Blog</li> 
              </Link>           
            <Link spy={true} smooth={true} to="Services">
              <li className='hover:text-[#B80E65] transition font-semibold hover:border-fuchsia-600 hover:scale-110 cursor-pointer -mt-2'>Ayuda</li> 
              </Link>          
            <Link spy={true} smooth={true} to="Projects">
              <li className='hover:text-[#B80E65] transition font-semibold hover:border-bg-[#B80E65] hover:scale-110 cursor-pointer -mt-2'>Verbum privado</li>
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