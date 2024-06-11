import React from 'react'
import Socialmedia from './Socialmedia'
import Image from 'next/image'
import { FaHeart } from "react-icons/fa6";

const Copywrite = () => {
  return (
    
    <div className="text-xs border-t border-gray-900 color-white90">
    <div className="container py-5 flex text-center align-center m-auto items-center">

      <div className="flex items-center align-middle  w-full">
        Copyright © {new Date().getFullYear()},
        <a
          className=" "
          target="_blank"
          rel="noopener noreferrer"
          href="https://subarnabhandari.com/"
          aria-label="Subarna Bhandari Website"
        >
          &nbsp;Subarnabhandari.com.
        </a>&nbsp;All Right Reserved.
      </div>

      <div className="flex text-center align-center justify-between gap-2 items-center  w-full">
      <Image className='m-auto' src="/logo.svg" width={30} height={30} alt="" />
      </div>

      <div className='flex items-center  w-full justify-end'>

    Made with&nbsp;<b><FaHeart /></b>&nbsp;by&nbsp;<span>Subarna</span><strong>.</strong>

      </div>
    </div>
  </div>
  );
}


export default Copywrite