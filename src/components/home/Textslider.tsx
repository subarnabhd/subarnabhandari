"use client"
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function App() {
  return (
    <>

        <Swiper
          slidesPerView={10}
          cssMode={true}
          spaceBetween={20}
          freeMode={true}
          loop={true}
          autoplay={{
            delay: 500,
            pauseOnMouseEnter: false,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          pagination={{
            clickable: false,
          }}
          navigation={false}
          modules={[Autoplay, Navigation]}
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
