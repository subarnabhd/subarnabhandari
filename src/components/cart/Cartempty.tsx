import Image from "next/image";
import Link from "next/link";
import React from "react";

const Cartempty = () => {
  return (
    <div className="container m-auto text-center flex gap-4 flex-col">
      <Image
        className=" m-auto"
        alt=""
        src="/icon/cart-empty.svg"
        width={100}
        height={100}
      />
      <h2 className=" text-2xl font-bold color-neutral-10">
        You don't have any items in your cart
      </h2>
      <p className=" text-normal color-neutral-7 ">
        Your favorite items are just a click away
      </p>
      <Link className="btn primary-btn m-auto" href="/">Start Start Shopping</Link>
    </div>
  );
};

export default Cartempty;
