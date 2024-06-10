import Blogcard from "@/components/Blogcard";
import React from "react";

const page = () => {
  return (
    <main className="">
      <div className="bg-white">
        <div className="text-white bg-primary-300 ">
          <div className='container py-20  flex flex-col gap-5 m-auto text-center'>
            <h1 className="font-bold text-5xl">Vhandar Blogs</h1>
            <p className="color-neutral-3">
              We bring you the latest updates and learnings curated by our
              in-house team.
            </p>
          </div>
        </div>
      </div>
      <div className="blog-section">
        <div className="container flex   py-10  m-auto flex-wrap ">
          <Blogcard />
          <Blogcard />
          <Blogcard />
          <Blogcard />
   
        </div>
      </div>
    </main>
  );
};

export default page;

