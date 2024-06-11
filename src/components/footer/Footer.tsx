import Image from "next/image";
import Link from "next/link";
import React from "react";
import Socialmedia from "./Socialmedia";
import Downloadapp from "../Downloadapp";

function Footer() {
  return (
    <div className="s-footer pt-20 pb-7 border-t border-gray-900 ">
      <div className="container m-auto flex flex-col gap-5 ">
        <div className="flex gap-5 color-white90">
          <Image src="/logo.svg" width={50} height={100} alt="" />
          <p className="text-base">
            I'm the design maestro that turns businesses into market stars.
            Whether it's web, graphic, or UI/UX, I specialize in creating
            standout brand identities for entrepreneurs. Let's make your
            business the next big sensation!
          </p>
        </div>
        <div className="flex justify-between">
        <div className="flex justify-between">
            <p className="font-normal text-[14px] hover-white20 color-white90">
              Need more help?{" "}
              <Link href="https://wa.me/9779844740360">Chat on Whatsapp</Link>
              <Link href="tel:+977-9844740360">+977-9844740360</Link>
            </p>
          </div>
          <Socialmedia />
        </div>
        <div className="flex justify-between">
          <p className="font-normal text-xs uppercase">
            EMAIL US :<Link href="mailto:hello@subarnabhandari.com" className="hover-red100">
            &nbsp;hello@subarnabhandari.com
            </Link>
          </p>
          <ul>
            <li className="flex gap-4 font-normal text-xs hover-white20">
              <Link href="/home">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/studio">Studio<b>.</b></Link> 
              <Link href="/portfolio">Portfolio</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/link">Link</Link>
              <Link href="/tools">Tools</Link>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
