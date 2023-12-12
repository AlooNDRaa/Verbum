import { Swiper, SwiperSlide }  from 'swiper/react';
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import { FreeMode, Pagination } from 'swiper/modules'
import { ServiceData } from './constants/slider';
import { RxArrowTopRight } from 'react-icons/rx';

const ActiveSlider = () => {
  return (
    <div className='flex items-center h-full'>
        <Swiper
          breakpoints={{  
            340: {
              slidesPerView: 2,
              spaceBetween: 15
            },
            700: {
              slidesPerView: 2,
              spaceBetween: 16
            },
            1000: {
              slidesPerView: 3,
              spaceBetween: 15
            }
          }}

           freeMode={true}
           pagination={{
             clickable: true
           }}
           modules={[FreeMode, Pagination]}
           className='w-[22rem] lg:w-[60rem] xl:w-[86rem]  m-12'
        > 
        {ServiceData.map((item) => (
        <SwiperSlide key={item.title}>
          <div className='flex opacity-70 group shadow-lg text-white p-2 text-sm lg:text-medium lg:px-6 lg:py-8 h-[15rem] w-[15rem] lg:h-[30rem] lg:w-[50%] cursor-pointer'>
              <div
                className='absolute inset-0 bg-no-repeat  bg-cover  bg-center'
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
             <div className='absolute inset-0 bg-[#191A26] group-hover:opacity-40' />
             <div className='group relative flex flex-col gap-3'>
              <item.icon className="text-white group-hover:text-gray-400 w-[2rem] h-[2rem]"/>
              <h1 className='text-x1 lg:text-2x1'>{item.title}</h1>
              <p className='items'>{item.content}</p>
             </div>
            <RxArrowTopRight className="absolute bottom-2 lg:left-5 h-[2rem] w-[2rem] lg:w-[3rem] lg:h-[3rem] text-white group-hover:text-pink-600 group-hover:rotate-45 duration-100"/>
           </div>
      </SwiperSlide> 
        ))}
        </Swiper>
    </div>
  )
}

export default ActiveSlider;

