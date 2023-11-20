import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Card {
  id: number;
  title: string;
  content: string;
}

interface SliderProps {
  cards: Card[];
}

const Slide: React.FC<Card> = ({ id, title, content }) => (
  <div key={id} className="p-4 flex justify-center">
    <div className="bg-neutral-700 rounded-lg p-9 shadow-md ">
      <h2 className="text-2xl text-zinc-300 mb-7 font-semibold">
        {title}
        </h2>
      <p className='text-xl text-zinc-100'>
        {content}
        </p>
    </div>
  </div>
);

const SimpleSlider: React.FC<SliderProps> = ({ cards }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
    <div className='text-6xl text-white font-semibold mt-8'>
      News
    </div>
    <div className="w-[20rem] lg:w-[60rem] m-auto mt-8 mb-12">
      <Slider {...settings}>
        {cards.map((card) => (
          <Slide key={card.id} {...card} />
        ))}
      </Slider>
    </div>
    </>
  );
};

export default SimpleSlider;
