"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel, Navigation } from "swiper/modules";

import "swiper/css";

export default function App() {
  return (
    <Swiper
      slidesPerView={12}
      cssMode={true}
      spaceBetween={20}
      freeMode={true}
      loop={true}
      autoplay={{
        delay: 2000, // Adjusted delay to 2000ms (2 seconds) for a noticeable scroll
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
  );
}
