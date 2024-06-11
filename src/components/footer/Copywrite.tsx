import React from 'react'
import Socialmedia from './Socialmedia'
import Image from 'next/image'
import { FaHeart } from "react-icons/fa6";

const Copywrite = () => {
  return (
    
    <div className="text-xs border-t border-gray-900">
    <div className="container py-5 flex text-center align-center justify-between m-auto items-center">

      <div className="flex items-center">
        Copyright © {new Date().getFullYear()},
        <a
          className="hover-secondary-500"
          target="_blank"
          rel="noopener noreferrer"
          href="https://subarnabhandari.com/"
          aria-label="Subarna Bhandari Website"
        >
          Subarnabhandari.com.
        </a>&nbsp;All Right Reserved.
      </div>

      <div className="flex text-center align-center justify-between gap-2 items-center">
      <Image src="/logo.svg" width={30} height={30} alt="" />
      </div>

      <div className='flex items-center'>

    Made with <FaHeart />&nbsp;by <span>Subarna</span><strong>.</strong>

      </div>
    </div>
  </div>
  );
}


export default Copywrite