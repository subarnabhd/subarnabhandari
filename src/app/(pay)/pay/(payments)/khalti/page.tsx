import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";
const page = () => {
  return (
    <div>
      <div>
        <div
          className=" w-[500px]"
          role="document"
        >
          <div className="modal-content">
            <div className=" flex  justify-between">
              <Link className="modal-logo" href="/pay">
                <Image
                  className="popupicon bgkhalti"
                  src="/pay/header.webp"
                  width={30}
                  height={30}
                  alt=""
                ></Image>
                <p className="text-2xl">
                  Subarna<span>Pay</span>
                </p>
              </Link>
              <Link href="/pay" className="p-5 text-2xl">
                <IoArrowBackOutline />
              </Link>
            </div>
            <div className="modal-body">
              <div className="qrcode">
                <div className="bank">
                  <Link href="https://web.khalti.com" target="_blank">
                    <Image
                      className="acc-icon"
                      src="/pay/khalti.webp"
                      width={100}
                      height={100}
                      alt=""
                    ></Image>
                  </Link>
                  <Link
                    className="modal-title khalti"
                    target="_blank"
                    id="khalti"
                    href="http://khalti.com"
                  >
                    Khalti
                  </Link>
                  <Link
                    href="http://khalti.com"
                    className="swift khalti"
                    target="_blank"
                  >
                    www.khalti.com
                  </Link>
                </div>
                <div className="acc-qr qbox">
                  <img className="qr" src="/pay/qr.khalti.svg" />
                </div>
              </div>
              <div className="accdetails" id="acc.khalti">
                <h2>Wallet Details</h2>
                <p>
                  Name:{" "}
                  <span className="detail hide2 khalti">SUBARNA BHANDARI</span>
                </p>
                <p>
                  Khalti ID :{" "}
                  <span className="detail hide2 khalti">9844740360</span>
                </p>
              </div>
            </div>
            <div className="modal-footer flex ">
              <button
                type="button"
                id="toggle-button-khalti"
                // onclick="toggleReplaceRollBack2()"
                className="btn btn-primaryn eyebtn"
              >
                <i id="icon2" className="fas fa-eye"></i>
              </button>
              <button
                type="button"
                // onclick="copycontentkhalti()"
                className="btn btn-primary"
              >
                <i className="fa-regular fa-copy"></i>&nbsp;&nbsp;Copy Details
              </button>
              <Link
                type="button"
                className="btn btn-primary openapp"
                href="khalti://"
              >
                <i className="fa-solid fa-arrow-trend-up"></i>
              </Link>
              <Link
                type="button"
                target="_blank"
                className="btn btn-primary openwebapp"
                href="https://web.khalti.com"
              >
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
