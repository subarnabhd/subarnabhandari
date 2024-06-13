import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Instagram = () => {
  return (
<div className="Instagram py-20 bg-white w-header">
      <div className="container m-auto flex flex-col gap-10">



            <div className="text-center m-auto">
              <Image className='m-auto' src="/link/instagram.webp" height={60} width={60} alt=''></Image>

              <h2 className='text-2xl font-bold text-center text-black'>Follow us on Instagram</h2>
              <p className='text-sm color-black80 text-center'>Show some love on instagram page</p>

            </div>
            <div className="flex gap-10 justify-center w-full">

              <Link className=" ibutton lbox col " href="https://www.instagram.com/subarnabhd" type="button" target="_blank">
                <div className="flex gap-3 items-center shadow-medium w-max rounded-full p-5">
                    <Image className='rounded-full border' src="/about/subarnabhandari.jpg" height={60} width={60} alt=''></Image>
                    <div className="itext">
                    <p className="link-1 text-black font-bold">Subarnabhd</p>
                  <p className="link-1 text-black text-sm">@subarnabhd</p>
                  </div>
                </div>
              </Link>

              <Link className=" ibutton lbox col " href="https://www.instagram.com/thesubarnastudio" type="button" target="_blank">
              <div className="flex gap-3 items-center shadow-medium w-max rounded-full p-5">
              <Image className='rounded-full border' src="/studio/thesubarnastudio.png" height={60} width={60} alt=''></Image>
                  <div className="itext">
                  <p className="link-1 text-black font-bold">The Subarna Studio</p>
                  <p className="link-1 text-black text-sm">@thesubarnastudio</p>
                </div>
              </div>
            </Link>

            <Link className=" ibutton lbox col " href="https://www.instagram.com/sliceblaze/" type="button" target="_blank">
            <div className="flex gap-3 items-center shadow-medium w-max rounded-full p-5">
            <Image className='rounded-full' src="/link/sliceblaze.jpg" height={60} width={60} alt='' ></Image>
                <div className="itext">
                <p className="link-1 text-black font-bold">Sliceblaze</p>
                <p className="link-1 text-black text-sm">@sliceblaze</p>
              </div>
            </div>
          </Link>
            </div>

  
      </div>
    </div>
  )
}

export default Instagram