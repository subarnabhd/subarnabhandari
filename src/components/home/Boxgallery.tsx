import Image from 'next/image'
import React from 'react'

const Boxgallery = () => {
    return (
        <div className='flex  flex-col p-3 bg-[#F5F5F7]'>
            <div className='flex'>
                <Image className='p-3 w-1/2' src="/home/Subarna%20Bhandari-20.svg" alt="subarnabhd" width={1000} height={100}></Image>
                <Image className='p-3 w-1/2' src="/home/Subarna%20Bhandari-22.svg" alt="subarnabhd" width={1000} height={100}></Image>
            </div>

            <div className='flex'>
                <Image className='p-3 w-1/2' src="/home/Subarna%20Bhandari-21.svg" alt="subarnabhd" width={1000} height={100}></Image>
                <Image className='p-3 w-1/2' src="/home/Subarna%20Bhandari-24.webp" alt="subarnabhd" width={1000} height={100}></Image>
            </div>
        </div>
        

    )
}

export default Boxgallery