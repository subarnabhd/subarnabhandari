import { Link } from "@nextui-org/react";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { LuShoppingBag } from "react-icons/lu";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuLogOut } from "react-icons/lu";
import { LuInfo } from "react-icons/lu";
import { LuPhoneCall } from "react-icons/lu";
import { GoShieldCheck } from "react-icons/go";
import { IoDocumentTextOutline } from "react-icons/io5";
import { VscFeedback } from "react-icons/vsc";
import { FiUnlock } from "react-icons/fi";
import { GrHomeRounded } from "react-icons/gr";
import Image from "next/image";

const Usersidebar = () => {
  return (
    <div className="bg-white min-h-max w-3/12 flex flex-col border text-left rounded-lg overflow-hidden">
      
      <Link href="/account" className="acc-nav-link">
        <GrHomeRounded />
        Dashboard
      </Link>
      <h2 className="acc-nav-head">Orders</h2>

      <Link href="/account/orders" className="acc-nav-link">
        <LuShoppingBag />
        Orders
      </Link>
      <Link href="/account/address" className="acc-nav-link">
        <HiOutlineLocationMarker />
        Address
      </Link>
      <h2 className="acc-nav-head">Account</h2>
      <Link href="/account/profile" className="acc-nav-link">
        <CgProfile />
        My Profile
      </Link>
      <Link href="/account/change-password" className="acc-nav-link">
        <FiUnlock />
        Change Password
      </Link>
      <h2 className="acc-nav-head">Customer Care</h2>
      <Link href="/contact" className="acc-nav-link">
        <LuPhoneCall />
        Contact Us
      </Link>
      <Link href="/about" className="acc-nav-link">
        <LuInfo />
        About Us
      </Link>
      <Link href="/account/feedback" className="acc-nav-link">
        <VscFeedback />
        Feedback
      </Link>
      <Link href="/terms-of-service" className="acc-nav-link">
        <IoDocumentTextOutline />
        Terms & Conditions
      </Link>
      <Link href="/privacy-policy" className="acc-nav-link">
        <GoShieldCheck />
        Policies
      </Link>

      <div className=" border-t">
        <Link href="/home" className="acc-nav-link">
          <LuLogOut />
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Usersidebar;
