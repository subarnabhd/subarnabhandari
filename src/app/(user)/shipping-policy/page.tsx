import React from 'react'

const page = () => {
  return (
    <main>
      <div className='bg-white py-20'>
        <div className="container m-auto gap-4 flex flex-col p-5 color-neutral-8">

          <h1 className='font-bold text-5xl color-neutral-10 '>Shipping Policy</h1>
          <h3 className='color-neutral-7 mb-10'>Last updated on May 9, 2024</h3>

          <div className='py-4 flex flex-col  gap-4'>
            <p>We only deliver inside Kathmandu Valley.</p>

            <p>Inside Ring Road, Kathmandu:</p>
            <p>Delivery is free inside Ring Road, Kathmandu. All items ordered are delivered within 1-3 business days.</p>

            <p>Outside Ring Road, Kathmandu:</p>
            <p>For outside Ring Road, delivery is free if the total order value of your order is greater than Rs 1500. If the total order value is less than Rs 1500 then Rs 50 delivery fees is added. All items ordered are delivered within 1-3 business days.</p>

            <p>For Delivery of Nepal Gas LPG Gas Cylinders, Rs 75 per cylinder is added as Delivery Charge.</p>


          </div>



        </div>
      </div>
    </main>
  )
}

export default page