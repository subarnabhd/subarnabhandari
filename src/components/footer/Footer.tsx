import Image from "next/image";
import Link from "next/link";
import React from "react";
import Socialmedia from "./Socialmedia";

function Footer() {
  return (
    <div className="s-footer pt-20 pb-7 border-t border-gray-900 px-4 bg-black">
      <div className="container m-auto flex flex-col gap-5 ">
        <div className="flex gap-5 color-white90 pb-10 border-b border-gray-900 items-center">
          <Link href="/" className="hidden md:flex  p-4 bg-white20 hover-bg-white25">
            <Image src="/logo.svg" width={40} height={100} alt="" />
          </Link>
          <p className="text-base text-center md:text-left">
            I'm the design maestro that turns businesses into market stars.
            Whether it's web, graphic, or UI/UX, I specialize in creating
            standout brand identities for entrepreneurs. Let's make your
            business the next big sensation!
          </p>
        </div>
        <div className=" block md:flex  justify-centerx   md:justify-between items-center">
          <div className=" w-full flex justify-center md:justify-start items-center">
            <p className="font-normal text-[14px] color-white90 text-center ">
              Need more help?{" "}
              <Link
                className="color-white100 hover-color-red100  "
                href="https://wa.me/9779844740360"
              >
                Chat on Whatsapp
              </Link>{" "}
              &nbsp;or call &nbsp;
              <Link
                className="color-white100 hover-color-red100 "
                href="tel:+977-9844740360"
              >
                +977-9844740360
              </Link>
            </p>
          </div>
          <div className=" w-full flex justify-center md:justify-end">
            <Socialmedia />
          </div>
        </div>
        <div className="flex justify-between">
          <p className="font-normal text-xs uppercase color-white95  w-full flex justify-center md:justify-start">
            EMAIL US :
            <Link
              className="color-white100 hover-color-red100"
              href="mailto:hello@subarnabhandari.com"
            >
              &nbsp;hello@subarnabhandari.com
            </Link>
          </p>
          <ul>
            <li className="md:flex gap-4 font-normal text-xs hidden ">
              <Link className="color-white95 hover-color-white100" href="/home">
                Home
              </Link>
              <Link
                className="color-white95 hover-color-white100"
                href="/about"
              >
                About
              </Link>
              <Link
                className="color-white95 hover-color-white100"
                href="/studio"
              >
                Studio<b>.</b>
              </Link>
              <Link
                className="color-white95 hover-color-white100"
                href="/portfolio"
              >
                Portfolio
              </Link>
              <Link className="color-white95 hover-color-white100" href="/blog">
                Blog
              </Link>
              <Link className="color-white95 hover-color-white100" href="/link">
                Link
              </Link>
              <Link
                className="color-white95 hover-color-white100"
                href="/tools"
              >
                Tools
              </Link>
              <Link
                className="color-white95 hover-color-white100"
                href="/donate"
              >
                Donate
              </Link>
              <Link
                className="color-white95 hover-color-white100"
                href="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
