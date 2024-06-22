"use client";

import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const Homebanner = () => {
  const [isScaled, setIsScaled] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      const cHomeElement = document.querySelector('.c-home') as HTMLElement;
      

      if (cHomeElement) {
        const scale = 1 - scroll / 1000;
        if(scale == 1){
          cHomeElement.style.transform = `scale(1)`;
          cHomeElement.style.borderRadius = '0px';
        } else if (scale >= 0.77){
          cHomeElement.style.transform = `scale(${scale})`;
          cHomeElement.style.borderRadius = `0 0 38px 38px`; // Apply border radius when scaled
          setIsScaled(false);
        } else{
          if (isScaled) {
            cHomeElement.style.borderRadius = '0'; // Reset border radius
          }
        }
        
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScaled]);

  return (
    <div className="home-banner text-center bg-[#F5F5F7] items-center flex flex-col justify-center">
      <div className="home-link">
        <div className="link-left">
          <div className="link-line"></div>
          <div>
            <ul>
              <li>
                <Link href="https://facebook.com/subarnabhd" target="_blank">
                  facebook
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/subarnabhd"
                  target="_blank"
                >
                  linkedin
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/subarnabhd"
                  target="_blank"
                >
                  instagram
                </Link>
              </li>
              <li>
                <Link href="https://behance.net/subarnabhd" target="_blank">
                  Behance
                </Link>
              </li>
              <li>
                <Link href="https://behance.net/subarnabhd" target="_blank">
                  Twitter
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="link-center">
          <div className="link-line"></div>
        </div>

        <div className="link-right">
          <div className="link-line"></div>
          <div>
            <ul>
              <li>
                <Link href="#home-scroll">Scroll Down</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="c-home">
        <div className="items-center flex flex-col gap-5">
          <Image
            src="/about/SubarnaBhandari.webp"
            className="m-auto rounded-full pb-5"
            alt="Subarna Bhandari"
            width={300}
            height={100}
          />
          <h2 className="text-3xl md:text-6xl font-semibold">
            Subarna<b>.</b>
            <span className="font-light">Bhandari</span>
          </h2>
          <p className="color-white50 text-lg md:text-2xl font-normal">
            www.subarnabhandari.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default Homebanner;
