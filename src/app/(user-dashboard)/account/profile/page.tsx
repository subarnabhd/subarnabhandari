import Link from "next/link";
import React from "react";
import { AiFillEdit } from "react-icons/ai";

const page = () => {
  return (
    <div className="flex flex-col">
      <div className="acc-head">

          <h2 className="acc-title">
            My Profile
          </h2>
         

        <Link href="" className="btn primary-btn">
          <AiFillEdit />
          Edit Profile
        </Link>
      </div>

      <form className="flex flex-col gap-5 p-5"> 


          <div>
            <label
      className="v-label"
            >
              Name*
            </label>

            <input
              type="text"
              id="name"
               className="v-input"
              placeholder="Enter Your Name"
              required
            />
          </div>
          <div >
            <label
               className="v-label"
            >
             Email Address*
            </label>
            <input
              type="email"
              id="email"
                className="v-input"
              placeholder="Enter your Email Address"
              required
            />
            <p className="text-xs color-neutral-7 pt-2">We promise not to spam you</p>
          </div>
          <div>
          <button
          type="submit"
          className="btn primary-btn-sm "
        >
          Submit
        </button>
        </div>
      </form>

      <div  className="p-5">
        <Link href="" className="font-bold text-red-500">
          Delete Account
        </Link>
        <p className="text-sm color-neutral-7">
          Deleting your account will remove all your orders, wallet amount and
          any active referral
        </p>
        {/* <Link href="" className='btn primary-btn'>Proceed to delete</Link> */}
      </div>
    </div>
  );
};

export default page;
