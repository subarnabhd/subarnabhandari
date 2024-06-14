import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Youtube = () => {
  const channels = [
    {
      href: "https://www.youtube.com/@subarnabhd",
      imgSrc: "/about/subarnabhandari.jpg",
      imgAlt: "Subarnabhd",
      name: "Subarnabhd",
      handle: "@subarnabhd",
      channelId: "UCaLuSXtqYkLNbqKpF30kMEA"
    },
    {
      href: "https://www.youtube.com/@thesubarnastudio",
      imgSrc: "/studio/thesubarnastudio.png",
      imgAlt: "The Subarna Studio",
      name: "The Subarna Studio",
      handle: "@thesubarnastudio",
      channelId: "UCHAv0rdJ7IKkdH4XL4A3QCA"
    },
    {
      href: "https://www.youtube.com/@memoriesline",
      imgSrc: "/link/memoriesline.jpg",
      imgAlt: "Memoriesline",
      name: "Memoriesline",
      handle: "@memoriesline",
      channelId: "UCkz2T5GUlxJfleZOkJFSVDQ"
    }
  ];

  return (
    <div className="Youtube-link py-20">
      <div className="container m-auto flex gap-5">
        <div className="flex flex-col justify-center items-center gap-4 p-10">
          <Image className='p-0' src="/link/youtube.webp" alt="YouTube Logo" height={60} width={60} />
          <h2 className='text-3xl font-bold text-center'>Subscribe us on Youtube</h2>
          <p className='text-sm color-white80 text-center'>Subscribe Now and press the bell button</p>
        </div>

        <div className="w-8/12 flex gap-5 items-center justify-center">
          {channels.map((channel, index) => (
            <Link key={index} className="link-box" href={channel.href} target="_blank">
              <div className="cbutton">
                <Image src={channel.imgSrc} alt={channel.imgAlt} height={100} width={100} />
                <p className="link-1">{channel.name}</p>
                <p className="link-2">{channel.handle}</p>
                <div className="g-ytsubscribe" data-channelid={channel.channelId} data-layout="default" data-count="default"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Youtube;
