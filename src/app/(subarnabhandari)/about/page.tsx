import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Head from 'next/head'


const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About. Subarna Bhandari</title>
        <meta name="description" content="Learn about Subarna Bhandari, a Web, Graphic, & UI/UX Designer based in Nepal. Discover his journey, projects, and contributions to the design industry." />
        <meta name="keywords" content="Subarna Bhandari, web designer, graphic designer, UI/UX designer, Nepal, brand identity, online presence" />
        <meta property="og:title" content="About Subarna Bhandari | Web, Graphic, & UI/UX Designer" />
        <meta property="og:description" content="Learn about Subarna Bhandari, a Web, Graphic, & UI/UX Designer based in Nepal. Discover his journey, projects, and contributions to the design industry." />
        <meta property="og:image" content="/about/about-header.jpg" />
        <meta property="og:url" content="https://www.subarnabhandari.com/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Subarna Bhandari | Web, Graphic, & UI/UX Designer" />
        <meta name="twitter:description" content="Learn about Subarna Bhandari, a Web, Graphic, & UI/UX Designer based in Nepal. Discover his journey, projects, and contributions to the design industry." />
        <meta name="twitter:image" content="/about/about-header.jpg" />
      </Head>
      <main>
        <div className="container flex flex-col m-auto bg-neutral-4 rounded-2xl py-5 px-4 gap-10 pb-20">
          <Image
            className="m-auto w-full rounded-xl"
            src="/about/about-header.jpg"
            width={2000}
            height={100}
            alt="About Subarna Bhandari"
          />
          <div className='flex flex-col gap-3'>
            <h2 className="text-4xl color-primary-600 font-bold pb-2 text-white">
              Hello!👋 I’m Subarna, a Web, Graphic, & UI/UX Designer.
            </h2>
            <p className="text-base mb-4 color-white90">
              Based in Nepal, 👨‍💻 I help business owners and entrepreneurs create their brand identities, have an online presence, and turn their businesses into the next best thing in the market! Design for me is more than just digital applications. I am a painter, a crafter, a photographer, and I love decorating spaces. It wasn’t a feasible business plan but it was a creative outlet for me and I loved it! In 2015, I started designing and never looked back. Now, in my 5 years, I have worked with clients from all genres across the globe and it’s been an amazing journey. I am always looking forward to opportunities, both online/freelance and in-house, to learn and flex my creative skills towards building an impactful brand.
            </p>
            <p className="text-base mb-4 color-white90">
              When I’m not glued to the computer, I like to spend time watching movies and painting. I am also an adrenaline junkie and love all sports above and below ground level – doesn’t mean I’m necessarily good at them all!
            </p>
            <p className="text-bold text-white">
              Creating the Brand, that people <b>Love.</b>
            </p>
          </div>
          <div className="flex gap-5">
            <Link className="primary-btn" href="/contact">Let‘s Connect</Link>
            <Link className="border-btn" href="/cv">View Resume</Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default AboutPage
