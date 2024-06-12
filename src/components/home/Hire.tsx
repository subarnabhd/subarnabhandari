import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hire = () => {
    return (
        <div className="py-20 w-header">
            <div className=" container m-auto bg-[#F5F5F7] rounded-2xl flex  ">
                <div className=' w-1/2  color-black70  items-center flex flex-col text-center justify-center'>
             
                        <h1 className='font-bold text-4xl text-black'>Got an idea?</h1>
                        <h1 className='font-bold text-4xl pb-5 text-black'>Let's work together.</h1>
                        <p>Are you an entrepreneur/business with a great idea,</p>
                        <p>but need an identity to start with?</p>
                        <p>I love ideas because I believe in them.</p>
                        <p>Let's discuss your idea.</p>
                         <Link type="button" className="primary-btn my-5" href="/contact">HIRE</Link>

       
                   
                </div>
                <div className="w-1/2">
                    <Image className="w-min" src="/home/subarnabhd-showcase.webp" alt="Subarna Bhandari"  width={1500} height={100}></Image>
                </div>
            </div>

        </div>
    )
}

export default Hire