import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="acc-head">
        <h2 className="acc-title">Orders</h2>
      </div>


      <div className="acc-empty p-5">
        <Image
          className="acc-b-img"
          src="/empty-cart.svg"
          width={150}
          height={150}
          alt=""
        />

        <h2 className="acc-b-title">Oops, you haven't placed an order yet.</h2>
        <p className="acc-b-des">
        Current and past orders will appear here
        </p>
      </div>


<div className="p-5">
      <Link
        href="/account/orders/order-1"
        className="flex  text-black justify-between p-4 border rounded-lg my-5 hover-bg-neutral-3"
      >
        <div>
          <h2 className="font-bold text-lg">
            Dettol Original Hand Wash - Germ Protection Pump Handwash
          </h2>
          <p className="font-base text-sm font-medium color-neutral-7">
            Order #AEDFEDRRD41762
          </p>
          <p className="font-base text-sm color-neutral-7">
            10/01/2024 at 09:39am
          </p>
        </div>

        <div className="flex flex-col justify-between">
          <h2 className="font-bold text-lg text-right color-primary-800">
            Rs.200
          </h2>
          <div className="v-status processing">Processing</div>
        </div>
      </Link>

      <Link
        href="/account/orders/order-1"
        className="flex  text-black justify-between p-4 border rounded-lg my-5 hover-bg-neutral-3"
      >
        <div>
          <h2 className="font-bold text-lg">
            Storia 100% Tender Coconut Water
          </h2>
          <p className="font-base text-sm font-medium color-neutral-7">
            Order #AEDFEDRRD41762
          </p>
          <p className="font-base text-sm color-neutral-7">
            10/01/2024 at 09:39am
          </p>
        </div>

        <div className="flex flex-col justify-between">
          <h2 className="font-bold text-lg text-right color-primary-800">
            Rs.200
          </h2>
          <div className="v-status confirmed">Confirmed</div>
        </div>
      </Link>

      <div className="flex  gap-5 py-5">
        <div className="v-status processing">Processing</div>
        <div className="v-status confirmed">Confirmed</div>
        <div className="v-status refunded">Refunded</div>
        <div className="v-status cancelled">Cancelled</div>
        <div className="v-status delivered">Delivered</div>
      </div>
    </div>
    </div>
  );
};

export default page;
