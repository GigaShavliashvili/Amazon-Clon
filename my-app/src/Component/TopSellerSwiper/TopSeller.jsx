import React from 'react'
import { Navigation, Scrollbar} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "./topSeller.scss";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
const TopSeller = props => {
const items = props.items;
if(items.length === 0){
return <h1>Loading...</h1>
}else
  return (
  <div className='TopSeller-Section'>
    <h2>Top Sellers in Books for you</h2>
   <Swiper
      // install Swiper modules
      modules={[Navigation, Scrollbar]}
      spaceBetween={20}
   slidesPerView={'auto'}
      navigation
      scrollbar={{ draggable: true }}
    >
        {items.map((item) =>{
            return <SwiperSlide key={item.id}  className="Bookslider">
              <div className="Bookimage">
              <img src={item.formats["image/jpeg"]} alt="" />
              </div>
             </SwiperSlide>
        })}
    </Swiper>
    </div>
  )
}

export default TopSeller;