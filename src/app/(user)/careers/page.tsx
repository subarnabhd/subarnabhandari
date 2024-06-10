import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main className="bg-primary-800 text-white">
      <div className="text-white bg-primary-600 border-t border-green-700 text-center p-20 flex flex-col gap-5">
        <h1 className="font-bold text-5xl">Explore For Opportunities Here</h1>
        <p className="color-secondary-500">Become a Vahandarian</p>
      </div>
      <div className="bg-primary-700  py-20 ">
        <div className="container m-auto flex flex-col  md:w-2/5 gap-5 p-5 ">
        <h2 className="text-3xl font-semibold ">Open Position</h2>

          <div className="  bg-primary-600 rounded-2xl p-10 flex justify-between align-middle ">
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-semibold">
                Backend Develover - Node.js
              </h2>
              <p className="text-sm color-neutral-6 ">Mid-Level | Remote</p>
            </div>
            <div className="flex justify-center">
              <Link className="btn primary-btn m-auto rounded-full" href="/">
                Apply Now
              </Link>
            </div>
          </div>

          <div className="  bg-primary-600 rounded-2xl p-10 flex justify-between align-middle ">
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-semibold">Project Manager</h2>
              <p className="text-sm color-neutral-6 ">
                Experience: 0 - 0 years 
              </p>
            </div>
            <div className="flex justify-center">
              <Link className="btn primary-btn m-auto rounded-full" href="/">
                Apply Now
              </Link>
            </div>
          </div>
          
        </div>
      </div>

      <div className="container flex flex-col m-auto py-10 gap-2 bg-primary-800">
        <h2 className="text-2xl font-semibold">
          Better lives for more people
        </h2>

        <p className="color-neutral-6">
          To actualize our vision of better lives for more people, we use
          proprietary technology to empower Nepali – by creating increased
          convenience, more savings, flourishing businesses, and stronger
          communities. All this, while making everyday shopping a smoother,
          happier experience for Nepal. We are always looking for driven
          individuals to join us in making instant commerce indistinguishable
          from magic.
        </p>
      </div>
    </main>
  );
};

export default page;
