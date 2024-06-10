import About from "@/components/About";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <main>
      <div className="p-20 bg-[#F0F2F1]">
        <div className="container m-auto  align-middle text-center">
        <div className="">

            <Image
              className="m-auto"
              alt=""
              src="/mobile-app.png"
              width={300}
              height={100}
            />
          </div>
          <div className=" flex align-middle vertical flex-col text-center justify-center">
          <p className="text-[18px] font-medium color-neutral-9 uppercase">WE'RE STILL</p>

          <h1 className="text-[48px] font-extrabold color-primary-400">Cooking Our App.</h1>
          <p className="text-lg font-medium color-neutral-7">We are going to launch our app Very Soon.</p>
          <p className="text-[18px] font-medium color-secondary-500">Stay Tune.</p>

          </div>
        </div>
      </div>
      <About />
    </main>
  );
};

export default page;
