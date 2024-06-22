"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay to demonstrate loader
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Replace with actual loading logic

    return () => clearTimeout(delay); // Clean up timer
  }, []);

  useEffect(() => {
    // Hide preloader and show content once loaded
    if (!isLoading) {
      const preloader = document.querySelector(".preloader");
      const content = document.querySelector(".containbox");
      if (preloader && content) {
        preloader.setAttribute("style", "display: none;");
        content.setAttribute("style", "display: block;");
      }
    }
  }, [isLoading]);

  // Toggle switch element
  const toggleSwitch = document.querySelector(
    '.theme-switch input[type="checkbox"]'
  ) as HTMLInputElement | null;

  return (
    <div className="container">
      {isLoading && (
        <div className="preloader">
          <div className="loader">
            <Image src="/pay/pay.svg" width={50} height={50} alt="" />
          </div>
        </div>
      )}

      {!isLoading && (
        <div className="containbox">
          <div className="card">
            <div className="logo-box">
              <Link href="/pay" className="logo">
                <Image
                  className="logoicon"
                  src="/pay/header.webp"
                  width={50}
                  height={50}
                  alt=""
                />
                <p>
                  Subarna<span>Pay</span>
                </p>
              </Link>
              <p className="card-title">Here to pay.</p>
              <p className="card-tagline">Quick and easy.</p>
            </div>

            <div className="row w-100 m-auto button-card">
              <Link
                href=""
                className="glowbutton col"
                type="button"
                data-toggle="modal"
                data-target="#esewa"
              >
                <Image src="/pay/esewa.webp" width={50} height={50} alt="" />
                <p className="cardname">Esewa</p>
              </Link>

              <Link
                href="/pay/khalti"
                className="glowbutton col"
                type="button"
                data-toggle="modal"
                data-target="#khalti"
              >
                <Image src="/pay/khalti.webp" width={50} height={50} alt="" />
                <p className="cardname">Khalti</p>
              </Link>

              <Link
                href=""
                className="glowbutton col"
                type="button"
                data-toggle="modal"
                data-target="#ime"
              >
                <Image src="/pay/ime.webp" width={50} height={50} alt="" />
                <p className="cardname">IME Pay</p>
              </Link>

              <Link
                href=""
                className="glowbutton col"
                type="button"
                data-toggle="modal"
                data-target="#ips"
              >
                <Image src="/pay/ips.webp" width={50} height={50} alt="" />
                <p className="cardname">Connect IPS</p>
              </Link>

              <Link
                href=""
                className="glowbutton col"
                type="button"
                data-toggle="modal"
                data-target="#global"
              >
                <Image src="/pay/global.webp" width={50} height={50} alt="" />
                <p className="cardname">Global IME Bank</p>
              </Link>

              <Link
                href=""
                className="glowbutton col"
                type="button"
                data-toggle="modal"
                data-target="#nabil"
              >
                <Image src="/pay/nabil.webp" width={50} height={50} alt="" />
                <p className="cardname">Nabil Bank</p>
              </Link>

              <Link
                href=""
                className="glowbutton col"
                type="button"
                data-toggle="modal"
                data-target="#scb"
              >
                <Image src="/pay/scb.webp" width={50} height={50} alt="" />
                <p className="cardname">Standard Chartered</p>
              </Link>

              <Link
                href=""
                className="glowbutton col"
                type="button"
                data-toggle="modal"
                data-target="#nmb"
              >
                <Image src="/pay/nmb.webp" width={50} height={50} alt="" />
                <p className="cardname">NMB Bank</p>
              </Link>

              <Link
                href=""
                className="glowbutton col"
                type="button"
                data-toggle="modal"
                data-target="#citizens"
              >
                <Image src="/pay/citizens.webp" width={50} height={50} alt="" />
                <p className="cardname">Citizens Bank</p>
              </Link>
            </div>

            <div className="coffee">
              <Link
                href="https://www.buymeacoffee.com/subarnabhd"
                target="_blank"
              >
                <Image
                  src="/pay/buymeacoffee.webp"
                  alt="Buy Me A Coffee"
                  width={146}
                  height={42}
                />
              </Link>
            </div>

            <div className="copywrite hidemob">
              ©2023&nbsp;
              <Link target="_blank" href="https://subarnabhandari.com/">
                Subarnabhandari.com
              </Link>
              . All Rights Reserved.
            </div>
          </div>

          <div className="copywrite hidedesk">
            ©2023,&nbsp;
            <Link target="_blank" href="https://subarnabhandari.com/">
              Subarnabhandari.com
            </Link>
            . All Rights Reserved.
          </div>

          {/* <div className="theme-switch-wrapper" id="switch">
            <label className="theme-switch">
              <input
                type="checkbox"
                defaultChecked={localStorage.getItem("theme") === "dark"}
                onChange={switchTheme}
              />
            </label>
          </div>  */}
        </div>
      )}
    </div>
  );
};

export default Page;
