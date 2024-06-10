import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="s-header sticky top-0 h-[64px] flex items-center">
      <div className="container flex m-auto items-center justify-between">
      
      <div className="flex flex-wrap items-center justify-between">
        <Link
          className=" h-[25px] align-middle text-center flex"
          href="/"
        >
          <Image src="/logo.svg" width={190} height={100} alt="" />
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

      <div className="flex flex-wrap items-center justify-between">
        <Link
          className=" h-[25px] align-middle text-center flex"
          href="/"
        >
          <Image src="/menu.svg" width={190} height={100} alt="" />
        </Link>
      </div>
        </div>
                
    </div>
  );
};

export default Navbar;
