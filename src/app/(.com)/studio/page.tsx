import Aboutstudio from "@/components/studio/Aboutstudio";
import Studiobanner from "@/components/studio/Studiobanner";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>

      <Studiobanner />

      <div id="aboutstudio" className=" color-black100 flex flex-col items-center justify-center text-6xl font-bold gap-5  py-[200px] w-header">
        <h1 className="flex text-gray-400">
          <p className="text-black">Studio</p>
          <b>.</b>Creating the brands
        </h1>
        <h1 className="text-gray-400">
          that people <b>Love.</b>
        </h1>
      </div>
      <Aboutstudio />

      <div className="bg-black  py-20 flex flex-col gap-5">
        <div className="container m-auto flex flex-col gap-5 ">
          <div>
          <h2 className="site-h">Services We Provide</h2>
          <p className="site-p">Transform your business idea with us</p></div>



          <div className="flex gap-5 align-center text-center py-5 pb-20 w-3/5 m-auto">
            <div className="site-box p-10">
              <Image src="/studio/branding.png" className="m-auto p-5" alt="Branding &amp; Identity" width={300} height={100}></Image>
              <h2 className="text-2xl font-bold pb-5">Branding</h2>
              <p className="text-base color-white80">
                We design your digital presence and make your brand stand out by
                comprehending its true
              </p>
            </div>
            <div className="site-box  p-10">
              <Image src="/studio/ui-ux-design.png" className="m-auto p-5" alt="Ui/UX Design" width={300} height={100}></Image>
              <h2 className="text-2xl font-bold pb-5">UI/UX Design</h2>
              <p className="text-base color-white80">
                Designing for web3 is the cornerstone of what we do. Our
                designer’s belief in making
              </p>
            </div>

          </div>

          <div className="app-ico flex justify-center border-t border-gray-700 gap-10 pt-20">

            <Image src="/studio/ps.svg" className="ps" alt="Adobe Photoshop" width={190} height={100}></Image>
            <Image src="/studio/ai.svg" className="ai" alt="Adobe Illustrators" width={190} height={100}></Image>
            <Image src="/studio/id.svg" className="id" alt="Adobe Indesign" width={190} height={100}></Image>
            <Image src="/studio/pr.svg" className="pr" alt="Adobe Premier Pro" width={190} height={100}></Image>
            <Image src="/studio/ae.svg" className="ae" alt="Adobe After Effect" width={190} height={100}></Image>
            <Image src="/studio/xd.svg" className="xd" alt="Adobe XD" width={190} height={100}></Image>
            <Image src="/studio/figma.svg" className="figma" alt="Figma" width={190} height={100}></Image>
            <Image src="/studio/sketch.svg" className="sketch" alt="Sketch" width={190} height={100}></Image>

          </div>


          <div className=" py-[200px] border-t border-gray-950">
              <div className="container  flex flex-col gap-10">
                  <h1 className="site-h">The Tale of TSS</h1>
                  <p className="site-p">
                    We create experiences based on UX best practices, market research,
                    branding, and user testing that leads to products that make real
                    success. The Subarna Studio has the capabilities of designing
                    conventional web and mobile applications and the solutions built
                    using cutting-edge technologies.
                  </p>
                <div className=" flex gap-4 w-5/6 m-auto">
                  <div className="site-box flex flex-col gap-7 p-10">
                    <Image src="/studio/values-1.webp" className="m-auto" alt="..." width={80} height={100}></Image>
                    <h4 className="text-2xl bold">Ownership</h4>
                    <p className="text-base color-white80">
                      Each TSS owns the processes and goes beyond their tasks to
                      ensure the growth and success of Expedite.
                    </p>
                  </div>
                  <div className="site-box flex flex-col gap-7 p-10">
                    <Image src="/studio/sun.webp" className="m-auto" alt="..." width={80} height={100}></Image>
                    <h4 className="text-2xl bold">Can-Do Attitude</h4>
                    <p className="text-base color-white80">
                      TSS possess a can-do attitude and serve their tasks whole
                      heartedly by thinking out of the box.
                    </p>
                  </div>
                  <div className="site-box flex flex-col gap-7 p-10">
                    <Image src="/studio/format-circle.webp" className="m-auto" alt="..." width={80} height={100}></Image>
                    <h4 className="text-2xl bold">Growth Mindset</h4>
                    <p className="text-base color-white80">
                      TSS are persistent towards their goals and responsibilities
                      despite any hurdles they might face.
                    </p>
                  </div>
                </div>
              </div>
            </div>
       

        </div>
      </div>

    </div>
  );
};

export default page;
