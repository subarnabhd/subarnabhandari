import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Youtube = () => {
  return (
<div className="Youtube-link py-20">
      <div className="container m-auto flex gap-5">

    
          <div className="flex flex-col justify-center items-center gap-4 p-10">
              <Image className='p-0' src="/link/youtube.webp" alt='' height={60} width={60} ></Image>

              <h2 className='text-2xl font-bold text-center'>Subscribe us on Youtube</h2>
              <p className='text-sm color-white80 text-center'>Subscribe Now amd press the bell button </p>


          </div>

          <div className="w-8/12 flex gap-5 items-center justify-center">

            <Link className="link-box" href="https://www.youtube.com/@subarnabhd" type="button"
              target="_blank">
              <div className="cbutton">
                <div>
                  <Image src="/about/subarnabhandari.jpg" alt='' height={100} width={100} ></Image>
                  <p className="link-1">Subarnabhd</p>
                  <p className="link-2">@subarnabhd</p>
                </div>
                <div className="g-ytsubscribe" data-channelid="UCaLuSXtqYkLNbqKpF30kMEA" data-layout="default"
                  data-count="default"></div>
              </div>
            </Link>

            <Link className="link-box" href="https://www.youtube.com/@thesubarnastudio" type="button"
              target="_blank">
              <div className="cbutton">
                <Image src="/studio/thesubarnastudio.png"alt='' height={100} width={100} ></Image>
                <p className="link-1">The Subarna Studio</p>
                <p className="link-2">@thesubarnastudio</p>
                <div className="g-ytsubscribe" data-channelid="UCHAv0rdJ7IKkdH4XL4A3QCA" data-layout="default"
                  data-count="default"></div>
              </div>
            </Link>

            <Link className="link-box" href="https://www.youtube.com/@memoriesline" type="button"
              target="_blank">
              <div className="cbutton">
                <Image src="/link/memoriesline.jpg" alt='' height={100} width={100} ></Image>
                <p className="link-1">Memoriesline</p>
                <p className="link-2">@memoriesline</p>
                <div className="g-ytsubscribe" data-channelid="UCkz2T5GUlxJfleZOkJFSVDQ" data-layout="default"
                  data-count="default"></div>
              </div>
            </Link>

          </div>


      </div>
    </div>
  )
}

export default Youtube