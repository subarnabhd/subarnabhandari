import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Whychoose = () => {
    return (
        <div className='bg-black py-20'>
            <div className="container m-auto  block md:flex gap-5 px-4">

            <div className='flex flex-col gap-5 justify-center  text-left' >
                
                    <h1 className="text-4xl font-bold">Why to Choose ?</h1>
                    <p className="text-lg color-white80 pr-20 mr-20">Over the years, I have acquired relevant skills and experience, which I shall bring to you.
                        These “why me” reasons should be enough to convince someone who is looking for a design solution.
                        But if you’re still in doubt,
                    </p>
                    <Link href="/contact" type="button">Let’s do a small test together</Link>

                    <p>Agree or disagree with any of the above?</p>
                    <Link className="primary-btn w-max" type="button" href="/contact">Send Your honest feedback</Link>
                    </div>
                <div>

                    <div className='w-1/2 flex flex-col gap-5 p-5'>
                        <div className="why-box-list flex p-5 rounded-3xl border border-gray-800 gap-5 w-[388px] items-center ml-[-100px]">
                            <Image src="/home/svg0.svg" alt="" width={40} height={100}></Image>
                            <div>
                                <h6 className='font-semibold text-lg'>Top notch quality</h6>
                                <p className='color-white80 text-sm'>Nothing less than the best</p>
                            </div>
                        </div>

                        <div className="why-box-list flex p-5 rounded-3xl border border-gray-800 gap-5 w-[388px] items-center">
                            <Image src="/home/svg1.svg" alt="" width={40} height={100}></Image>
                            <div>
                            <h6 className='font-semibold text-lg'>Speedy turn around</h6>
                                <p className='color-white80 text-sm'>But don’t forget me being a human</p>
                            </div>
                        </div>

                        <div className="why-box-list flex p-5 rounded-3xl border border-gray-800 gap-5 w-[388px] items-center ml-[-80px]">
                            <Image src="/home/svg2.svg" alt="" width={40} height={100}></Image>
                            <div>
                            <h6 className='font-semibold text-lg'>Always ready to chat</h6>
                                <p className='color-white80 text-sm'>Except for when I am dreaming</p>
                            </div>
                        </div>

                        <div className="why-box-list flex p-5 rounded-3xl border border-gray-800 gap-5 w-[388px] items-center">
                            <Image src="/home/svg3.svg" alt=""  width={40} height={100}></Image>
                            <div>
                            <h6 className='font-semibold text-lg'>Email Availability 9.5/10</h6>
                                <p className='color-white80 text-sm'>I mean it - Test it now</p>
                            </div>
                        </div>

                        <div className="why-box-list flex p-5 rounded-3xl border border-gray-800 gap-5 w-[388px] items-center ml-[80px]">
                            <Image src="/home/svg4.svg" alt="" width={40} height={100}></Image>
                            <div>
                            <h6 className='font-semibold text-lg'>Affordable</h6>
                                <p className='color-white80 text-sm'>Don’t mix it up with “Cheap”</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Whychoose