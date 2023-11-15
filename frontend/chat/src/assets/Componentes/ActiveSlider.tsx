import { Swiper, SwiperSlide }  from 'swiper/react';


import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

import { FreeMode, Pagination } from 'swiper/modules'


import { ServiceData } from '../constants/slider';

const ActiveSlider = () => {
  return (
    <div className='flex items-center justify-center flex-col h-screen bg-[#101015]'>
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
           className='max-w-[90%] lg:max-w-[80%]'
        > 
        {ServiceData.map((item) => (
        <SwiperSlide key={item.title}>
        <div
          className='relative bg-cover bg-center shadow-lg text-black rounded-xl p-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px]'
          style={{ backgroundImage: `url(${item.backgroundImage})` }}
        >
          <div className='absolute inset-0 bg-black opacity-10 group-hover:opacity-50' />
        </div>
      </SwiperSlide>
      
       
        ))}
        </Swiper>
    </div>
  )
}

export default ActiveSlider;

