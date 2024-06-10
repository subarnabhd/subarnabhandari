import Image from "next/image";
import Link from "next/link";
import React from "react";
import Socialmedia from "./Socialmedia";
import Payments from "./Payments";
import Downloadapp from "../Downloadapp";

function Footer() {
  return (
    <div className="footer static bottom-0 pt-10 bg-neutral-3 ">
      <div className="">
        <div className="container flex py-10 m-auto gap-8">
          <div className="mx-auto text-left w-1/5">
            <Link
              href="/"
              className="flex mb-2 text-left"
              aria-label="Homepage"
            >
              <Image
                src="/v-icon.svg"
                width={60}
                height={100}
                alt="Vhandar Logo"
              />
            </Link>
            <h2 className="text-2xl color-primary-600 font-semibold pb-2">
              Vhandar.com
            </h2>
            <p className="text-m color-neutral-8 text-left">
              We’re revolutionizing the way Nepal shops.
            </p>
          </div>

          <div className="w-2/5">
            <h4 className="text-l font-bold color-neutral-10  mb-4 uppercase">
              Useful Links
            </h4>

            <div className="flex gap-10">
              <div aria-label="Site Navigation" className="flex flex-col gap-3">
                <Link
                  href="/about"
                  className="text-left text-sm color-neutral-9 hover-secondary-500"
                  aria-label="About Us"
                >
                  About
                </Link>
                <Link
                  href="/blog"
                  className="text-left text-sm color-neutral-9 hover-secondary-500"
                  aria-label="Blog"
                >
                  Blog
                </Link>
                <Link
                  href="/faq"
                  className="text-left text-sm color-neutral-9 hover-secondary-500"
                  aria-label="Frequently Asked Questions"
                >
                  FAQs
                </Link>
                <Link
                  href="/contact"
                  className="text-left text-sm color-neutral-9 hover-secondary-500"
                  aria-label="Contact Us"
                >
                  Contact Us
                </Link>
                <Link
                  href="/help"
                  className="text-left text-sm color-neutral-9 hover-secondary-500"
                  aria-label="Help and Support"
                >
                  Help & Support
                </Link>
              </div>

              <div aria-label="Useful Links" className="flex flex-col gap-3">
                <Link
                  href="/account/feedback"
                  className="text-left text-sm color-neutral-9 hover-secondary-500"
                  aria-label="Feedback"
                >
                  Feedback
                </Link>
                <Link
                  href="/del-areas"
                  className="text-left text-sm color-neutral-9 hover-secondary-500"
                  aria-label="Delivery Areas"
                >
                  Delivery
                </Link>
                <Link
                  href="/careers"
                  className="text-left text-sm color-neutral-9 hover-secondary-500"
                  aria-label="Careers"
                >
                  Careers
                </Link>
                <Link
                  href="/press"
                  className="text-left text-sm color-neutral-9 hover-secondary-500"
                  aria-label="Press Kit"
                >
                  Press Kit
                </Link>
                <Link
                  href="/mobile"
                  className="text-left text-sm color-neutral-9 hover-secondary-500"
                  aria-label="Mobile App"
                >
                  Mobile
                </Link>
              </div>

              <div
                aria-label="Legal Information"
                className="flex flex-col gap-3"
              >
                <Link
                  href="/privacy-policy"
                  className="text-left text-sm color-neutral-9 hover-secondary-500"
                  aria-label="Privacy Policy"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-of-service"
                  className="text-left text-sm color-neutral-9 hover-secondary-500"
                  aria-label="Terms of Service"
                >
                  Terms of Use
                </Link>
                <Link
                  href="/return-policy"
                  className="text-left text-sm color-neutral-9 hover-secondary-500"
                  aria-label="Return Policy"
                >
                  Return Policy
                </Link>
                <Link
                  href="/shipping-policy"
                  className="text-left text-sm color-neutral-9 hover-secondary-500"
                  aria-label="Shipping Policy"
                >
                  Shipping Policy
                </Link>
              </div>
            </div>
          </div>

          <div className="w-1/5">
            <h4 className="text-l font-bold color-neutral-10  mb-4 uppercase">
              CONTACT US
            </h4>

            <div className="flex flex-col gap-3">
              {/* Adding Schema Markup */}
              <Link
                href="tel:+977-9851357358"
                target="_blank"
                rel="noopener noreferrer"
                className="text-left text-sm color-neutral-9 hover-secondary-500"
                aria-label="Call +977-9851357358"
                itemProp="telephone"
              >
                +977-9851357358
              </Link>
              <Link
                href="tel:+977-9802340360"
                target="_blank"
                rel="noopener noreferrer"
                className="text-left text-sm color-neutral-9 hover-secondary-500"
                aria-label="Call +977-9802340360"
                itemProp="telephone"
              >
                +977-9802340360
              </Link>

              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-left text-sm color-neutral-9 hover-secondary-500"
                aria-label="Location: Shankhamul, Kathmandu"
                itemProp="address"
              >
                Shankhamul, Kathmandu
              </Link>

              {/* Optimizing Anchor Text */}
              <Link
                href="mailto:info@vhandar.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-left text-sm color-neutral-9 hover-secondary-500"
                aria-label="Send an email to info@vhandar.com"
              >
                info@vhandar.com
              </Link>

              <Link
                href="mailto:support@vhandar.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-left text-sm color-neutral-9 hover-secondary-500"
                aria-label="Send an email to support@vhandar.com"
              >
               support@vhandar.com
              </Link>
            </div>
          </div>

          <div className="w-2/5">
            <h4 className="text-l font-bold color-neutral-10  mb-4 uppercase">
              Help & Support
            </h4>

            <div className="flex gap-2">
              <a
                href="https://wa.me/9779851357358"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 bg-black text-white p-3 rounded-xl hover-bg-primary-800"
                aria-label="Chat with Us on WhatsApp"
              >
                <Image src="/icon/chat.svg" width={38} height={38} alt="Chat icon" />
                <div>
                  <p className="font-bold">Chat with Us</p>
                  <p className="font-light text-xs">Got questions? Just ask.</p>
                </div>
              </a>
            </div>

            <h4 className="text-l font-bold color-neutral-10  my-4 uppercase">
              Payment Methods
            </h4>

            <div className="flex gap-2 flex-wrap">
              <Payments />
            </div>
          </div>
        </div>

        <div className="text-sm color-neutral-8 bg-neutral-3 border-t border-grey-200">
          <div className="container py-5 flex text-center align-center justify-between m-auto">

            <div className="flex items-center">
              Copyright © {new Date().getFullYear()},
              <a
                className="hover-secondary-500"
                target="_blank"
                rel="noopener noreferrer"
                href="https://vhandar.com/"
                aria-label="Vhandar Website"
              >
                Vhandar
              </a>&nbsp;Commerce Private Limited.
            </div>

            <div className="flex text-center align-center justify-between gap-2">
              <p className="text-m font-bold color-neutral-8 m-auto">
              Download App
              </p>

              <div className="download-app  flex items-center gap-2">
               <Downloadapp />
              </div>
            </div>

            <div>
              <Socialmedia />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
