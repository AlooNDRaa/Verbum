
import { FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="w-full mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-500 bg-[#191A26] bg-opacity-40 absolute bottom-0">
          <div>
            <h1 className=' font-semibold text-pink-600'>Verbum</h1>
            <p className='py-4'>Rapidez, comodidad, diversión, anonimato</p>
             <div className='flex justify-between md:w-[75%] my-6 lg:col-span-2 '>
                <FaFacebookSquare size={30}/>
                <FaInstagramSquare size={30}/>
                <FaGithubSquare size={30}/>
                <FaTwitterSquare size={30}/>
             </div>
          </div>
          <div className='lg:col-span-2 flex justify-between'>
             <div>
               <h6 className='text-pink-600 font-semibold'>Sobre Nosotros</h6>
                <ul>
                <li className='py-2 text-sm'>Chat web</li>
                  <li className='py-2 text-sm'>Blog Verbum</li>
                  <li className='py-2 text-sm'>Verbum Privado</li>
                </ul>
             </div>
             <div>
               <h6 className='text-pink-600 font-semibold'>Solutions</h6>
                <ul>
                  <li className='py-2 text-sm'>Funciones</li>
                  <li className='py-2 text-sm'>Otros Proyectos</li>
                  <li className='py-2 text-sm'>Noticias</li>
                  <li className='py-2 text-sm'></li>
                </ul>
             </div>
             <div>
               <h6 className='text-pink-600 font-semibold'>¿Necesitas ayuda?</h6>
                <ul>
                  <li className='py-2 text-sm'>Ayuda</li>
                  <li className='py-2 text-sm'>Privacidad</li>
                  <li className='py-2 text-sm'>Contacto</li>
                </ul>
             </div>
          
          </div>
        </div>
     );
  };
  
  export default Footer;
  