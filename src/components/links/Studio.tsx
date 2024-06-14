import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Head from 'next/head'

const Studio = () => {
  return (

     
      <div className='bg-gray-995 w-header border-t border-gray-950'>
        <div className='container py-20 m-auto flex justify-between items-center'>
          <div>
            <p className='text-3xl font-bold'>The Subarna Studio</p>
            <Link href="/studio" className='text-sm font-normal'>studio.subarnabhandari.com</Link>
          </div>
          <div className='flex gap-4'>
            <Link className="soci-box" href="https://facebook.com/thesubarnastudio" target="_blank">
              <div className='flex items-center'>
                <Image src="/link/facebook.webp" height={60} width={60} alt='Facebook' />
                <p>Facebook</p>
              </div>
            </Link>
            <Link className="soci-box" href="https://instagram.com/thesubarnastudio" target="_blank">
              <div className='flex items-center'>
                <Image src="/link/instagram.webp" height={60} width={60} alt='Instagram' />
                <p>Instagram</p>
              </div>
            </Link>
            <Link className="soci-box" href="https://www.linkedin.com/in/thesubarnastudio" target="_blank">
              <div className='flex items-center'>
                <Image src="/link/linkedin.webp" height={60} width={60} alt='LinkedIn' />
                <p>LinkedIn</p>
              </div>
            </Link>
            <Link className="soci-box" href="https://behance.net/thesubarnastudio" target="_blank">
              <div className='flex items-center'>
                <Image src="/link/behance.webp" height={60} width={60} alt='Behance' />
                <p>Behance</p>
              </div>
            </Link>
            <Link className="soci-box" href="https://www.youtube.com/@thesubarnastudio" target="_blank">
              <div className='flex items-center'>
                <Image src="/link/youtube.webp" height={60} width={60} alt='YouTube' />
                <p>YouTube</p>
              </div>
            </Link>
            <Link className="soci-box" href="https://wa.me/9779802340360" target="_blank">
              <div className='flex items-center'>
                <Image src="/link/whatsapp.webp" height={60} width={60} alt='WhatsApp' />
                <p>WhatsApp</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

  )
}

export default Studio
