import React from "react";
import { FaMicroblog } from "react-icons/fa";

const page = () => {
  return (
    <main className="">
      <div className="blog-head py-20">
        <div className="container m-auto text-center">
          <p className="text-6xl m-auto  w-max">
            <FaMicroblog />
          </p>
          <h2 className="text-3xl py-3 font-medium">GOOD READS</h2>
          <div className="text-sm font-light ">
            <p>
              The unread story is not a story; it is little black marks on wood
              pulp.
            </p>
            <p>The reader, reading it, makes it live: a live thing, a story.</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
