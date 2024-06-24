"use client"
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// import required modules
import { Autoplay, Mousewheel, Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={12}
        cssMode={true}
        spaceBetween={20}
        freeMode={true}
        loop={true}
        autoplay={{
          delay: 200,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
          reverseDirection: false,
        }}
        navigation={false}
        mousewheel={{
          forceToAxis: true,
          releaseOnEdges: true,
        }}
        modules={[Autoplay, Navigation, Mousewheel]}
        className="mySwiper"
      >
        <SwiperSlide>
          <p>Subarna Bhandari</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>The Subarna Studio</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>TSS</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>www.subarnabhandari.com</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>Subarna Bhandari</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>Subarna Bhandari</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>Subarna Bhandari</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>The Subarna Studio</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>TSS</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>www.subarnabhandari.com</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>Subarna Bhandari</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>Subarna Bhandari</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>subarnabhd</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>Subarna Bhandari</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>The Subarna Studio</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>TSS</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>www.subarnabhandari.com</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>Subarna Bhandari</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>Subarna Bhandari</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>Subarna Bhandari</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>The Subarna Studio</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>TSS</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>www.subarnabhandari.com</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>Subarna Bhandari</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>Subarna Bhandari</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>subarnabhd</p>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
