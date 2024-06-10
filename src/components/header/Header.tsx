"use client";

import { Modal, ModalContent, useDisclosure, Input } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { LuSearch } from "react-icons/lu";
import { FaChevronDown } from "react-icons/fa6";
import Login from "../Login";
import { IoClose } from "react-icons/io5";
import { MdDeliveryDining } from "react-icons/md";
import { IoReceiptSharp } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa6";
import Pricebtnadd from "../Pricebtnadd";

const Header = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isCart, setisCart] = useState(false);

  const hideCart = () => {
    setisCart(false);
  };

  return (
    <div className="v-header sticky top-0 h-[90px] bg-primary-600 flex justify-between  align-middle items-center text-white shadow-md">
      <div className="flex flex-wrap items-center justify-between ">
        <Link
          className="v-logo px-5 h-[86px] align-middle text-center flex"
          href="/"
        >
          <Image src="/vhandar-logo.svg" width={190} height={100} alt="" />
        </Link>
      </div>

      <div className="flex justify-between  align-middle items-center w-full px-4 ">
        <div color="flex gap-5">
          <Link
            className="px-4 py-2  h-[60px]  rounded-lg hover-bg-primary-700  w-max flex flex-col items-left align-middle"
            href=""
          >
            <h2 className="font-semibold text-l">Delivery in 15 minutes</h2>
            <p className="font-light text-sm flex gap-2 align-middle items-center">
              Select Location
              <FaChevronDown />
            </p>
          </Link>
        </div>

        <form className="flex items-center relative mx-5 w-full">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none color-neutral-8">
            <LuSearch />
          </span>
          <input
            type="text"
            // value={query}
            // onChange={handleChange}
            className="w-full  pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black"
            placeholder="Search..."
          />
        </form>

        <div className="flex gap-5  justify-center  items-center  max-w-md ">
          <Link
            onClick={onOpen}
            data-modal-target="default-modal"
            data-modal-toggle="default-modal"
            type="button"
            className="w-[80px] h-[60px] py-2   rounded-lg text-sm font-semibold hover-bg-primary-700  flex flex-col items-center  align-middle"
            href=""
          >
            <Image src="/icon/v-user.svg" width={24} height={24} alt="" />
            Sign in
          </Link>

          <Link
            onClick={() => setisCart(true)}
            data-modal-target="default-modal"
            data-modal-toggle="default-modal"
            className="w-[130px] h-[55px] px-4 py-4 rounded-lg text-l font-semibold bg-secondary-400 hover-bg-secondary-500  text-center flex gap-3 "
            href=""
          >
            <Image src="/icon/cart.svg" width={24} height={24} alt="" />
            My Cart
          </Link>
        </div>

        {/* Loign Modal Start---- */}
        <div className="flex flex-col gap-2">
          <Modal isOpen={isOpen} placement="auto" onOpenChange={onOpenChange}>
            <ModalContent>{(onClose) => <Login />}</ModalContent>
          </Modal>
        </div>
        {/* Loign Modal End---- */}

        {/* Loign Modal Start---- */}
        <div className="flex flex-col gap-2">
          {isCart ? (
            <div className="v-mycart">
              <div className="flex flex-row  h-[70px] justify-between px-4 py-4 bg-white text-black font-bold text-xl text-center align-middle items-center shadow">
                <div>
                  <h3 className="h-auto">My Cart</h3>
                </div>
                <div
                  className="close-btn hover-primary-500 hover-bg-neutral-3 flex align-middle text-center p-2 rounded-full"
                  onClick={(e) => hideCart()}
                >
                  <IoClose />
                </div>
              </div>

              <div className=" cart-body p-3 color-neutral-7 flex-col flex gap-3 py-20 ">
                <div className="text-center flex gap-2 flex-col p-5 h-fit py-20">
                  <Image
                    className=" m-auto"
                    alt=""
                    src="/icon/cart-empty.svg"
                    width={80}
                    height={80}
                  />
                  <h2 className=" text-xl font-bold color-neutral-10 ">
                    You don't have any items in your cart
                  </h2>
                  <p className=" text-normal color-neutral-7 ">
                    Your favorite items are just a click away
                  </p>
                  <Link className="btn primary-btn-sm m-auto" href="/">
                    Start Start Shopping
                  </Link>
                </div>

                <div className="bg-[#FFDFDF] rounded-xl p-3 flex justify-between align-middle  items-center">
                  <div className="flex flex-col   ">
                    <h2 className="text-red-500 font-bold text-base">
                      1 out of stock items...
                    </h2>
                    <p className="text-red-800 text-xs">
                      you can continue to checkout
                    </p>
                  </div>
                  <div className=" flex flex-col items-center">
                    <Link
                      href=" "
                      className=" py-2 px-4 rounded-lg text-white   items-center text-sm bg-primary-500 hover-bg-primary-600"
                    >
                      Review
                    </Link>
                  </div>
                </div>

                <div className="rounded-xl bg-white color-neutral-7 p-3 gap-5  flex  flex-col">
                  <div className="flex justify-between  items-center gap-2">
                    <div className="flex justify-between items-center gap-2">
                      <Image
                        className="border rounded-md"
                        src="/product.png"
                        width={70}
                        height={70}
                        alt=""
                      />
                      <div>
                        <h2 className="text-xs font-bold text-black">
                          Storia 100% Tender Coconut Water
                        </h2>
                        <p className="text-xs text-gray-500">150gm</p>
                        <p className="text-xs text-gray-500">Rs.500</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      {" "}
                      <Pricebtnadd />
                    </div>
                  </div>

                  <div className="flex justify-between  items-center gap-2">
                    <div className="flex justify-between items-center gap-2">
                      <Image
                        className="border rounded-md"
                        src="/product.png"
                        width={70}
                        height={70}
                        alt=""
                      />
                      <div>
                        <h2 className="text-xs font-bold text-black">
                          Storia 100% Tender Coconut Water
                        </h2>
                        <p className="text-xs text-gray-500">150gm</p>
                        <p className="text-xs text-gray-500">Rs.500</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      {" "}
                      <Pricebtnadd />
                    </div>
                  </div>
                  <div className="flex justify-between  items-center gap-2">
                    <div className="flex justify-between items-center gap-2">
                      <Image
                        className="border rounded-md"
                        src="/product.png"
                        width={70}
                        height={70}
                        alt=""
                      />
                      <div>
                        <h2 className="text-xs font-bold text-black">
                          Storia 100% Tender Coconut Water
                        </h2>
                        <p className="text-xs text-gray-500">150gm</p>
                        <p className="text-xs text-gray-500">Rs.500</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      {" "}
                      <Pricebtnadd />
                    </div>
                  </div>
                  <div className="flex justify-between  items-center gap-2">
                    <div className="flex justify-between items-center gap-2">
                      <Image
                        className="border rounded-md"
                        src="/product.png"
                        width={70}
                        height={70}
                        alt=""
                      />
                      <div>
                        <h2 className="text-xs font-bold text-black">
                          Storia 100% Tender Coconut Water
                        </h2>
                        <p className="text-xs text-gray-500">150gm</p>
                        <p className="text-xs text-gray-500">Rs.500</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      {" "}
                      <Pricebtnadd />
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-white color-neutral-7 ">
                  <div className="p-4 flex flex-col gap-2">
                    <h3 className="text-md color-primary-900 font-bold">
                      Bill details
                    </h3>

                    <div className="flex justify-between text-black align-middle font-base text-sm items-center">
                      <div className="flex gap-2 items-center">
                        <h2 className="flex gap-2 align-middle h-auto">
                          <IoReceiptSharp />
                          Items total
                        </h2>
                        <p className="text-xs p-1 px-2 color-blue  bg-blue-background rounded-lg">
                          Saved ₹32
                        </p>
                      </div>
                      <div className="flex gap-1">
                        <h2 className="line-through">₹2017</h2>
                        <p className="uppercase text-black font-semibold">
                          ₹1985
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between text-black align-middle font-base text-sm">
                      <h2 className="flex gap-2 align-middle  h-auto">
                        <MdDeliveryDining />
                        Delivery charge
                      </h2>
                      <div className="flex gap-1">
                        <h2 className="line-through">₹15</h2>
                        <p className="uppercase tex color-blue">FREE</p>
                      </div>
                    </div>
                    <div className="flex justify-between text-black align-middle font-semibold text-sm">
                      <h2 className="">Grand Total</h2>
                      <h2 className=" ">₹32</h2>
                    </div>
                  </div>

                  <div className="cart-save flex  justify-between color-blue bg-blue-background align-middle p-4 items-center rounded-b-xl">
                    <h2 className="font-semibold text-base ">
                      Your total savings
                    </h2>
                    <h2 className="font-semibold text-base ">₹32</h2>
                  </div>
                </div>

                <div className="rounded-xl bg-white color-neutral-7 p-4">
                  <h3 className="text-md color-primary-900 font-bold">
                    Cancellation Policy
                  </h3>

                  <p className="text-xs ">
                    Orders cannot be cancelled once packed for delivery. In case
                    of unexpected delays, a refund will be provided, if
                    applicable.
                  </p>
                </div>
              </div>

              <div className="p-3 bg-white shadow-lg  sticky bottom-0">
                <Link
                  href=" "
                  className="bg-primary-500 p-3 rounded-lg flex justify-between align-middle hover-bg-primary-600 align-items-center"
                >
                  <div className="flex flex-col">
                    <h2 className="text-bold">₹285</h2>
                    <p className="text-light uppercase">TOTAL</p>
                  </div>

                  <div className=" flex items-center">
                    <h2 className="flex font-medium items-center gap-1">
                      Login to Proceed <FaAngleRight />
                    </h2>
                  </div>
                </Link>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        {/* Loign Modal End---- */}
      </div>
    </div>
  );
};

export default Header;
