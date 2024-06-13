import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Studio = () => {
    return (
        <div className='bg-gray-995 w-header border-t border-gray-950'>
            <div className='container py-20 m-auto flex justify-between items-center'>
                <div>
                    <p className='text-3xl font-bold'>The Subarna Studio</p>
                    <Link href="/studio" className='text-sm font-normal'>studio.subarnabhandari.com</Link>
                </div>
                <div className='flex gap-4'>
                    <Link className="soci-box" href="https://facebook.com/thesubarnastudio" type="button" target="_blank">
                  
                            <Image src="/link/facebook.webp" height={60} width={60} alt=''></Image>
                            <p className="">Facebook</p>
                            {/* <p className="c2name">@thesubarnastudio</p> */}
                     </Link>
                    <Link className="soci-box" href="https://instagram.com/thesubarnastudio" type="button" target="_blank">
                  
                            <Image src="/link/instagram.webp" height={60} width={60} alt=''></Image>
                            <p className="c1name">Instagram</p>
                            {/* <p className="c2name">@thesubarnastudio</p> */}
                    </Link>
                    <Link className="soci-box" href="https://www.linkedin.com/in/thesubarnastudio" type="button" target="_blank">
                  
                            <Image src="/link/linkedin.webp" height={60} width={60} alt=''></Image>
                            <p className="c1name">Linkedin</p>
                            {/* <p className="c2name">@thesubarnastudio</p> */}
                    </Link>
                    <Link className="soci-box" href="https://behance.net/thesubarnastudio" type="button" target="_blank">
                  
                            <Image src="/link/behance.webp" height={60} width={60} alt=''></Image>
                            <p className="c1name">Behance</p>
                            {/* <p className="c2name">@thesubarnastudio</p> */}
                    </Link>
                    <Link className="soci-box" href="https://www.youtube.com/@thesubarnastudio" type="button" target="_blank">
                  
                            <Image src="/link/youtube.webp" height={60} width={60} alt=''></Image>
                            <p className="c1name">Youtube</p>
                            {/* <p className="c2name">@thesubarnastudio</p> */}
                    </Link>
                    <Link className="soci-box" href="https://wa.me/9779802340360" type="button" target="_blank">
                  
                            <Image src="/link/whatsapp.webp" height={60} width={60} alt=''></Image>
                            <p className="c1name">Youtube</p>
                            {/* <p className="c2name">+977-9802340360</p> */}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Studio