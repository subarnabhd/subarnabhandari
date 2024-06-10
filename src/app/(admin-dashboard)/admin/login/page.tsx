import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main className="h-screen  bg-neutral-4 flex  text-center align-middle">
      <div className="bg-white shadow-md rounded-2xl m-auto p-10 text-center align-middle  flex flex-col gap-5 w-1/5">
        <div className="align-middle  flex flex-col gap-2">
          <Link className="flex m-auto" href="/">
            <Image src="/app-icon.svg" width={55} height={100} alt="" />
          </Link>
          <h2 className="text-2xl color-primary-600 font-bold">Vhandar</h2>
          <p className="text-m  color-neutral-7">Sign in to your account</p>
        </div>

        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 p-4 color-neutral-7">
        <div className="flex items-center">
                            Copyright © 2024,
                            <a
                                className="hover-secondary-500"
                                target="_blank"
                                href="https://vhandar.com/"
                            >
                                {" "}
                                Vhandar
                            </a>
                            &nbsp;Commerce Private Limited.
                        </div>

        </div>

        <form action="#" method="POST" className="flex flex-col gap-4">
          <input
            type="text"
            name="username"
            id="username"
            autoComplete="username"
            className="block w-full rounded-lg  p-3  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
            placeholder="Username"
          />
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="block w-full rounded-lg p-3  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
            placeholder="Password"
          />

          <a href="/admin" className="btn primary-btn rounded-lg">
            Login
          </a>
        </form>
      </div>
    </main>
  );
};

export default page;
