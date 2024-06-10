import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Downloadapp = () => {
  return (
    <div className="flex gap-2 text-center justify-center">
      <Link className="" target="_blank" rel="noopener noreferrer" href="/mobile">
        <Image
          src="/play_store.svg"
          width={115}
          height={115}
          alt="Download on Google Play Store"
        />
        <span className="sr-only">Download on Google Play Store</span>
      </Link>
      <Link className="" target="_blank" rel="noopener noreferrer" href="/mobile">
        <Image 
          src="/app_store.svg"
          width={115}
          height={100}
          alt="Download on Apple App Store"
        />
        <span className="sr-only">Download on Apple App Store</span>
      </Link>
    </div>
  )
}

export default Downloadapp