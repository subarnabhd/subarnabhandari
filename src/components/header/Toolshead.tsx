"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const toolshead = () => {
  return (
    <div className="s-header ">
    <div className="container m-auto flex align-middle items-center justify-between">
      <div className="flex gap-2 align-middle items-center justify-between ">
        <Link href="https://tools.subarnabhandari.com">
          <Image src="/tools/tools.svg" width={35} height={100} alt="Tools Icon" />
        </Link>
        <Link  href="https://tools.subarnabhandari.com" className="sitetitle" aria-current="page">
          <p className="font-bold text-lg">Tools.</p>
        </Link>
        <p className="font-base text-[10px] text-gray-400">
          By&nbsp;
          <Link className="hover-color-red100 " href="https://subarnabhandari.com" rel="noopener">
            Subarna
          </Link>
        </p>
      </div>

      <div className="flex  mb-hide">
        <ul className="icondrop">
          <li className="nav-item mb-hide">
            <Link href="https://subarnabhandari.com" className="primary-sm-btn" target="_blank" type="button">
              Subarnabhandari.com
            </Link>
          </li>

          <li className="nav-item icon-drop-item">
            <div className="dropdown-center">
              <Link href="" className="dropdown-toggle nav-link" type="button" data-bs-toggle="dropdown" aria-expanded="false"></Link>
              {/* <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" target="_blank" href="https://wa.me/9779844740360">
                    &nbsp; Whatsapp Chat
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" target="_blank" href="https://www.messenger.com/t/Subarnabhd">
                    &nbsp; Messenger Chat
                  </Link>
                </li>
              </ul> */}
            </div>
          </li>

        
        </ul>
      </div>
    </div>
    </div>
  );
};

export default toolshead;
