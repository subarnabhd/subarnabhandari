import Image from 'next/image'
import React from 'react'

const Studiobanner = () => {
  return (
    <div className="studio-banner h-screen ">
      <div className='absolute top-[15%] left-1/2 transform -translate-x-1/2 flex flex-col gap-4 items-center m-auto'> 
      <Image
          className=" m-auto  text-right"
          src="/studio/tss.svg"
          width={100}
          height={100}
          alt=""
        />
        <h2 className='text-4xl font-bold  text-center'>The Subarna Studio</h2>
        <h2 className='text-base font-normal text-center color-white90'>studio.subarnabhandari.com</h2>
      </div>
        
    </div>
  )
}

export default Studiobanner