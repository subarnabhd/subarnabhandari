import About from '@/components/About'
import Blogcard from '@/components/Blogcard'
import Downloadapp from '@/components/Downloadapp'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <main className='bg-white pt-5'>


    <div className="container flex flex-row m-auto bg-neutral-4 rounded-2xl py-5">
      <div className="mx-auto text-xl color-neutral-8 m-auto  w-1/2 p-20 flex flex-col gap-3 text-center">
        <Image
          className="m-auto text-center"
          src="/v-icon.svg"
          width={100}
          height={100}
          alt=""
        />

        <h2 className="text-4xl color-primary-600 font-bold pb-2 ">
          Vhandar.com
        </h2>
        <p className=" text-xl font-semibold">We’re revolutionizing the way Nepal shops.</p>
        <p className=" text-base mb-4">
          We pioneered the instant delivery model in Nepal with over 10
          million Nepali shopping on Vhandar, for everything from grocery
          staples and vegetables to emergency supplies and electronics,
          and much more.
        </p>
      <Downloadapp/>
      </div>

      <div className="w-1/2 text-right">
        <Image
          className=" m-auto  text-right"
          src="/vhandar-app.png"
          width={640}
          height={100}
          alt=""
        />
      </div>

    </div>

    <div className="container m-auto color-neutral-7 py-10 flex flex-col gap-3 mb-10">
      <h2 className="text-2xl font-semibold  color-primary-800 pb-3 pt-5 ">
        100x retail in 5 years
      </h2>
      <p>
        Imagine needing something when you are at home and getting it before
        you have tied your shoelaces to step out. We are revolutionizing
        e-commerce by making the stuff most important to you, available to
        you in a Blink of your eye.
      </p>
      <p>
        We want our customers to focus on the more important things for
        themselves and not need to plan for the little things that life
        needs on an everyday basis. We are here to get your chores out of
        your way.
      </p>
      <p>
        Our mission is – “instant commerce indistinguishable from magic”.
        Using a backbone of technology, data sciences, and rich customer
        insights, we've built a dense and fast network of partner stores
        enabling lightning fast deliveries in minutes.
      </p>
      <p>
        We are already one of the largest e-grocery companies in Nepal. Our
        ambition however, is to be 100x this size in the next five years.
      </p>
      <p>
        In order to become one of the most important e-retail companies of
        our generation, we need builders who can think on their feet, take
        extreme ownership and commit to making outcomes happen. If you are
        ambitious, smart, and don’t have an ego about it, we’d love to hear
        from you.
      </p>
      <p>
        Opportunities to create $100 billion businesses in Nepal are rare.
        We are on the way and looking for the hungry.
      </p>
      <p>
        "Vhandar" is owned & managed by "Vhandar Commerce Private Limited”
        (formerly known as Grofers Nepal Private Limited) and is not
        related, linked or interconnected in whatsoever manner or nature, to
        “GROFFR.COM” which is a real estate services business operated by
        “Redstone Consultancy Services Private Limited”
      </p>
    </div>

    <div className="bg-primary-500 py-20 text-white">
      <div className=" container flex m-auto py-20">
        <div className="w-1/2">
          <h1 className="text-m font-semibold uppercase color-secondary-600">
            OUR MISSION
          </h1>

          <h2 className="text-4xl font-bold py-5 w-2/3">
            We're revolutionizing the way Nepal shops.
          </h2>
          <Image
            className="text-left mt-20 "
            src="/map.svg"
            width={500}
            height={100}
            alt=""
          />
        </div>

        <div className="w-1/2">
          <h1 className="text-m font-semibold uppercase color-secondary-600 pb-5">
            HOW WE WORK
          </h1>

          <div className="py-3">
            <div className="flex-col flex justify-center ">
              <div className="flex gap-3">
                <Image
                  className="text-left"
                  src="/icon/icon1.svg"
                  width={40}
                  height={38}
                  alt=""
                />
                <h2 className="text-2xl font-semibold">
                  Move fast and deliver things
                </h2>
              </div>
            </div>
            <p className="color-neutral-6 py-1">
              Vhandar is defined as the shortest unit of measurable time in
              physics, which means speed is in our DNA. From delighting
              customers with 10-minute delivery to growing our presence
              across the country, speed is always at the forefront.
            </p>
          </div>

          <div className="py-3">
            <div className="flex gap-3">
              <Image
                className="text-left"
                src="/icon/icon2.svg"
                width={40}
                height={100}
                alt=""
              />
              <h2 className="text-2xl font-semibold">
                Question what's possible
              </h2>
            </div>

            <p className="color-neutral-6 py-1">
              10-minute delivery sounds crazy, which is why we believe in
              breaking existing mental models and creating radically new
              ideas. Our team includes Nepal's top talent across functions
              and we pride ourselves in first principles thinking.
            </p>
          </div>

          <div className="py-3">
            <div className="flex gap-3">
              <Image
                className="text-left"
                src="/icon/icon3.svg"
                width={40}
                height={100}
                alt=""
              />
              <h2 className="text-2xl font-semibold">Customer obsession</h2>
            </div>

            <p className="color-neutral-6 py-1">
              Customer experience is our everything. From product to
              operations, we push ourselves beyond what's 'practical' in our
              never ending pursuit of delivering customer delight.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="container m-auto color-neutral-7 my-20">
      <p className="text-2xl color-neutral-10 pt-8 pb-3">
        From our <strong className="text-bold">newsroom</strong>
      </p>
      <p>
        Explore our blog to get updates on what we’re up to at Vhandar
      </p>

      <div className="flex align-baseline">
        <Blogcard />
        <Blogcard />
        <Blogcard />
        <Blogcard />
      </div>
    </div>

    <div className="container m-auto">
      <Image
        className="w-full"
        src="/card-1.jpg"
        width={2000}
        height={100}
        alt=""
      />

      <div className="color-neutral-7 pt-10 flex flex-col gap-5 my-20">
        <p>
          For media enquiries, write to us at
          <a
            className="v-link font-medium"
            href="mailto:press@vhandar.com"
          >
            &nbsp; press@vhandar.com&nbsp; 
          </a>
          or check out our
          <a className="v-link font-medium" href="/press">
            &nbsp; press page
          </a>
        </p>

        <p>
          For all other inquiries, write to us a
          <a
            className="v-link font-medium"
            href="mailto:info@vhandar.com"
          >
            &nbsp; info@vhandar.com
          </a>
        </p>

        <p>
          <strong className="color-primary-500 font-bold">
            Operational address:&nbsp;
          </strong>
          Near Shankhamul Tower, Shankhamul, Kathmandu, Nepal
        </p>

        <p>
          <strong className="color-primary-500 font-bold">PHONE NO.:&nbsp;</strong>

          <a className="v-link font-medium" href="tel:+977-9851357358">
            +977-9851357358
          </a>
        </p>
      </div>

    </div>


    <About />
  </main>
  )
}

export default page
