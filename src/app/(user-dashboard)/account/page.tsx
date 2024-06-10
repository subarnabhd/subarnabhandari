import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <div className=" border-b flex py-5 flex-start h-[88px] p-5 justify-between  align-middle">
        <div className="flex gap-3">
        <Image
            className="rounded-full align-middle my-auto bg-background border"
            src="/sample.png"
            width={48}
            height={48}
            alt=""
          />
          <div>
          <p className=" text-lg font-bold text-black text-left">
            Hello! Subarna
          </p>
          <p className="color-neutral-7 text-sm text-left color-primary-400 ">
            +977-9844740360
          </p>
          </div>
        </div>
      
        <Link href="" className="flex gap-2 align-middle justify-center  leading-3 px-2 rounded-full hover-bg-neutral-4">
          
          <Image
            className="rounded-full bg-secondary-500 p-2 bg-neutral-6 align-middle my-auto"
            src="/icon/reward.svg"
            width={35}
            height={30}
            alt=""
          />
            
          <div className="flex flex-col justify-center pr-2">
            <p className="text-black text-base  text-[16px]  font-bold">1008</p>
            <p className="text-gray-500 text-xs mt-[-3px] ">Vhandar Points</p>
          </div>
        </Link>
      </div>
      <div className="flex m-5 border overflow-hidden gap-[1px] bg-neutral-4">
        <div className=" p-5 bg-white flex flex-col align-middle text-center gap-5">
          <h3 className="text-light  text-sm text-white w-max py-1 px-4  bg-secondary-400 ">
            In Last 90 days
          </h3>
            <Image
            className=" text-center m-auto "
            src="/saving.png"
            width={95}
            height={95}
            alt=""
          />

        </div>

        <div className=" w-full flex flex-col gap-[1px]">
          <div className="p-5 w-full bg-white  ">
            <h3 className="text-base font-medium color-primary-500">
              Your Total Saving
            </h3>
            <p className="text-lg font-bold color-neutral-10">Rs.200</p>
          </div>
          <div className="flex gap-[1px]">
            <div className="p-5 w-full bg-white ">
              <h3 className="text-base font-medium color-primary-500">
                Your Total Purchases
              </h3>
              <p className="text-lg font-bold color-neutral-10">Rs.2000</p>
            </div>
            <div className="p-5 w-full bg-white ">
              <h3 className="text-base font-medium color-primary-500">
                Total Items Ordered
              </h3>
              <p className="text-lg font-bold color-neutral-10">24</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
