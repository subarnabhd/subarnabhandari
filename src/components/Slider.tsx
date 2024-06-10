import React from 'react'

const Slider = () => {
    return (
        <main className='bg-white'>
            <div className=' container slider m-auto flex justify-center rounded-2xl overflow-hidden bg-primary-300'>

                <div className='w-full  align-middle m-auto flex justify-center items-center'>

                    <div className=' inline-block text-center items-center align-middle '>
                        <p className='mb-6 text-lg font-normal color-secondary-400 lg:text-xl sm:px-16 xl:px-48'>Everything delivered in minutes.</p>
                        <h1 className='mb-4 text-4xl font-bold leading-none tracking-tight md:text-5xl lg:text-5xl dark:text-white'>Best Grocery in Town</h1>
                        <p className='mb-6 text-lg font-normal c-light-yellow lg:text-xl sm:px-16 xl:px-48'>Creating a unique shopping experience.</p>
                        {/* <a href='/about' className=' btn border-btn'>Learn more</a> */}
                    </div>

                </div>


            </div>
        </main>
    )
}

export default Slider