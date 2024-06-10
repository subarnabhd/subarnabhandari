import Image from 'next/image'
import React from 'react'

function Whyvhandar() {
  return (
    <div className="why-vandar color-neutral-8 ">
    <h2 className="text-xl color-neutral-10 pb-2 font-semibold">
      Why shop from Vhandar?
    </h2>

    <div className="flex gap-4 align-middle py-2 vertical-middle">
      <Image
        className=" h-[56px] w-[56px]"
        alt=""
        src="/pro-page-icon3.png"
        width={100}
        height={100}
      />
      <div className="flex flex-col justify-center">
        <h2 className="text-sm  font-semibold">Superfast Delivery</h2>
        <p className="text-xs">
          Get your order delivered to your doorstep at the earliest from
          dark stores near you.
        </p>
      </div>
    </div>
    <div className="flex gap-4  py-2">
      <Image
        className=" h-[56px] w-[56px]"
        alt=""
        src="/pro-page-icon2.png"
        width={100}
        height={100}
      />
             <div className="flex flex-col justify-center">
        <h2 className="text-sm font-semibold">Best Prices & Offers</h2>
        <p className="text-xs">
          Best price destination with offers directly from the
          manufacturers.
        </p>
      </div>
    </div>
    <div className="flex gap-4 align-middle py-2">
      <Image
        className=" h-[56px] w-[56px]"
        alt=""
        src="/pro-page-icon1.png"
        width={100}
        height={100}
      />
               <div className="flex flex-col justify-center">
        <h2 className="text-sm  font-semibold">Wide Assortment</h2>
        <p className="text-xs">
          Choose from 5000+ products across food, personal care,
          household & other categories.
        </p>
      </div>
    </div>
  </div>
  )
}

export default Whyvhandar