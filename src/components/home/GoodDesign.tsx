"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Rating from "../lottie/Rating";
import Link from "next/link";
import Image from "next/image";

const GoodDesign: React.FC = () => {
  const slides = [
    { src: "/design/slider_1.gif", href: "#" },
    { src: "/design/slider_2.gif", href: "#" },
    { src: "/design/slider_3.webp", href: "#" },
    { src: "/design/slider_4.webp", href: "#" },
    { src: "/design/p.vhandar.png", href: "#" },
    { src: "/design/slider_5.webp", href: "#" },
    { src: "/design/slider_6.webp", href: "#" },
    { src: "/design/slider_7.webp", href: "#" },
    { src: "/design/slider_8.webp", href: "#" },
    { src: "/design/p.track.png", href: "#" },
    { src: "/design/slider_9.webp", href: "#" },
    { src: "/design/slider_10.webp", href: "#" },
    { src: "/design/slider_11.webp", href: "#" },
    { src: "/design/p.bantu.png", href: "#" },
    { src: "/design/slider_12.webp", href: "#" },
    { src: "/design/slider_13.webp", href: "#" },
    { src: "/design/slider_14.webp", href: "#" },
    { src: "/design/slider_15.webp", href: "#" },
    { src: "/design/slider_16.webp", href: "#" },
    { src: "/design/slider_17.webp", href: "#" },
    { src: "/design/slider_18.webp", href: "#" },
    { src: "/design/slider_19.webp", href: "#" },
    { src: "/design/slider_20.webp", href: "#" },
    { src: "/design/slider_21.webp", href: "#" },
    { src: "/design/p.sajha.png", href: "#" },
    { src: "/design/slider_23.webp", href: "#" },
    { src: "/design/slider_24.webp", href: "#" },
    { src: "/design/slider_25.webp", href: "#" },
    { src: "/design/slider_26.webp", href: "#" },
    { src: "/design/slider_27.webp", href: "#" },
    { src: "/design/slider_28.webp", href: "#" },
    // Add more slides as needed
  ];

  return (
    <>
      <div className="good-design bg-white py-28 w-header overflow-hidden">
        <Rating />
        <h2 className="site-h text-black">
          Striving to create elegant & effortless designs.
        </h2>
        <p className="text-lg color-black55">
          Unlimited possibility to reach out. Create your own brand with
          Subarna.
        </p>
        <Swiper
          slidesPerView={5}
          cssMode={true}
          spaceBetween={50}
          freeMode={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,

        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay]}
        className="mySwiper"
      >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <Link href={slide.href}>
                <Image
                  src={slide.src}
                  alt={`Slide ${index + 1}`}
                  width="350"
                  height="350"
                ></Image>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default GoodDesign;
