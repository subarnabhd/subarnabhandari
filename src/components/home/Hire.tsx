import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hire = () => {
    return (
        <div className="py-20 w-header">
            <div className=" container m-auto bg-[#F5F5F7] rounded-2xl flex  ">
                <div className='p-20 w-1/2  text-black  items-center flex flex-col'>
                    <div className="flex flex-col color-black-60 text-lg text-center items-center">
                        <h1 className='font-bold text-5xl'>Got an idea?</h1>
                        <h1 className='font-bold text-5xl'>Let's work together.</h1>
                        <p>Are you an entrepreneur/business with a great idea,</p>
                        <p>but need an identity to start with?</p>
                        <p>I love ideas because I believe in them.</p>
                        <p>Let's discuss your idea.</p>

                    </div>
                    <Link type="button" className="yes-button yes-button-home" href="/contact">HIRE</Link>
                </div>
                <div className="w-1/2">
                    <Image className="w-min" src="/home/subarnabhd-showcase.webp" alt="Subarna Bhandari"  width={5000} height={100}></Image>
                </div>
            </div>

        </div>
    )
}

export default Hire