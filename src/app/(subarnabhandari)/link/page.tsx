import Instagram from '@/components/links/Instagram'
import Social from '@/components/links/Social'
import Studio from '@/components/links/Studio'
import Youtube from '@/components/links/Youtube'
import React from 'react'

const page = () => {
  return (
    <main>
      <Social/>
      <Studio/>
      <Instagram/>
      <Youtube/>
    </main>
  )
}

export default page