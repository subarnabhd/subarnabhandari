import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="v-header sticky top-0 h-[90px] bg-primary-600 flex justify-between  align-middle items-center text-white">
      
      <div className="flex flex-wrap items-center justify-between">
        <Link
          className="v-logo px-5 h-[86px] align-middle text-center flex"
          href="/"
        >
          <Image src="/vhandar-logo.svg" width={190} height={100} alt="" />
        </Link>
      </div>

      <div
        className="hidden w-full md:block md:w-auto px-10"
        id="navbar-default"
      >
        <ul className="font-medium flex flex-col p-4  md:p-0 mt-4 border  rounded-lg md:flex-row md:space-x rtl:space-x-reverse md:mt-0 md:border-0">
          <li>
            <Link
              href="/home"
              className="block px-5 py-3 text-sm rounded-full text-white hover-secondary-500 hover-bg-primary-500 uppercase"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="block px-5 py-3 text-sm rounded-full  text-white  hover-secondary-500 hover-bg-primary-500 uppercase"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="block px-5 py-3 text-sm rounded-full  text-white  hover-secondary-500 hover-bg-primary-500 uppercase"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/careers"
              className="block px-5 py-3 text-sm rounded-full  text-white  hover-secondary-500 hover-bg-primary-500 uppercase"
            >
              Careers
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="block px-5 py-3 text-sm rounded-full text-white hover-secondary-500 hover-bg-primary-500 uppercase"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex gap-5  justify-center  items-center  max-w-md px-4 ">
      

          <Link
            className="w-[190px] h-[55px] px-3 py-[4px] rounded-lg text-l font-semibold  hover-bg-secondary-500  text-center flex gap-2 "
            href="tel:+9779851357358"
          >
            <Image src="/icon/support.svg" width={36} height={24} alt="" />
            <div className="text-left gap-0 flex flex-col">
            <p className="text-lg font-bold tracking-wide mb-[-2px]">9851357358</p>
            <p className="text-xs font-normal">24/7 Support Center</p>
            </div>


          </Link>
        </div>
                
    </div>
  );
};

export default Navbar;
