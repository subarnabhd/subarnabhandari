"use client"
import Link from 'next/link';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Slider from "react-slick";


interface SlideProps {
  src: string;
  href: string;
}

const Slide: React.FC<SlideProps> = ({ src, href }) => (
  <div className="swiper-slide">
    <Link href={href} target="_blank">
      <Image src={src} alt="Slide" width={300} height={300} />
    </Link>
  </div>
);

interface SliderProps {
  slides: SlideProps[];
}
const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  speed: 5000,
  autoplaySpeed: 5000,
  cssEase: "linear",
  pauseOnHover: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 1140,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

const Designs: React.FC<SliderProps> = ({ slides }) => (

  <div className="good-design text-center py-20 bg-white w-header">

    <h2 className="site-h text-black">Striving to create elegant & effortless designs.</h2>
    <p className="text-lg color-black55">Unlimited possibility to reach out. Create your own brand with Subarna.</p>

    <div className=" flex gap-2 pt-10 overflow-x-hidden">

      <Slider {...settings}>

        {slides.map(({ src, href }, index) => (
          <div>
            <img className='=' src={src} alt="" />
          </div>
        ))}

      </Slider>

    </div >

  </div >
);

const App: React.FC = () => {
  const slides: SlideProps[] = [
    { src: '/design/slider_1.gif', href: '#' },
    { src: '/design/slider_2.gif', href: '#' },
    { src: '/design/slider_3.webp', href: '#' },
    { src: '/design/slider_4.webp', href: '#' },
    { src: '/design/p.vhandar.png', href: '#' },
    { src: '/design/slider_5.webp', href: '#' },
    { src: '/design/slider_6.webp', href: '#' },
    { src: '/design/slider_7.webp', href: '#' },
    { src: '/design/slider_8.webp', href: '#' },
    { src: '/design/p.track.png', href: '#' },
    { src: '/design/slider_9.webp', href: '#' },
    { src: '/design/slider_10.webp', href: '#' },
    { src: '/design/slider_11.webp', href: '#' },
    { src: '/design/p.bantu.png', href: '#' },
    { src: '/design/slider_12.webp', href: '#' },
    { src: '/design/slider_13.webp', href: '#' },
    { src: '/design/slider_14.webp', href: '#' },
    { src: '/design/slider_15.webp', href: '#' },
    { src: '/design/slider_16.webp', href: '#' },
    { src: '/design/slider_17.webp', href: '#' },
    { src: '/design/slider_18.webp', href: '#' },
    { src: '/design/slider_19.webp', href: '#' },
    { src: '/design/slider_20.webp', href: '#' },
    { src: '/design/slider_21.webp', href: '#' },
    { src: '/design/p.sajha.png', href: '#' },
    { src: '/design/slider_23.webp', href: '#' },
    { src: '/design/slider_24.webp', href: '#' },
    { src: '/design/slider_25.webp', href: '#' },
    { src: '/design/slider_26.webp', href: '#' },
    { src: '/design/slider_27.webp', href: '#' },
    { src: '/design/slider_28.webp', href: '#' },
    // Add more slides as needed
  ];

  return <Designs slides={slides} />;
};

export default App;
