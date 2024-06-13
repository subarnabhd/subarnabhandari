import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <main className='justify-center items-center flex '>

    <div className=" unicode container m-auto align-middle text-center text-white  justify-center  flex flex-col border border-gray-900 p-10 w-5/12  rounded-3xl ">
        <div className="flex gap-4 justify-center items-center    py-2">
            <Link className="" href="/unicode"> 
            <Image className='m-auto w-max' src="/tools/conv.webp" width={50} height={50} alt=''></Image></Link>
            <div className='text-left'>
                <p className=' font-light'>Preeti to Unicode</p>
                <p className='text-[21px] leading-6 font-semibold uppercase'>Converter</p>
            </div>
        </div>
       
        <iframe className="frame h-[380px]" src="https://www.ashesh.com.np/unicode-preeti/linkapi.php?api=150059o468"  >
        
 
          </iframe>
    </div>
</main>
  )
}

export default page