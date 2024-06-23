"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import Star from "../lottie/Rating";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Rating from "../lottie/Rating";

interface SlideProps {
  src: string;
  href: string;
}

const Slide: React.FC<SlideProps> = ({ src, href }) => (
  <SwiperSlide>
    <Link href={href} target="_blank">
      <Image src={src} alt="Slide" width={300} height={300} />
    </Link>
  </SwiperSlide>
);

interface SliderProps {
  slides: SlideProps[];
}

const Designs: React.FC<SliderProps> = ({ slides }) => (
  <div className="good-design bg-white py-28 w-header">
    <Rating />
    <h2 className="site-h text-black">
      Striving to create elegant & effortless designs.
    </h2>
    <p className="text-lg color-black55">
      Unlimited possibility to reach out. Create your own brand with Subarna.
    </p>
    {/* <div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <Slide key={index} {...slide} />
        ))}
      </Swiper>
    </div> */}
  </div>
);

const App = () => {
  const slides = [
    { src: "/path/to/image1.jpg", href: "https://example.com/1" },
    { src: "/path/to/image2.jpg", href: "https://example.com/2" },
    { src: "/path/to/image3.jpg", href: "https://example.com/3" },
    { src: "/path/to/image4.jpg", href: "https://example.com/4" },

  ];

  return <Designs slides={slides} />;
};

export default App;
