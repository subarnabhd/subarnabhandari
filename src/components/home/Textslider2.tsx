"use client"
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// import required modules
import { Autoplay,  Navigation, Mousewheel } from "swiper/modules";

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
          <p>UI Design</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>UX Design</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>Product Design</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>Graphic Design</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>UI Designer</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>UX Designer</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>Market Analysis</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>Social Media</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>Digital Marketing</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>Product Validation</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>UI Components</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>Figma</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>UI Design</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>UX Design</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>Product Design</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>Graphic Design</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>UI Designer</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>UX Designer</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>Market Analysis</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>Social Media</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>Digital Marketing</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>Product Validation</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>UI Components</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>Figma</p>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
