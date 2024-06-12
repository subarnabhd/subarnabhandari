import Image from 'next/image'
import React from 'react'

const Homebanner = () => {
  return (
<div className="home-banner text-center bg-black  p-5  items-center flex flex-col justify-center ">
        <div className="items-center flex flex-col gap-5">
        <Image src="/about/SubarnaBhandari.webp" className="m-auto rounded-full pb-5" alt="Subarna Bhandari" width={400} height={100}></Image>
        <h2 className="text-6xl font-semibold">Subarna<b>.</b><span className="font-light">Bhandari</span></h2>
        <p className='color-white50 text-2xl  font-normal'>www.subarnabhandari.com</p>
        </div>
      </div>
  )
}

export default Homebanner