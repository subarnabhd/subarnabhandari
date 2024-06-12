import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa6";

const Studiobanner = () => {
  return (
    <div className="studio-banner ">
      <div className='absolute top-[15%] left-1/2 transform -translate-x-1/2 flex flex-col gap-4 items-center m-auto'> 
      <Image
          className=" m-auto  text-right"
          src="/studio/tss.svg"
          width={80}
          height={100}
          alt=""
        />
        <h2 className='text-4xl font-bold  text-center'>The Subarna Studio</h2>
        <p className='color-white60 text-xl  font-normal'>studio.subarnabhandari.com</p>
      </div>


      <div aria-label="Social media links" className="flex flex-col gap-5 w-min absolute bottom-8 left-8">
      <Link
        className="p-5 text-xl bg-white30  rounded-full  color-white100 hover-color-white100 hover-bg-primary"
        href="https://www.facebook.com/TheSubarnaStudio"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        title="Visit our Facebook page"
      >
        <FaFacebookF aria-hidden="true" />
        <span className="sr-only">Facebook</span>
      </Link>
      <Link
        className="p-5 text-xl bg-white30  rounded-full  color-white100 hover-color-white100 hover-bg-primary"
        href="https://www.instagram.com/TheSubarnaStudio"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        title="Visit our Instagram profile"
      >
        <FaInstagram aria-hidden="true" />
        <span className="sr-only">Instagram</span>
      </Link>
    
      <Link
        className="p-5 text-xl bg-white30  rounded-full  color-white100 hover-color-white100 hover-bg-primary"
        href="https://www.linkedin.com/company/TheSubarnaStudio"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        title="Visit our LinkedIn page"
      >
        <FaLinkedinIn aria-hidden="true" />
        <span className="sr-only">LinkedIn</span>
      </Link>
    
    </div>
        
            
      <Link
        className="p-5 text-xl bg-white30  rounded-full  color-white100 hover-color-white100 hover-bg-primary  absolute bottom-8 right-8"
        href="#aboutstudio"

        rel="noopener noreferrer"
        aria-label="LinkedIn"
        title="Visit our LinkedIn page"
      >
<FaArrowDown />
        <span className="sr-only">LinkedIn</span>
      </Link>


      

    </div>
  )
}

export default Studiobanner