import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Category = () => {
    return (
     

         
                    <Link href='#' className='block text-black center text-center'>
                        <div className='bg-background hover-bg-neutral-4 rounded-xl mb-2 w-50 h-50 border '>
                        <Image src='/sample.png' width={100} height={100} alt='' />
                        </div>
                        <h3 className='hover-primary-500 font-medium text-sm'>Category</h3>
                    </Link>

   
    )
}

export default Category