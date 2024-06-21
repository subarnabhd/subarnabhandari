"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Parallax, Pagination, Navigation } from "swiper/modules";
import Link from "next/link";

export default function App() {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div className="t-slide-1 h-[337px] p-10 bg-black rounded-xl"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="t-slide-2 h-[337px] p-10 bg-black rounded-xl">
            <div className="title" data-swiper-parallax="-300">
              The Subarna Studio
            </div>
            <div
              className="text-sm color-white80 pb-5"
              data-swiper-parallax="-200"
            >
              Creating Brands, That people Love.
            </div>
            <div className="text" data-swiper-parallax="-100">
              <Link
                className="btn primary-sm-btn"
                href="https://studio.subarnabhandari.com/"
              >
                studio.subarnabhandari.com
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="t-slide-3 h-[337px] p-10 bg-black rounded-xl">
            <div className="title" data-swiper-parallax="-300">
              Subarna Bhandari
            </div>
            <div
              className="text-sm color-white80 pb-5"
              data-swiper-parallax="-200"
            >
              Just be yourself.
            </div>
            <div className="text" data-swiper-parallax="-100">
              <Link className="btn primary-sm-btn" href="/">
                subarnabhandari.com
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
