import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <main className="flex flex-col  py-20 items-center ">
  <Image
    src="/search.svg"
    width={100}
    height={150}
    alt=""
  />

  <h2 className="acc-b-title">Oops, you haven't placed an order yet.</h2>
  <p className="acc-b-des">
  Current and past orders will appear here
  </p>
</main>

  )
}

export default page