import Image from "next/image";
import Link from "next/link";
import React from "react";

const header = () => {
  return (
    <div className="s-header  sticky  top-0 h-[64px] flex items-center">
      <div className="container flex m-auto items-center justify-between">
        <Link
          className=" h-[25px] text-center flex w-max justify-start"
          href="/"
        >
          <Image src="/logo.svg" width={190} height={100} alt="" />
        </Link>

        <div
          className="hidden w-full md:block md:w-auto px-10"
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4  md:p-0 mt-4 border  rounded-lg md:flex-row md:space-x rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <Link
                href="/"
                className="block px-5 py-3 text-xs rounded-full color-white95 hover-color-white100"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block px-5 py-3 text-xs rounded-full color-white95 hover-color-white100"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/studio"
                className="block px-5 py-3 text-xs rounded-full color-white95 hover-color-white100"
              >
                Studio<b>.</b>
              </Link>
            </li>
            <li>
              <Link
                href="/portfolio"
                className="block px-5 py-3 text-xs rounded-full color-white95 hover-color-white100"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block px-5 py-3 text-xs rounded-full color-white95 hover-color-white100"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <Link className=" h-[25px] align-middle text-center flex" href="/">
          <Image src="/menu.svg" width={190} height={100} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default header;
