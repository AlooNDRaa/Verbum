import { Swiper, SwiperSlide }  from 'swiper/react';


import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

import { FreeMode, Pagination } from 'swiper/modules'


import { ServiceData } from '../constants/slider';
import { RxArrowTopRight } from 'react-icons/rx';

const ActiveSlider = () => {
  return (
    <div className='flex items-center justify-center flex-col'>
        <Swiper
          breakpoints={{  
            340: {
              slidesPerView: 2,
              spaceBetween: 15
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 15
            }
          }}

           freeMode={true}
           pagination={{
             clickable: true
           }}
           modules={[FreeMode, Pagination]}
           className='w-[4rem] lg:w-[80rem]'
        > 
        {ServiceData.map((item) => (
        <SwiperSlide key={item.title}>
          <div className='flex flex-col relative gap-6 group shadow-lg text-white px-6  py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] cursor-pointer'>
              <div
                className='absolute inset-0 bg-cover bg-center'
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
             <div className='absolute inset-0 bg-[#191A26] opacity-10 group-hover:opacity-40' />
             <div className=' relative flex flex-col gap-3'>
              <item.icon className="text-white group-hover:text-gray-400 w-[32px] h-[32px]"/>
              <h1 className='text-x1 lg:text-2x1'>{item.title}</h1>
              <p className='lg:text-[18px]'>{item.content}</p>
             </div>
            <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100"/>
           </div>
      </SwiperSlide>
      
       
        ))}
        </Swiper>
    </div>
  )
}

export default ActiveSlider;

