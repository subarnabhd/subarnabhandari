import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineAddLocationAlt } from "react-icons/md";

const page = () => {
  return (
    <div>
      <div className="acc-head">
        <h2 className="acc-title">Saved Address</h2>
        <Link href="" className="btn primary-btn">
          <MdOutlineAddLocationAlt /> Add New Address
        </Link>
      </div>
      <div className="acc-empty">
        <Image
          className="acc-b-img"
          src="/location.svg"
          width={150}
          height={100}
          alt=""
        />

        <h2 className="acc-b-title">No Address Added</h2>
        <p className="acc-b-des">
          To see the saved address here, add your work or home address
        </p>
      </div>
    </div>
  );
};

export default page;
