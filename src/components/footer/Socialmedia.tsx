import React from "react";
import { FaTiktok } from "react-icons/fa";
import { IoMdMailOpen } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const Socialmedia = () => {
  return (
    <div aria-label="Social media links" className="flex row gap-3 w-min">
      <Link
        className="p-3 text-l  color-white95 hover-color-white100 hover-bg-white20"
        href="https://www.facebook.com/subarnabhd"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        title="Visit our Facebook page"
      >
        <FaFacebookF aria-hidden="true" />
        <span className="sr-only">Facebook</span>
      </Link>
      <Link
            className="p-3 text-l  color-white95 hover-color-white100 hover-bg-white20"
        href="https://www.instagram.com/subarnabhd"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        title="Visit our Instagram profile"
      >
        <FaInstagram aria-hidden="true" />
        <span className="sr-only">Instagram</span>
      </Link>
      <Link
        className="p-3 text-l  color-white95 hover-color-white100 hover-bg-white20"
        href="https://www.tiktok.com/@subarnabhd"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="TikTok"
        title="Visit our TikTok profile"
      >
        <FaTiktok aria-hidden="true" />
        <span className="sr-only">TikTok</span>
      </Link>
      <Link
        className="p-3 text-l  color-white95 hover-color-white100 hover-bg-white20"
        href="https://linkedin.com/company/subarnabhd"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        title="Visit our LinkedIn page"
      >
        <FaLinkedinIn aria-hidden="true" />
        <span className="sr-only">LinkedIn</span>
      </Link>
      <Link
        className="p-3 text-l  color-white95 hover-color-white100 hover-bg-white20"
        href="mailto:subarnabhd@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Email"
        title="Send us an email"
      >
        <IoMdMailOpen aria-hidden="true" />
        <span className="sr-only">Email</span>
      </Link>
    </div>
  );
};

export default Socialmedia;
