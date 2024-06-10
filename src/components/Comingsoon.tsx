import Image from 'next/image'
import React from 'react'
import { FaTiktok } from 'react-icons/fa';
import { IoMdMailOpen } from 'react-icons/io';
import { FaFacebookF } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import Socialmedia from './footer/Socialmedia';

const Comingsoon = () => {
    return (
        <main className=' w-full h-screen bg-primary-600 flex justify-center items-center flex-col gap-5'>
            <div className='text-center flex flex-col gap-4'>
            <Image className='center text-center m-auto' src='/v-icon.svg' width={150} height={100} alt='' />
            <Image className='center text-center m-auto' src='/vhandar-white-logo.svg' width={300} height={100} alt='' />
            <a className='text-xl text-white color-secondary-500' href='/home'>www.vhandar.com</a>
            </div>
            <Socialmedia />

            <a className='text-m text-white font-light bg-primary-800 hover-bg-primary-900 p-3 px-5 round' target='blank' href='https://wa.me/9779851357358'>Chat Us on Whatsapp</a>
            <p className='text-xl text-white'>Coming Soon..</p>



        </main>
    )
}

export default Comingsoon