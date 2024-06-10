import Image from 'next/image'
import React from 'react'

const Pricebtn = () => {
  return (
    <div className="price-button relative  text-white">
                <div className="qty-count">
                    <p >4</p>
                </div>

              <div className="save-tags-2 align-center">
                <Image
                  className="save-tag-icon-2 w-[100px]"
                  alt=""
                  src="/tag-2.svg"
                  width={100}
                  height={100}
                />
                <div className=" save-tag-2 flex  w-full justify-center m-auto text-center ">
                  <p className="">Rs.</p>
                 <p className="">10</p>
                 &nbsp;<p className="">SAVE</p>

                </div>
              </div>

              <div className="text-center color-neutral-10 text-xs font-semibold">
                150gm
              </div>

              <div className="v-p-price">

                <div className="flex price">
                  <p className="">Rs.</p>
                  <p className="">450</p>
                </div>
                <div className="flex color-neutral-7 v-mrp-price ">
                  <p className="">MRP</p>
                  <p className="price-mrp">500</p>
                </div>
                
              </div>

            </div>
  )
}

export default Pricebtn