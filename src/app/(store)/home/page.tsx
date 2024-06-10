import React from "react";

import Category from "@/components/Category";
import Homeslider from "@/components/Homeslider";
import Product from "@/components/Product";
import Prohead from "@/components/Prohead";
import Download from "@/components/Download";



const page = () => {
  return (
    
    <main className="bg-white">
      <div className="container m-auto p-5 px-10 ">
        <Homeslider />
        <div className="bg-white py-10  flex flex-col gap-5">
          <div className="flex gap-5">
            <Category /> <Category /> <Category /> <Category />
            <Category /> <Category /> <Category /> <Category />
            <Category /> <Category />
          </div>

          <div className="flex gap-5">
            <Category /> <Category /> <Category /> <Category />
            <Category /> <Category /> <Category /> <Category />
            <Category /> <Category />
          </div>
        </div>

        <Prohead />





        <div className="container m-auto py-5">
          <div className="flex gap-5 overflow-scroll">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>

        <Prohead />

        <div className="container m-auto py-5">
          <div className="flex gap-5 overflow-scroll">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>

        <Prohead />

        <div className="container m-auto py-5">
          <div className="flex gap-5 overflow-scroll">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
        <Download/>
      </div>
    </main>
  );
};

export default page;
