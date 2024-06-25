import ClientSlider from "@/components/home/ClientSlider";
import Aboutstudio from "@/components/studio/Aboutstudio";
import Studiobanner from "@/components/studio/Studiobanner";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studio. by Subarna",
  description: "The Subarna Studio - TSS",
};


const studio = () => {
  return (
    <main>
      <Head>
        <title>Studio. by Subarna</title>
      </Head>
      <Studiobanner />

      <div
        id="aboutstudio"
        className=" color-black100 flex flex-col items-center justify-center text-3xl md:text-6xl font-bold gap-2 md:gap-5 py-[100px] md:py-[200px] w-header bg-white"
      >
        <h1 className="flex text-gray-400">
          <p className="text-black">Studio</p>
          <b>.</b>Creating the brands
        </h1>
        <h1 className="text-gray-400">
          that people <b>Love.</b>
        </h1>
      </div>
      <Aboutstudio />
      <div className="border-t border-b py-28  border-gray-950">
        <div className="container m-auto flex flex-col gap-5  ">
          <div>
            <h2 className="site-h">Services We Provide</h2>
            <p className="site-p">Transform your business idea with us</p>
          </div>

          <div className=" md:flex gap-5 align-center text-center py-5 pb-20 w-4/5 m-auto">
            <div className="site-box p-10 m-4">
              <Image
                src="/studio/branding.png"
                className="m-auto p-5"
                alt="Branding &amp; Identity"
                width={300}
                height={100}
              ></Image>
              <h2 className="text-2xl font-bold pb-5">Branding</h2>
              <p className="text-base color-white80">
                We design your digital presence and make your brand stand out by
                comprehending its true
              </p>
            </div>
            <div className="site-box  p-10 m-4">
              <Image
                src="/studio/ui-ux-design.png"
                className="m-auto p-5"
                alt="Ui/UX Design"
                width={300}
                height={100}
              ></Image>
              <h2 className="text-2xl font-bold pb-5">UI/UX Design</h2>
              <p className="text-base color-white80">
                Designing for web3 is the cornerstone of what we do. Our
                designer’s belief in making
              </p>
            </div>
          </div>
          <div className="app-ico hidden md:flex justify-center border-t border-gray-900 gap-10 pt-20">
            <Image
              src="/studio/ps.svg"
              className="ps"
              alt="Adobe Photoshop"
              width={190}
              height={100}
            ></Image>
            <Image
              src="/studio/ai.svg"
              className="ai"
              alt="Adobe Illustrators"
              width={190}
              height={100}
            ></Image>
            <Image
              src="/studio/id.svg"
              className="id"
              alt="Adobe Indesign"
              width={190}
              height={100}
            ></Image>
            <Image
              src="/studio/pr.svg"
              className="pr"
              alt="Adobe Premier Pro"
              width={190}
              height={100}
            ></Image>
            <Image
              src="/studio/ae.svg"
              className="ae"
              alt="Adobe After Effect"
              width={190}
              height={100}
            ></Image>
            <Image
              src="/studio/xd.svg"
              className="xd"
              alt="Adobe XD"
              width={190}
              height={100}
            ></Image>
            <Image
              src="/studio/figma.svg"
              className="figma"
              alt="Figma"
              width={190}
              height={100}
            ></Image>
            <Image
              src="/studio/sketch.svg"
              className="sketch"
              alt="Sketch"
              width={190}
              height={100}
            ></Image>
          </div>
        </div>
      </div>

      <div className="container m-auto  py-28 flex flex-col gap-10">
        <h1 className="site-h">The Tale of TSS</h1>
        <p className="site-p">
          We create experiences based on UX best practices, market research,
          branding, and user testing that leads to products that make real
          success. The Subarna Studio has the capabilities of designing
          conventional web and mobile applications and the solutions built using
          cutting-edge technologies.
        </p>
        <div className="blcok  md:flex gap-4 w-11/12 m-auto">
          <div className="site-box flex flex-col gap-7 p-10">
            <Image
              src="/studio/values-1.webp"
              className="m-auto"
              alt="..."
              width={80}
              height={100}
            ></Image>
            <h4 className="text-2xl bold">Ownership</h4>
            <p className="text-base color-white80">
              Each TSS owns the processes and goes beyond their tasks to ensure
              the growth and success of Expedite.
            </p>
          </div>
          <div className="site-box flex flex-col gap-7 p-10">
            <Image
              src="/studio/sun.webp"
              className="m-auto"
              alt="..."
              width={80}
              height={100}
            ></Image>
            <h4 className="text-2xl bold">Can-Do Attitude</h4>
            <p className="text-base color-white80">
              TSS possess a can-do attitude and serve their tasks whole
              heartedly by thinking out of the box.
            </p>
          </div>
          <div className="site-box flex flex-col gap-7 p-10">
            <Image
              src="/studio/format-circle.webp"
              className="m-auto"
              alt="..."
              width={80}
              height={100}
            ></Image>
            <h4 className="text-2xl bold">Growth Mindset</h4>
            <p className="text-base color-white80">
              TSS are persistent towards their goals and responsibilities
              despite any hurdles they might face.
            </p>
          </div>
        </div>
      </div>

      <div className="a-approach container m-auto px-4">
        <h1 className="site-h">Our Approach</h1>
        <p className="site-p">
          As a full-service UI UX design agency, we work with our clients to
          discover, define, design and develop web & mobile user experiences
          that add value and get you close to the ultimate goal. What would the
          ultimate success of your project look like? Asking the question at the
          beginning of each project allows us to be laser-focused throughout the
          entire design process.
        </p>
      </div>

      <div className="studio-c-slide">
        <ClientSlider />
      </div>
    </main>
  );
};

export default studio;
