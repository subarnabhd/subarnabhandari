import React from "react";
import Image from "next/image";
import Blogcard from "@/components/Blogcard";
import Faq from "@/components/Faq";

const page = () => {
  return (
    <main>
      <div className="bg-white flex flex-col">
        <div className="text-white bg-primary-300 ">
          <div className="container py-20 px-10 flex flex-col gap-5 m-auto">
            <h1 className="font-bold text-5xl">Press center</h1>
            <p className="color-neutral-3">
              Our press release, coverage and press kit
            </p>
          </div>
        </div>
        <div className="color-neutral-7">
          <div className="container m-auto py-10 w-6/12">
            <div className="flex justify-between pb-10">
              <h2 className="text-2xl font-semibold  color-primary-800 pb-3 pt-5">
                Logo
              </h2>
              <a
                href="https://drive.google.com/drive/folders/1dWQE_PlMOD8UFs3qjd7K7kr8KsJArQVc?usp=sharing"
                target="blank"
                className=" p-5 bg-secondary-500 text-white font-semibold rounded-lg hover-bg-secondary-400"
              >
                Download Brand Assets
              </a>
            </div>

            <div className="container m-auto  p-20 text-center flex flex-col gap-4 bg-primary-500 rounded-3xl h-96 ">
              <Image
                className="center text-center m-auto"
                src="/v-icon.svg"
                width={130}
                height={100}
                alt=""
              />
              <Image
                className="center text-center m-auto"
                src="/vhandar-white-logo.svg"
                width={300}
                height={100}
                alt=""
              />
            </div>

            <h2 className="text-2xl font-semibold  color-primary-800 pb-3 pt-5">
              Background
            </h2>

            <p>
              Founded in January 2024, Vhandar is leading the charge in
              transforming Nepal’s vast unorganised grocery landscape through
              cutting-edge technology and innovation. We believe every Nepaln
              deserves the opportunity to continually improve their life – a
              process that often begins at home. As part of our mission of
              helping consumers make healthier, better choices when buying
              everyday products, we make a wide range of high-quality grocery
              and household products available right at their doorsteps within
              minutes.
            </p>
            <p>
              Built on a proprietary technology stack, the Vhandar platform
              serves as a convergence of consumers looking for everyday
              essentials, partner stores who serve their needs efficiently, and
              manufacturers looking for a channel to reach a nation of
              consumers. While our technology caters to the burgeoning
              population of urban Nepal, it is ready and poised to serve the
              next 100+ million Nepales who are yet to start shopping online
            </p>

            <p className="text-2xl color-neutral-10 pt-8 pb-3">
              From our <strong className="text-bold">newsroom</strong>
            </p>
            <p>
              Explore our blog to get updates on what we’re up to at Vhandar
            </p>

            <div className="flex align-baseline">
              <Blogcard />
              <Blogcard />
              <Blogcard />
            </div>

            <h2 className="text-3xl font-semibold  color-primary-800 pb-3 pt-5">
              Frequently asked questions
            </h2>
    

            <Faq
              acc={[
                { id: 1, title: "When and why was Vhandar founded?", description: "In January 2024, Sambriddh Neupane, along with Subarna Bhandari, founded Vhandar with the vision to build technology that can transform Nepal’s vast unorganized grocery ecosystem.  Built on proprietary technology stack, the Vhandar platform serves as a convergence of consumers looking for everyday essentials, partner stores who serve their needs efficiently, partners who deliver, and manufacturers looking for a channel to reach a nation of consumers" },
                { id: 2, title: "How many cities in Nepal does Vhandar operate in?", description: "Vhandar currently operates in Agra, Ahmedabad, Allahabad, Bengaluru, Chandigarh, Chennai, Delhi, Durgapur, Faridabad, Guwahati, HR-NCR, Hyderabad, Jaipur, Kanpur, Kolkata, Lucknow, Mathura, Meerut, Mohali, Moradabad, Mumbai, Panipat, Pune, Sonipat, UP-NCR, Vadodara" },

            
              ]}
            ></Faq>

            <div className="">
              <p>
                For media enquiries, write to us&nbsp;at{" "}
                <a
                  className="v-link font-medium"
                  href="mailto:press@vhandar.com"
                >
                  press@vhandar.com
                </a>{" "}
              </p>

              <p>
                For all other inquiries, write to us a{" "}
                <a
                  className="v-link font-medium"
                  href="mailto:info@vhandar.com"
                >
                  info@vhandar.com{" "}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
