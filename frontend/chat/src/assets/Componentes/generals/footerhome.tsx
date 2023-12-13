
import { FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <div className='bg-[#191A26] bottom-0 relative'>
        <div className="w-full mx-auto py-16 px-7 grid lg:grid-cols-3 gap-7 text-gray-500 bg-[#191A26] bg-opacity-40 ">
          <div className='mx-4 '>
            <h1 className=' font-semibold text-pink-600'>Verbum</h1>
            <p className='py-4'>Speed, comfort, fun, anonymity</p>
             <div className='flex justify-between md:w-[75%] my-6 lg:col-span-2'>
             <a href="https://www.facebook.com/?locale=es_LA" target="_blank">
              <FaFacebookSquare size={30} />
            </a>
            <a href="https://about.instagram.com/es-la" target="_blank">
              <FaInstagramSquare size={30} />
            </a>
            <a href="https://github.com/AlooNDRaa/Verbum" target="_blank">
              <FaGithubSquare size={30} />
            </a>
            <a href="https://twitter.com/?lang=es" target="_blank">
              <FaTwitterSquare size={30} />
            </a>
             </div>
          </div>
          <div className='lg:col-span-2 gap-7 flex justify-between p-[1rem]'>
             <div>
               <h6 className='text-pink-600 font-semibold'>Functions</h6>
                <ul>
                <li className='py-2 text-sm'><Link to="/chats">Chat</Link></li>
                  <li className='py-2 text-sm'><Link to="/blog">Blog</Link> </li>
                  <li className='py-2 text-sm'><Link to="/">Private</Link></li>
                </ul>
             </div>
             <div>
               <h6 className='text-pink-600 font-semibold'>About Us</h6>
                <ul>
                  <li className='py-2 text-sm'><Link to="/blog">Our Team</Link></li>
                  <li className='py-2 text-sm'><Link to="/blog">Other Proyects</Link></li>
                  <li className='py-2 text-sm'><Link to="/blog">News</Link></li>
                  
                </ul>
             </div>
             <div className='mx-4'>
               <h6 className='text-pink-600 font-semibold'>Need help?</h6>
                <ul>
                  <li className='py-2 text-sm'><Link to="/blog">Help</Link></li>
                  <li className='py-2 text-sm'><Link to="/blog">Privacy</Link></li>
                  <li className='py-2 text-sm'><Link to="/blog">Contact</Link></li>
                </ul>
             </div>
          
          </div>
        </div>
        <hr className='col-span-3 border-gray-500 w-auto mx-[3rem]'></hr>
          <p className='col-span-3 text-center font-semibold text-gray-500 p-[1rem] '>All rights reserved &copy; 2023</p>
        </div>
     );
  };
  
  export default Footer;
  