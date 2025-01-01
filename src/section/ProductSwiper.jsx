import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Pagination, Navigation, Scrollbar, A11y} from 'swiper/modules';
import { cocktails } from '../data/dummyData';
export  default function ProductSwiper() {
return (
  <Swiper
  modules={[Navigation, Pagination, Scrollbar, A11y]}
  spaceBetween={50}
  slidesPerView={4}
  navigation
  pagination={{ clickable: true }}
  scrollbar={{ draggable: true }}
  className="myProductSwiper"
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
              backgroundColor: cocktail.bgColor
            }}
          >
             <p style={{ fontSize: '18px', fontWeight: 'bold' }}>{cocktail.title}</p>
            <ul>
              {Object.entries(cocktail.ingredients).map(([key, value]) => (
                <li key={key}>
                  {key}: {value}
                </li>
              ))}
            </ul>
            <img
              src={cocktail.img}
              alt={cocktail.title}
            />
           
          </SwiperSlide>
        ))}
  ...
</Swiper>
)

}