'use client';

import dynamic from 'next/dynamic';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImageComponent from '../imagecomponent/page';
import Link from 'next/link';

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
  console.log(data.href,"...")

  return (
    <div className="slider-container w-70">
    <Slider {...settings}>
       <Link  href={data.href}>
      <div className=' w-full'>
        <ImageComponent data={data.img} hightData={data.height} withData={data.width}/>
      </div>
        </Link>
      <Link href={data.href}>
      <div className=' w-full'>
        <ImageComponent data={data.img} hightData={data.height} withData={data.width}/>
      </div>
        </Link>  
        <Link href={data.href}>
      <div className=' w-full'>
        <ImageComponent data={data.img} hightData={data.height} withData={data.width}/>
      </div>
        </Link>
    
     
    </Slider>
     </div>
  );
}
