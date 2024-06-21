import Boxgallery from '@/components/home/Boxgallery'
import Hire from '@/components/home/Hire'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaRegPaperPlane } from "react-icons/fa";
import Homebanner from '@/components/home/Homebanner'
import Whychoose from '@/components/home/Whychoose'
import ClientSlider from '@/components/home/ClientSlider'
import GoodDesign from '@/components/home/GoodDesign'

const page = () => {
  return (
    <main>
      <Homebanner />
      <div className=" text-5xl  bg-[#F5F5F7] pb-20 font-extrabold w-header flex">

        <Link className="color-black20 hover-color-black40 m-auto flex gap-4" href="mailto:hello@subarnabhandari.com"><FaRegPaperPlane />hello@subarnabhandari.com</Link>
      </div>
      <div className="text-center bg-[#F5F5F7] p-5 w-header">

        <div className="bg-white  p-20 rounded-t-3xl">
          <h2 className="site-h text-black">Striving to create elegant & effortless designs.</h2>
          <p className="text-lg color-black55">Unlimited possibility to reach out. Create your own brand with Subarna.</p>
          <Image src="/home/pc.webp" className="m-auto" alt="Subarna PC" width={700} height={100}></Image>
        </div>
      </div>
      <Whychoose />
      <Boxgallery />
      <GoodDesign />
      <Hire />

      <div className='bg-white'>
        <ClientSlider />
      </div>


    </main>
  )
}

export default page