"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { RiCloseLargeFill } from "react-icons/ri";

const Header = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

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

  const handleMenuClick = (event) => {
    event.preventDefault();
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="s-header">
      <div className="container flex m-auto items-center justify-between">
        <Link className="s-header-logo" href="/">
          {/* Add your logo here */}
        </Link>

        <div className="hidden w-full md:block md:w-auto px-10" id="navbar-default">
          <ul className="s-header-nav font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <Link href="/" className="s-header-link">Home</Link>
            </li>
            <li>
              <Link href="/about" className="s-header-link">About</Link>
            </li>
            <li>
              <Link href="/studio" className="s-header-link">Studio<b>.</b></Link>
            </li>
            <li>
              <Link href="/portfolio" className="s-header-link">Portfolio</Link>
            </li>
            <li>
              <Link href="/contact" className="s-header-link">Contact</Link>
            </li>
          </ul>
        </div>

        <Link className="s-header-menu text-blue-500 hover:underline" href="/" onClick={handleMenuClick}>
        </Link>
      </div>

      {isPopupOpen && (
        <div className="menu absolute z-50 h-screen w-full  bg-black ">
         


        <div className="container m-auto h-screen flex flex-col justify-between py-4">
          <div className="flex justify-end">
            <button type="button" className="text-4xl text-white" data-bs-dismiss="modal" aria-label="Close"  onClick={handleClosePopup}><RiCloseLargeFill /></button>
          </div>
          <div className="modal-body text-white flex">
            <div className="left">
              <ul>
                <li><Link href="/index" className="modal-dot">Home</Link></li>
                <li><Link href="/about" className="modal-dot">About</Link></li>
                <li><Link href="/studio" className="modal-dot">Studio<b>.</b></Link></li>
                <li><Link href="/portfolio" className="modal-dot">Portfolio</Link></li>
                <li><Link href="/contact" className="modal-dot">Contact</Link></li>

              </ul>
            </div>
            <div className="center">
              <ul>
                <h3>Useful Link</h3>
                <li><Link href="/blog" className="modal-sm-dot">Good Reads</Link></li>
                <li><Link href="/cv" className="modal-sm-dot">Resume</Link></li>
                <li><Link href="/link" className="modal-sm-dot">Link</Link></li>
                <li><Link href="/tools" className="modal-sm-dot">Tools</Link></li>
                <li><Link target="_blank" href="/pay" className="modal-sm-dot">Pay</Link>
                </li>

              </ul>
            </div>
            <div className="right">
              <h3>Got an idea?</h3>
              <h2 className="pb-10">Together, let‘s create
                something wonderful.</h2>
              <Link href="/contact" className="primary-btn" type="button">Start your project</Link>
            </div>
          </div>
          <div className="modal-footer">
            <div className="modal-container flex justify-between">
              <div className="left flex">
                <li><Link target="_blank" href="https://facebook.com/subarnabhd" className="m-foot-link">Facebook</Link></li>
                <li><Link target="_blank" href="https://instagram.com/subarnabhd" className="m-foot-link">Instagram</Link></li>
                <li><Link target="_blank" href="https://www.linkedin.com/in/subarnabhd" className="m-foot-link">Linkedin</Link>
                </li>
                <li><Link target="_blank" href="https://twitter.com/subarnabhd" className="m-foot-link">Twitter</Link></li>
                <li><Link target="_blank" href="https://behance.net/subarnabhd" className="m-foot-link">Behance</Link></li>
                <li><Link target="_blank" href="https://dribbble.com/subarnabhd" className="m-foot-link">Dribbble</Link></li>
                <li><Link target="_blank" href="/link" className="m-foot-link">More..</Link></li>

              </div>
              <div className="right">
                <li><Link target="_blank" href="mailto:hello@subarnabhandari.com">hello@subarnabhandari.com</Link></li>

              </div>



            </div>
          </div>

 
  </div>


        </div>
      )}
    </div>
  );
};

export default Header;
