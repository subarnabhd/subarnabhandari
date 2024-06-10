import Image from 'next/image'
import React from 'react'

const Blogcard = () => {
  return (
    <div className="blog-card max-w-80 mx-auto p-5">
    <div className=" bg-white shadow-sm border border-gray-100 rounded-3xl ">
        <a href="#">
        <Image className='center text-center   m-4   shadow-lg rounded-2xl' style={{objectFit: "contain"}} src='/banner/banner1.png' width={244} height={100} alt='' />

        </a>
        <div className="px-5 pb-5 pt-2">
            <a href="#">
                <h5 className="color-primary-700 font-semibold text-xl tracking-tight mb-2">Introducing Brand Stores</h5>
            </a>
            <p className="font-normal text-sm color-neutral-7 mb-3">A new avenue on Vhandar for brands to showcase their products effectively – tailored to their own unique style and aesthetic</p>
            <a className="text-white bg-secondary-500 hover-bg-secondary-400 focus:ring-4   font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href="#">
                Read more
            </a>
        </div>
    </div>
    </div>
  )
}

export default Blogcard