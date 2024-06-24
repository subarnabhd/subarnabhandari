import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa6";

const Studiofooter = () => {
  return (
    <div className="container m-auto py-20 px-4 border-t border-gray-900 flex justify-between items-center">
      <Link
        href="/"
        className="flex text-center justify-content"
        aria-label="Subarna Bhandari Home"
      >
        <Image
          src="studio/thesubarnastudio.svg"
          width={200}
          height={100}
          alt="Subarna Bhandari Logo"
        />
      </Link>
      <div aria-label="Social media links" className="flex  gap-5 w-min">
        <Link
          className="p-5 text-xl bg-white30  rounded-full  color-white100 hover-color-white100 hover-bg-primary"
          href="https://www.facebook.com/TheSubarnaStudio"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          title="Visit our Facebook page"
        >
          <FaFacebookF aria-hidden="true" />
          <span className="sr-only">Facebook</span>
        </Link>
        <Link
          className="p-5 text-xl bg-white30  rounded-full  color-white100 hover-color-white100 hover-bg-primary"
          href="https://www.instagram.com/TheSubarnaStudio"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          title="Visit our Instagram profile"
        >
          <FaInstagram aria-hidden="true" />
          <span className="sr-only">Instagram</span>
        </Link>

        <Link
          className="p-5 text-xl bg-white30  rounded-full  color-white100 hover-color-white100 hover-bg-primary"
          href="https://www.linkedin.com/company/TheSubarnaStudio"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          title="Visit our LinkedIn page"
        >
          <FaLinkedinIn aria-hidden="true" />
          <span className="sr-only">LinkedIn</span>
        </Link>
      </div>
    </div>
  );
}

export default Studiofooter