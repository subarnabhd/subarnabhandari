import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <main className='bg-black py-20'>

            <div className="container m-auto flex justify-center border rounded-3xl border-gray-900 p-20 ">
                <div className="w-1/2 justify-center items-center flex text-center flex-col p-10">
                    {/* <Image className='p-5' src="/about/subarnabhandari.jpg" width="100" height="100" alt="" ></Image> */}
                    <h1 className='text-3xl font-bold pb-5'>Donate & Support 😊</h1>
                    <p className='color-white50'>Supporting our work financially is very important if you want us to keep updating it, and we appreciate every single donation.</p>
                </div>


                <div className="w-1/2 gap-5 flex flex-col">


                    <Link className="donate-button dbox col" href="https://www.buymeacoffee.com/subarnabhd" type="button"
                        target="_blank">
                        <div className="flex gap-5 items-center border rounded-2xl border-gray-900 hover:bg-gray-900 p-4">
                            <Image className='rounded-xl' src="/donate/buy-me-coffee.png" width="60" height="60" alt="" ></Image>
                            <p className="c1name">Buy Me Coffee</p>

                        </div>
                    </Link>
                    <Link className="donate-button dbox col" href="#" type="button" target="_blank">
                    <div className="flex gap-5 items-center border rounded-2xl border-gray-900 hover:bg-gray-900 p-4">
                        <Image className='rounded-xl'  src="/donate/crypto.png" width="60" height="60" alt=""></Image>
                            <p className="c1name">Donate in Crypto</p>

                        </div>
                    </Link>
                    <Link className="donate-button dbox col" href="https://subarnabhandari.com/pay" type="button" target="_blank">
                    <div className="flex gap-5 items-center border rounded-2xl border-gray-900 hover:bg-gray-900 p-4">
                        <Image className='rounded-xl' src="/donate/bank-transfer.png" width="60" height="60" alt=""></Image>
                            <p className="c1name">Bank Transfer</p>

                        </div>
                    </Link>



                </div>

            </div>



        </main>
    )
}

export default page