import Contactform from "@/components/Contactform";
import React from "react";
import { IoHeart } from "react-icons/io5";

const page = () => {
  const data = {
    name: "About Us",
    description: "Description",
  };
  return (
    <main className="cont-page bg-blend-darken">
      <div className="container m-auto py-20 flex justify-between">
        <div className="col-1">
          <div className="flex gap-2">
            <h2 className="text-4xl font-semiboldd color-primary-900 pb-5">
              We would to
            </h2>
            <h2 className="text-4xl font-semiboldd  text-[#d53b3b] pb-5">
              <IoHeart />
            </h2>
            <h2 className="text-4xl font-semiboldd color-primary-900 pb-5">
              to hear from you
            </h2>
          </div>

          <p className="text-xl font-semiboldd color-primary-900">
            Fill out the form or write to us at{" "}
            <a
              className="color-primary-500 hover-secondary-400"
              target="blank"
              href="mailto:info@vhandar.com"
            >
              info@vhandar.com
            </a>
          </p>
        </div>
        <div className="col-2">
          <div className="bg-white p-10 rounded-2xl">
<Contactform/>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
