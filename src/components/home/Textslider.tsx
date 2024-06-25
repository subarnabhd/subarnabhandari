"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay } from "swiper/modules";

export default function Textslider() {
  return (
    <>
      <Swiper
        slidesPerView={6}
        cssMode={true}
        spaceBetween={50}
        freeMode={true}
        loop={true}
        autoplay={{
          delay: 65,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay]}
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
