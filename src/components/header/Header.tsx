 "use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    const navigation = document.querySelector(".s-header") as HTMLElement | null;
    const darkSections = document.querySelectorAll('.w-header') as NodeListOf<HTMLElement>;

    if (!navigation) return;

    const headerDarkMode = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      let isOverAnyDarkSection = false;

      darkSections.forEach((darkSection) => {
        const top = darkSection.offsetTop;
        const height = darkSection.offsetHeight;
        const bottom = top + height;
        if (scrollTop >= top - 20 && scrollTop < bottom - 20) {
          isOverAnyDarkSection = true;
        }
      });

      if (scrollTop <= 45 || isOverAnyDarkSection) {
        navigation.classList.add('minimal');
      } else {
        navigation.classList.remove('minimal');
      }
    };

    const handleScroll = () => {
      if (navigation) {
        headerDarkMode();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="s-header">
      <div className="container flex m-auto items-center justify-between">
        <Link
          className="s-header-logo"
          href="/"
        >
        </Link>

        <div
          className="hidden w-full md:block md:w-auto px-10"
          id="navbar-default"
        >
          <ul className="s-header-nav font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <Link
                href="/"
                 className="s-header-link"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
    className="s-header-link"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/studio"
                className="s-header-link"
              >
                Studio<b>.</b>
              </Link>
            </li>
            <li>
              <Link
                href="/portfolio"
            className="s-header-link"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                  className="s-header-link"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <Link className="s-header-menu" href="/">
         
        </Link>
      </div>
    </div>
  );
};

export default Header;
