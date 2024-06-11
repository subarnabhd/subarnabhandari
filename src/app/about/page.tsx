import About from '@/components/About'
import Blogcard from '@/components/Blogcard'
import Downloadapp from '@/components/Downloadapp'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <main className='bg-black'>


    <div className="container flex flex-col m-auto bg-neutral-4 rounded-2xl py-5 gap-4">
        <Image
          className="m-auto w-full rounded-xl"
          src="/about/about-header.jpg"
          width={2000}
          height={100}
          alt=""
        />

        <h2 className="text-4xl color-primary-600 font-bold pb-2 ">
        Hello!👋I’m Subarna, a Web, Graphic, & UI/UX Designer.
        </h2>
        <p className=" text-base mb-4 color-white90">
        Based in Nepal, 👨‍💻I help business owners and entrepreneurs create their brand identities, have an online presence, and turn their businesses into the next best thing in the market! Design for me more than just digital applications. I am a painter, a crafter, a photographer, and love decorating spaces. It wasn’t a feasible business plan but it was a creative outlet for me and I loved it! In 2015, I started Designing and never looked back. Now, in my 5 years, I have worked with clients from all genres across the globe and it’s been an amazing journey. I am always looking forward to the opportunities, both online/freelance and in-house, to learn and flex my creative skills towards building an impactful brand.
       </p>
       <p className=" text-base mb-4 color-white90">When I’m not glued to the computer, I like to spend time watching movies, painting. I am also an adrenaline junkie and love all sports above and below ground level – doesn’t mean I’m necessarily good at them all!</p>
        <p className='text-bold'>Creating the Brand, that people <b>Love.</b></p>
      
    </div>

  </main>
  )
}

export default page
