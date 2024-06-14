import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Social = () => {
    return (
        <div>
              <div className="firstcard text-center flex flex-col m-auto py-20 gap-5">
          <Image className='m-auto rounded-full' src="/about/subarnabhandari.jpg" height={200} width={200} alt=''></Image>
          <h1 className='text-5xl font-semibold'>Subarna Bhandari</h1>
          <h2 className='color-white80'>Follow us on Social Media</h2>
        </div>
            <div className='pt-5 '>
                <div className='container m-auto flex flex-wrap gap-4 justify-center'>
                    <Link className="soci-box" href="https://facebook.com/subarnabhd" type="button" target="_blank">

                        <Image src="/link/facebook.webp" height={60} width={60} alt=''></Image>
                        <p className="c1name">Facebook</p>

                    </Link>
                    <Link className="soci-box" href="https://instagram.com/subarnabhd" type="button" target="_blank">

                        <Image src="/link/instagram.webp" height={60} width={60} alt=''></Image>
                        <p className="c1name">Instagram</p>
                    </Link>
                    <Link className="soci-box" href="https://www.linkedin.com/in/subarnabhd" type="button" target="_blank">

                        <Image src="/link/linkedin.webp" height={60} width={60} alt=''></Image>
                        <p className="c1name">Linkedin</p>


                    </Link>
                    <Link className="soci-box" href="https://www.threads.net/@subarnabhd" type="button" target="_blank">

                        <Image src="/link/thread.webp" height={60} width={60} alt=''></Image>
                        <p className="c1name">Thread</p>


                    </Link>
                    <Link className="soci-box" href="https://twitter.com/subarnabhd" type="button" target="_blank">

                        <Image src="/link/twitter.webp" height={60} width={60} alt=''></Image>
                        <p className="c1name">Twitter</p>


                    </Link>
                    <Link className="soci-box" href="https://www.snapchat.com/add/subarnabhd" type="button" target="_blank">

                        <Image src="/link/snapchat.webp" height={60} width={60} alt=''></Image>
                        <p className="c1name">Snapchat</p>


                    </Link>
                    <Link className="soci-box" href="https://open.spotify.com/user/cj22z4qgblhuktxc367jtdpd6?si=3551d0a098f6453f"
                        type="button" target="_blank">

                        <Image src="/link/spotify.webp" height={60} width={60} alt=''></Image>
                        <p className="c1name">Spotify</p>


                    </Link>
                    <Link className="soci-box" href="https://www.pinterest.com/subarnabhd" type="button" target="_blank">

                        <Image src="/link/pinterest.webp" height={60} width={60} alt=''></Image>
                        <p className="c1name">Pinterest</p>


                    </Link>
                    <Link className="soci-box" href="https://medium.com/@subarnabhd" type="button" target="_blank">

                        <Image src="/link/medium.webp" height={60} width={60} alt=''></Image>
                        <p className="c1name">Medium</p>


                    </Link>
                    <Link className="soci-box" href="https://www.tiktok.com/@subarnabhd" type="button" target="_blank">

                        <Image src="/link/tiktok.webp" height={60} width={60} alt=''></Image>
                        <p className="c1name">Tiktok</p>


                    </Link>
                    <Link className="soci-box" href="https://www.figma.com/@subarnabhd" type="button" target="_blank">

                        <Image src="/link/figma.webp" height={60} width={60} alt=''></Image>
                        <p className="c1name">Figma</p>


                    </Link>
                    <Link className="soci-box" href="https://behance.net/subarnabhd" type="button" target="_blank">

                        <Image src="/link/behance.webp" height={60} width={60} alt=''></Image>
                        <p className="c1name">Behance</p>


                    </Link>
                    <Link className="soci-box" href="https://dribbble.com/subarnabhd" type="button" target="_blank">

                        <Image src="/link/dribbble.webp" height={60} width={60} alt=''></Image>
                        <p className="c1name">Dribbble</p>


                    </Link>
                    <Link className="soci-box" href="https://www.reddit.com/user/subarnabhd" type="button" target="_blank">

                        <Image src="/link/reddit.webp" height={60} width={60} alt=''></Image>
                        <p className="c1name">Reddit</p>


                    </Link>
                    <Link className="soci-box" href="https://github.com/subarnabhd" type="button" target="_blank">

                        <Image src="/link/github.webp" height={60} width={60} alt=''></Image>
                        <p className="c1name">Github</p>


                    </Link>
                    <Link className="soci-box" href="https://gitlab.com/subarnabhd" type="button" target="_blank">

                        <Image src="/link/gitlab.webp" height={60} width={60} alt=''></Image>
                        <p className="c1name">Gitlab</p>


                    </Link>
                    <Link className="soci-box" href="https://codepen.io/subarnabhd" type="button" target="_blank">

                        <Image src="/link/codepen.webp" height={60} width={60} alt=''></Image>
                        <p className="c1name">Codepen</p>


                    </Link>
                    <Link className="soci-box" href="https://joinclubhouse.com/@subarnabhd" type="button" target="_blank">

                        <Image src="/link/clubhouse.webp" height={60} width={60} alt=''></Image>
                        <p className="c1name">Clubhouse</p>
                    </Link>

                </div>
            </div>
            <div className='chat py-10 pb-20'>
                <h2 className='text-center font-medium text-xl pb-5'>Chat With Us</h2>
                <div className='container m-auto flex flex-wrap gap-4 justify-center'>


                    <Link className="soci-box" href="https://facebook.com/subarnabhd" type="button" target="_blank">
                        <div className="cbutton">
                            <Image src="/link/messenger.webp" height={60} width={60} alt=''></Image>
                            <p className="c1name">Messenger</p>
                        </div>
                    </Link>
                    <Link className="soci-box" href="https://wa.me/9779844740360" type="button" target="_blank">
                        <div className="cbutton">
                            <Image src="/link/whatsapp.webp" height={60} width={60} alt=''></Image>
                            <p className="c1name">Whaatsapp</p>
                        </div>
                    </Link>
                    <Link className="soci-box" href="viber://chat?number=+977984470360" type="button" target="_blank">
                        <div className="cbutton">
                            <Image src="/link/viber.webp" height={60} width={60} alt=''></Image>
                            <p className="c1name">Viber</p>
                        </div>
                    </Link>
                    <Link className="soci-box" href="https://telegram.com/subarnabhd" type="button" target="_blank">
                        <div className="cbutton">
                            <Image src="/link/telegram.webp" height={60} width={60} alt=''></Image>
                            <p className="c1name">Telegram</p>
                        </div>
                    </Link>



                </div>
            </div>
        </div>
    )
}

export default Social