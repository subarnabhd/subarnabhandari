import Contactform from "@/components/Contactform";
import Contacttab from "@/components/Contacttab";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { FaRegPaperPlane } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact. Subarna",
  description: "Contact Subarna Bhandarisuba",
};

const page = () => {
  const data = {
    name: "About Us",
    description: "Description",
  };
  return (
    <main className="bg-white w-header">
      <Head>
        <title>Contact. Subarna</title>
      </Head>
      <div className="h-[64px] sticky top-[64px]  minimal flex items-center">
        <div className="container m-auto   flex justify-between   py-2 items-center  w-full px-4">
          <div>
            <h2 className="text-xl font-semibold text-black">
              Need to contact us?
            </h2>
          </div>
          <div>
            <p className="color-black70 text-sm">
              Chat with us, send us an email or fill up the form below.
            </p>
          </div>
          <div className="flex gap-2">
            <Link
              className="bg-white hover:bg-gray-900  text-gray-500 hover:text-gray-100  rounded-full text-xs p-2 px-4"
              href="/link"
            >
              Quick Link
            </Link>
            <Link
              className="bg-gray-200 hover:bg-gray-900 text-gray-500 hover:text-gray-100  rounded-full text-xs p-2 px-4"
              href="/portfolio"
            >
              Portfolio
            </Link>
          </div>
        </div>
      </div>
      <div className="container m-auto">
        <div className="flex gap-20 min-h-[600px] px-4">
          <div className="w-1/2 py-10 flex flex-col gap-3">
            <h1 className="text-3xl text-black font-bold">
              Let's start a project together.
            </h1>
            <p className="color-black70 ">
              Email me about your project. Make sure you provide detailed
              information about your project idea. I would love it if you could
              provide me information like who you are, what do you do and what
              kind of budget range you have in place. Alternatively, you can
              direct message me in any of my following social media platforms.
            </p>
            <div>
              <Link
                className="color-black100 hover-color-primary m-auto flex gap-4 items-center justify-start text-xl"
                href="mailto:hello@subarnabhandari.com"
              >
                <FaRegPaperPlane />
                hello@subarnabhandari.com
              </Link>
            </div>
          </div>
          <div className="w-1/2 flex flex-col   py-20">
            <p className="color-black70 ">
              We love to sit down and talk about ideas. Let‘s get your project
              up and running. Get in touch for a tech consultation today.
            </p>
            <h1 className="text-2xl text-black font-normal py-5">
              What services are you looking for?
            </h1>

            <Contacttab />
          </div>
        </div>
      </div>
      <div className="py-4 border-t border-gray-300">
        <div className="container m-auto color-black100 flex gap-1 items-center text-sm">
          Need more help?
          <Link
            className="bg-black15 color-black95 hover-color-white100 hover-bg-black100 p-2 rounded-full flex items-center text-center justify-center mx-1"
            href="https://www.messenger.com/t/subarnabhd"
            target="_blank"
            title="Live Chat messenger"
          >
            <FaFacebookMessenger />
          </Link>
          <Link
            className="bg-black15 color-black95 hover-color-white100 hover-bg-black100 p-2 rounded-full flex items-center text-center justify-center  mx-1"
            href="https://wa.me/9779844740360"
            target="_blank"
            title="Live Chat messenger"
          >
            <FaWhatsapp />
          </Link>
          or call{" "}
          <Link
            className="bg-black15 color-black95 hover-color-white100 hover-bg-black100 p-2  px-4 rounded-full flex items-center text-center justify-center  mx-1"
            href="tel:+977-9844740360"
            title="Call Subarna Bhnadrai"
          >
            +977-9844740360
          </Link>
        </div>
      </div>
    </main>
  );
};

export default page;
