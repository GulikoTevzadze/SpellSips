import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation,} from 'swiper/modules';
import { cocktails } from '../data/dummyData';

export default function HomeSwiper() {
  return (
    <Swiper
      slidesPerView={2.5}
      spaceBetween={0}
      loop={true}
      pagination={{
        clickable: true,
      }}
     
      grabCursor={true}
      navigation={true}
      centeredSlides={true}
      speed={1000}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {cocktails.map((cocktail, index) => (
        <SwiperSlide
          key={index}
          style={{
            height: '1100px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src={cocktail.img}
            alt={cocktail.title}
          />
          <p style={{ fontSize: '18px', fontWeight: 'bold' }}>{cocktail.title}</p>
          <ul>
            {Object.entries(cocktail.ingredients).map(([key, value]) => (
              <li key={key}>
                {key}: {value}
              </li>
            ))}
          </ul>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}