import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Pagination, Navigation, Scrollbar, A11y } from 'swiper/modules';
import { cocktails } from '../data/dummyData';
import Marquee from '../components/Marquee';
export default function ProductSwiper() {
  return (
    <div className='swiper-wrapper-custom'>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3.5}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="myProductSwiper"
      >
        {cocktails.map((cocktail, index) => (
          <SwiperSlide
            key={index}
            style={{

              backgroundColor: cocktail.bgColor,
            }}
          >
            <div className='marquee-bg'>
              <Marquee title={cocktail.title} />
            </div>


            <p style={{ fontSize: '32px', fontWeight: 'bold' }}>{cocktail.title}</p>
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
      </Swiper>
    </div>

  )

}