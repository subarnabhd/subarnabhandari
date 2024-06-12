import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className='p-10'>

            <div className=" unicode container m-auto align-middle text-center text-white  justify-center  flex flex-col border border-gray-950 p-10 w-5/12  rounded-3xl ">
                <div className="flex gap-4 justify-center items-center    py-2">
                    <Link className="" href="/preeti"> 
                    <Image className='m-auto w-max' src="/tools/conv.webp" width={50} height={50} alt=''></Image></Link>
                    <div className='text-left'>
                        <p className=' font-light'>Unicode to Preeti</p>
                        <p className='text-2xl font-semibold'>Converter</p>
                    </div>
                </div>
               
                    <iframe className="frame h-[380px]" src="https://www.ashesh.com.np/unicode-preeti/linkapi.php?api=270099n063"
                    >
                    </iframe>
            </div>
        </div>
    )
}

export default page