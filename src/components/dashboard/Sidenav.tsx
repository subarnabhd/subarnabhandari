import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFillBoxFill } from "react-icons/bs";
import { BiSolidMessageSquareAdd } from "react-icons/bi";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { TbBrandUnity } from "react-icons/tb";
import { TbCategoryFilled } from "react-icons/tb";
import { MdCategory } from "react-icons/md";
import { AiFillMerge } from "react-icons/ai";
import { IoMdTrendingDown } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import { HiDocumentReport } from "react-icons/hi";

const Sidenav = () => (
  <div className="w-[280px] h-screen bg-primary-800 justify-between  flex flex-col">

      <Link
        className="flex    hover-bg-primary-900   p-4 flex-col text-left "
        href="/admin"
      >
        {/* <Image
        className=" "
        src="/v-icon.svg"
        width={38}
        height={100}
        alt=""
      /> */}

        <h1 className="text-3xl font-extrabold color-secondary-500">
          admin hub
        </h1>

        <p>
          <strong className="text-bold">vhandar</strong>.com
        </p>
      </Link>

    <div className=" border-b divide-solid  border-green-900"></div>

    <div className="flex flex-col das-nav ">
   

      <div className="p-4 flex flex-col gap-2">
        <p className="link-name">Main</p>
        <div className="grid gap-1">
          <Link href="/admin/dashboard" className="sidebar-link">
            <TbCategoryFilled />
            Dashboard
          </Link>
        </div>
        <div className=" border-b divide-solid my-3 border-green-900"></div>
        <p className="link-name">Inventory</p>

        <div className="grid gap-1">
          <Link href="/admin/add-product" className="sidebar-link">
            <BiSolidMessageSquareAdd />
            Add-Product
          </Link>

          <Link href="#" className="sidebar-link">
            <BsFillBoxFill />
            Products
          </Link>

          <Link href="#" className="sidebar-link">
            <MdCategory />
            Category
          </Link>

          <Link href="/admin/add-product" className="sidebar-link">
            <AiFillMerge />
            Sub-Category
          </Link>

          <Link href="#" className="sidebar-link">
            <AiFillMerge />
            Sub-Sub-Category
          </Link>

          <Link href="#" className="sidebar-link">
            <BiSolidPurchaseTag />
            Brands
          </Link>

          <Link href="#" className="sidebar-link">
            <TbBrandUnity /> Units
          </Link>

          <Link href="#" className="sidebar-link">
            <IoMdTrendingDown />
            Low Stock
          </Link>
        </div>

        <div className=" border-b divide-solid  border-green-900"></div>

        <div className="grid gap-1">
          
          
        <p className="link-name">Others</p>


          <Link href="#" className="sidebar-link">
            <HiDocumentReport />
            Report
          </Link>
        </div>
      </div>
    </div>

    <div className=" border-b divide-solid border-green-900"></div>

    <div className="grid gap-1 p-5">
      <Link href="/admin" className="sidebar-link">
        <LuLogOut />
        Logout
      </Link>
    </div>
  </div>
);

export default Sidenav;
