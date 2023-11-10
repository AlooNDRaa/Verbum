
import { FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="w-full mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-500 bg-[#191A26] bg-opacity-40 absolute bottom-0">
          <div>
            <h1 className='bg-[#191A26] bg-opacity-40 font-semibold text-pink-600'>REACT.</h1>
            <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eveniet reprehenderit quam asperiores libero? Obcaecati quas nobis ex repudiandae nisi cumque, expedita eius dignissimos non voluptatum quibusdam ab! Illo, sequi.</p>
             <div className='flex justify-between md:w-[75%] my-6 lg:col-span-2 '>
                <FaFacebookSquare size={30}/>
                <FaInstagramSquare size={30}/>
                <FaGithubSquare size={30}/>
                <FaTwitterSquare size={30}/>
             </div>
          </div>
          <div className='lg:col-span-2 flex justify-between'>
             <div>
               <h6 className='text-pink-600 font-semibold'>Solutions</h6>
                <ul>
                  <li className='py-2 text-sm'>Analytics</li>
                  <li className='py-2 text-sm'>Marketing</li>
                  <li className='py-2 text-sm'>Commerce</li>
                  <li className='py-2 text-sm'>Insights</li>
                </ul>
             </div>
             <div>
               <h6 className='text-pink-600 font-semibold'>Solutions</h6>
                <ul>
                  <li className='py-2 text-sm'>Analytics</li>
                  <li className='py-2 text-sm'>Marketing</li>
                  <li className='py-2 text-sm'>Commerce</li>
                  <li className='py-2 text-sm'>Insights</li>
                </ul>
             </div>
             <div>
               <h6 className='text-pink-600 font-semibold'>Solutions</h6>
                <ul>
                  <li className='py-2 text-sm'>Analytics</li>
                  <li className='py-2 text-sm'>Marketing</li>
                  <li className='py-2 text-sm'>Commerce</li>
                  <li className='py-2 text-sm'>Insights</li>
                </ul>
             </div>
          </div>
        </div>
     );
  };
  
  export default Footer;
  