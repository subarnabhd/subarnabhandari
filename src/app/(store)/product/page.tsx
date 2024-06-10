import Pricebtnadd from "@/components/Pricebtnadd";
import Whyvhandar from "@/components/Whyvhandar";
import Image from "next/image";
import React from "react";
import { FaCaretRight } from "react-icons/fa6";
import Timertag from "@/components/Timertag";
import Pricebtn from "@/components/Pricebtn";

const page = () => {
  return (
    <main>
      <div className="container m-auto flex justify-between">
        <div className="w-1/2 border-r pb-20">
          <div className="product-img justify-center">
            <Image
              className="w-[480px] mx-auto flex  text-center"
              alt=""
              src="/product.jpg"
              width={480}
              height={100}
            />
          </div>
          <div className=" border-b divide-solid my-3"></div>

          <div className="product-des color-neutral-8 pr-10">
            <h2 className="text-2xl font-bold color-neutral-10 py-4">
              Product Details
            </h2>
            <div className="p-feature">
              <h3>Key Features</h3>
              <p>Boosts your immunity and is a great source for antioxidants</p>
              <p>Sourced from the richest coconut belts of India.</p>
              <p>Low in calories(less than 25 kcal)</p>
              <p>Contains No Added Sugar, No Preservatives & No Flavours.</p>
            </div>

            <div className="p-feature">
              <h3>Unit</h3>
              <p>1l</p>
            </div>

            <div className="p-feature">
              <h3>Type</h3>
              <p>Coconut Water</p>
            </div>

            <div className="p-feature">
              <h3>Self Life</h3>
              <p>9 Months</p>
            </div>

            <div className="p-feature">
              <h3>Manufacturer Details</h3>
              <p>
                Drytech Processes (I) Pvt. Ltd., Nagpur Road, Pandhurna,
                Chhindwara, M.P-480334
              </p>
            </div>

            <div className="p-feature">
              <h3>Marketed By</h3>
              <p>
                Storia Foods & Beverages Pvt. Ltd. S-3, 7th Floor, Pinnacle
                Business Park, Mahakali Caves Road, Andheri (E) Mumbai,
                Maharashtra-400093
              </p>
            </div>

            <div className="p-feature">
              <h3>Country Of Origin</h3>
              <p>India</p>
            </div>

            <div className="p-feature">
              <h3>FSSAI License</h3>
              <p>Lic. No. : 10019022008693</p>
            </div>
            <div className="p-feature">
              <h3>Customer Care Details</h3>
              <p>Email: info@blinkit.com</p>
            </div>
            <div className="p-feature">
              <h3>Return Policy</h3>
              <p>
                This Item is non-returnable. For a damaged, defective, incorrect
                or expired item, you can request a replacement within 72 hours
                of delivery. In case of an incorrect item, you may raise a
                replacement or return request only if the item is sealed/
                unopened/ unused and in original condition.
              </p>
            </div>

            <div className="p-feature">
              <h3>Expiry Date</h3>
              <p>
                Please refer to the packaging of the product for expiry date.
              </p>
            </div>

            <div className="p-feature">
              <h3>Seller</h3>
              <p>Moonstone Ventures LLP</p>
            </div>

            <div className="p-feature">
              <h3>Seller FSSAI</h3>
              <p>13323999000008</p>
            </div>

            <div className="p-feature">
              <h3>Description</h3>
              <p>
                100% raw coconut water extracted from the best coconuts and
                contains all the nutrients that natural coconut water contains.
                Apart from this, Storia Coconut Water is packed using the best
                technology with utmost importance given to food safety.
              </p>
            </div>

            <div className="p-feature">
              <h3>Disclaimer</h3>
              <p>
                Every effort is made to maintain the accuracy of all
                information. However, actual product packaging and materials may
                contain more and/or different information. It is recommended not
                to solely rely on the information presented.
              </p>
            </div>
          </div>
        </div>

        <div className="w-1/2 p-10 sticky top-86">
          <div className="text-sm color-neutral-7 hover-primary-500 flex gap-1">
            <a className="color-neutral-9" href="">
              Home
            </a>
            /
            <a className="color-neutral-8" href="">
              Coconut Water
            </a>
            /
            <a className="color-neutral-7" href="">
              Storia 100% Tender Coconut Water
            </a>
          </div>

          <h1 className="text-3xl color-neutral-10 font-bold py-2">
            Storia 100% Tender Coconut Water
          </h1>
          <Timertag />

          <a
            className="text-normal color-primary-700 hover-primary-500 font-normal flex align-middle items-center py-1"
            href=""
          >
            View all by Storia
            <FaCaretRight />
          </a>

          <div className=" border-b divide-solid my-3"></div>

          <div className="flex flex-col gap-2 pb-5">
            <p className="color-neutral-7 text-xs pb-2">Select Unit</p>
            <div className="flex gap-4">
              <Pricebtn />
              <Pricebtn />
              <Pricebtn />
            </div>
            <p className="color-neutral-7 text-xs  py-2">
              (Inclusive of all taxes)
            </p>

            <a href="/product" className="add-button">
              Add
            </a>
            <Pricebtnadd />
          </div>

          <Whyvhandar />
        </div>
      </div>
    </main>
  );
};

export default page;
