import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, } from 'swiper/modules';
import { cocktails } from '../data/dummyData';
import Marquee from '../components/Marquee';
export default function HomeSwiper() {
  const [sectionBg, setSectionBg] = useState('#ff00ff')
  const [activeSlide, setActiveSlide] = useState(0)

  const handleSwipeChange = (swiper) => {
    setActiveSlide(swiper.realIndex)
    setSectionBg(cocktails[swiper.realIndex].bgColor)
  }
  return (
    <section className='home-coctails-slider' style={{backgroundColor: sectionBg}}>
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
        onTransitionStart={handleSwipeChange}
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
            <p>{cocktail.title}</p>
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
      <div className="home-coctails-slider-marquee">
        <Marquee title={cocktails[activeSlide].title} />
      </div>
    </section>
  );
}