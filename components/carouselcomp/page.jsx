'use client';

import dynamic from 'next/dynamic';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImageComponent from '../imagecomponent/page';

const Slider = dynamic(() => import('react-slick'), { ssr: false });

export default function CarouselComp({data}) {
    
//   const settings = { dots: true, infinite: true, speed: 500, slidesToShow: 1, slidesToScroll: 1 };
   const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="slider-container w-70 ">
    <Slider {...settings}>
      <div className=''>
        <ImageComponent data={data} hightData={300} withData={300}/>
      </div>
      <div className=''>
        <ImageComponent data={data} hightData={300} withData={300}/>
      </div>
       <div className=''> 
        <ImageComponent data={data} hightData={300} withData={300}/>
      </div>
    </Slider>
     </div>
  );
}
