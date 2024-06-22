"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { IoArrowBackOutline } from "react-icons/io5";

const Page: React.FC = () => {
  useEffect(() => {
    const toggleButtonKhalti = document.getElementById("toggle-button-khalti");
    const icon2 = document.getElementById("icon2");
    const copyButton = document.querySelector(".fa-copy")?.parentElement;

    const handleToggle = (event: MouseEvent) => {
      event.preventDefault();
      if (icon2) {
        if (icon2.classList.contains("fa-eye")) {
          icon2.classList.remove("fa-eye");
          icon2.classList.add("fa-eye-slash");
        } else {
          icon2.classList.remove("fa-eye-slash");
          icon2.classList.add("fa-eye");
        }
      }
    };

    const handleCopy = (event: MouseEvent) => {
      event.preventDefault();
      const details = `Name: SUBARNA BHANDARI\nKhalti ID: 9844740360`;
      navigator.clipboard.writeText(details).then(() => {
        alert("Details copied to clipboard");
      });
    };

    if (toggleButtonKhalti) {
      toggleButtonKhalti.addEventListener("click", handleToggle);
    }
    if (copyButton) {
      copyButton.addEventListener("click", handleCopy);
    }

    return () => {
      if (toggleButtonKhalti) {
        toggleButtonKhalti.removeEventListener("click", handleToggle);
      }
      if (copyButton) {
        copyButton.removeEventListener("click", handleCopy);
      }
    };
  }, []);

  return (
    <div className="containbox">
      <div className="modal-content">
        <div className="modal-header">
          <Link className="modal-logo p-5" href="/pay">
            <Image
              className="popupicon bgkhalti"
              src="/pay/header.webp"
              width={30}
              height={30}
              alt="SubarnaPay Logo"
            />
            <p className="text-2xl">
              Subarna<span>Pay</span>
            </p>
          </Link>
          <div className="flex items-center">
            <Link href="/pay" className="back">
              <IoArrowBackOutline />
            </Link>
          </div>
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
                  alt="Khalti Logo"
                />
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
              <img
                className="qr"
                src="/pay/qr.khalti.svg"
                alt="Khalti QR Code"
              />
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
          <Link
            href=""
            type="button"
            id="toggle-button-khalti"
            className="btn btn-primaryn eyebtn"
          >
            <i id="icon2" className="fas fa-eye"></i>
          </Link>
          <Link href="" type="button" className="btn btn-primary">
            <i className="fa-regular fa-copy"></i>&nbsp;&nbsp;Copy Details
          </Link>
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
  );
};

export default Page;
