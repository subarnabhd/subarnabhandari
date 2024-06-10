import React from 'react'

const page = () => {
  return (
<div className='flex flex-col gap-5'>
        <h2 className="font-bold text-3xl py-5">Dashboard</h2>
        <div className='flex justify-between gap-5'>
        <div className='p-20 w-full bg-white rounded-xl'></div>
        <div className='p-20 w-full bg-white rounded-2xl'></div>
        <div className='p-20 w-full bg-white rounded-2xl'></div>
        <div className='p-20 w-full bg-white rounded-2xl'></div>
        <div className='p-20 w-full bg-white rounded-2xl'></div>
        </div>
        <div className='flex justify-between gap-5'>
        <div className='p-20 h-[540px] w-full bg-white rounded-xl'></div>
        <div className='p-20 h-[540px] w-full bg-white rounded-2xl'></div>
       
        </div>
        <div className='p-20 h-[140px] w-full bg-white rounded-xl'></div>

        </div>
  )
}

export default page