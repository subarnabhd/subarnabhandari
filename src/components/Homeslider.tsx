import Image from 'next/image'
import React from 'react'

const Homeslider = () => {
  return (
    <div> 
                  <Image className='w-full' src='/banner/banner9.jpeg' width={1200} height={100} alt='' />
         <div className='flex gap-5 pt-5 overflow-scroll'>
         <Image src='/banner/banner1.png' width={300} height={100} alt='' />
         <Image src='/banner/banner2.png' width={300} height={100} alt='' />
         <Image src='/banner/banner3.png' width={300} height={100} alt='' />
         <Image src='/banner/banner4.png' width={300} height={100} alt='' />
         <Image src='/banner/banner5.png' width={300} height={100} alt='' />
         <Image src='/banner/banner6.png' width={300} height={100} alt='' />
         <Image src='/banner/banner7.png' width={300} height={100} alt='' />
         <Image src='/banner/banner8.png' width={300} height={100} alt='' />
         </div>



    </div>
  )
}

export default Homeslider