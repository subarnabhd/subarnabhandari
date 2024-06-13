"use client";

import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";
import Toolshead from "@/components/header/Toolshead";

const tools = () => {

  return (
    <main>
      <Toolshead />
      <div className="container m-auto">

        <div className="flex gap-5 py-5">

          <div className="w-3/12 flex flex-col gap-6">
          <div className="tool-box h-[337px] flex items-center text-center justify-center">
              <p>Hello!</p>
          </div>
            <div>
              <h2 className="text-lg font-semibold pb-5">POPULAR</h2>

              <div className=" flex flex-col gap-4">
                <Link className="tool-box tool-box-side"
                  href="https://subarnabhd.notion.site/Chrome-Extension-42d226e412f447d9a4104d14e714ba9a?pvs=4"
                  type="button" target="_blank">
                  <div className="popbutton">
                    <Image src="/tools/chrome.webp" width={55}
                      height={100}
                      alt=""
                    />
                    <p className="t1-title">Chrome Extension</p>
                  </div>
                  <p><FaAngleRight /></p>
                </Link>

                <Link className="tool-box tool-box-side" href="https://subarnabhd.notion.site/Mac-App-d526415b61784b24938a1e21ed539e06?pvs=4"
                  type="button" target="_blank">
                  <div className="popbutton">
                    <Image src="/tools/appstore.webp" width={55}
                      height={100}
                      alt=""
                    />
                    <p className="t1-title">Mac Apps</p>
                  </div>
                  <p><FaAngleRight /></p>
                </Link>

                <Link className="tool-box tool-box-side"
                  href="https://subarnabhd.notion.site/Windows-App-0277adcc2b184052be72810fae9f82e2?pvs=4" type="button"
                  target="_blank">
                  <div className="popbutton">
                    <Image src="/tools/wstore.webp" width={55}
                      height={100}
                      alt=""
                    />
                    <p className="t1-title">Windows App</p>
                  </div>
                  <p><FaAngleRight /></p>
                </Link>

                <Link className="tool-box tool-box-side" href="unicode.html" type="button">
                  <div className="popbutton">
                    <Image src="/tools/convert.webp" width={55}
                      height={100}
                      alt=""
                    />
                    <p className="t1-title">Unicode to Preeti</p>
                  </div>
                  <p><FaAngleRight /></p>
                </Link>

                <Link className="tool-box tool-box-side" href="https://pay.subarnabhandari.com" type="button" target="_blank">
                  <div className="popbutton">
                    <Image src="/pay/subarnapay.webp" width={55}
                      height={100}
                      alt=""
                    />
                    <p className="t1-title">Subarna Pay</p>
                  </div>
                  <p><FaAngleRight /></p>
                </Link>


                <Link className="tool-box tool-box-side"
                  href="https://subarnabhd.notion.site/1433cdefaa344bdea7bb14c24713fc5d?v=4bc4f007a15c480882e99097ae869adb"
                  type="button" target="_blank">
                  <div className="popbutton">
                    <Image src="/tools/notion.webp" width={55}
                      height={100}
                      alt=""
                    />
                    <p className="t1-title">Switch to Notion</p>
                  </div>
                  <i className="fa-solid popico fa-arrows-rotate"></i>
                </Link>
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold pb-5">Useful Links</h2>
              <div className="tool-link flex flex-wrap gap-2">
                <Link className=" tool-box" href="https://appstorrent.ru" type="button" target="_blank">Appstorrent
                  [mac]</Link>
                <Link className=" tool-box " href="https://haxmac.cc/" type="button" target="_blank">Haxmac [mac]</Link>
                <Link className=" tool-box " href="https://getintopc.com/" type="button" target="_blank">Getintopc
                  [windows]</Link>
                <Link className=" tool-box " href="https://www.truecaller.com" type="button" target="_blank">Truecaller</Link>
                <Link className=" tool-box " href="http://fast.com/" type="button" target="_blank">Speed Check</Link>
                <Link className=" tool-box " href="https://www.photopea.com" type="button" target="_blank">Photopea</Link>
                <Link className=" tool-box " href="https://wetransfer.com" type="button" target="_blank">We Transfer</Link>
                <Link className=" tool-box " href="https://www.toptal.com/developers/cssminifier" type="button" target="_blank">CSS Minifier</Link>
                <Link className=" tool-box " href="https://goqr.me/" type="button" target="_blank">QR Code Generator</Link>
                <Link className=" tool-box " href="https://www.easynepalityping.com/" type="button" target="_blank">Nepali
                  Typing</Link>
                <Link className=" tool-box " href="https://www.google.com/search?q=currency+converter" type="button" target="_blank">Currency Converter</Link>

              </div>
            </div>

            <div className="publisher-card">
              <div>
                <h4>Tools. by Subarna</h4>
              </div>
              <p className="bap">Help us to grow</p>
              <p><Link className="primary-sm-btn" href="/donate">Donate Now</Link></p>
            </div>

          </div>

          <div className="w-9/12 tool-list flex flex-col gap-6">
            <div className="slider">
            <Image
                    src="/tools/banner1.webp" className="w-full rounded-xl"
                    width={1000}
                    height={100}
                    alt=""
                  />
            </div>
            <div>
              <h2 className="text-lg font-semibold pb-5">Online Tools</h2>
              <div className=" flex flex-wrap gap-4">
                <Link
                  className="tool-box"
                  href="https://chromewebstore.google.com/detail/youtube-search/pfbenbknnmnppacheleigdmlhgllhlpa"
                  type="button"
                  target="_blank"
                >
                  <Image
                    src="/tools/youtubeit.webp"
                    width={55}
                    height={100}
                    alt=""
                  />
                  <p className="t1-title">YouTube IT</p>
                  <p className="t2-title">Quick Search for YouTube</p>
                </Link>

                <Link
                  className="tool-box"
                  href="https://chrome.google.com/webstore/detail/fopdoijjpbpdgfjmeichgmnbbmebhljc"
                  type="button"
                  target="_blank"
                >
                  <Image src="/tools/ilook.webp" width={55} height={100} alt="" />
                  <p className="t1-title">iLook - Hand Mirror</p>
                  <p className="t2-title">One-click Camera Check</p>
                </Link>

                <Link
                  className="tool-box"
                  href="https://chrome.google.com/webstore/detail/hoifffakgghpghnnnohmhbnokfjjedhl"
                  type="button"
                  target="_blank"
                >
                  <Image
                    src="/tools/daysuntil.webp"
                    width={55}
                    height={100}
                    alt=""
                  />
                  <p className="t1-title">Days Until</p>
                  <p className="t2-title">Days Countdown</p>
                </Link>

                <Link
                  className="tool-box"
                  href="https://chromewebstore.google.com/detail/days-since-days-count/llfehbiaaelkldaefaaeannhecgabpgd"
                  type="button"
                  target="_blank"
                >
                  <Image
                    src="/tools/dayssince.webp"
                    width={55}
                    height={100}
                    alt=""
                  />
                  <p className="t1-title">Days Since</p>
                  <p className="t2-title">Days Count</p>
                </Link>

                <Link
                  className="tool-box"
                  href="https://chromewebstore.google.com/detail/neptab-a-beautiful-new-ta/pfbhcijkhlnpoccgnnddmfccbmkpgnio"
                  type="button"
                  target="_blank"
                >
                  <Image
                    src="/tools/neptab.webp"
                    width={55}
                    height={100}
                    alt=""
                  />
                  <p className="t1-title">NepTab</p>
                  <p className="t2-title">A Beautiful New Tab</p>
                </Link>

                <Link className="tool-box" href="/unicode" type="button">
                  <Image
                    src="/tools/convert.webp"
                    width={55}
                    height={100}
                    alt=""
                  />
                  <p className="t1-title">Unicode to Preeti</p>
                  <p className="t2-title">unicode.subarnabhandari.com</p>
                </Link>

                <Link className="tool-box" href="/preeti" type="button">
                  <Image
                    src="/tools/convert.webp"
                    width={55}
                    height={100}
                    alt=""
                  />
                  <p className="t1-title">Preeti to Unicode</p>
                  <p className="t2-title">preeti.subarnabhandari.com</p>
                </Link>

                <Link className="tool-box" href="/date" type="button">
                  <Image src="/date/dfavi.webp" width={55} height={100} alt="" />
                  <p className="t1-title">Date. by Subarna</p>
                  <p className="t2-title">date.subarnabhandari.com</p>
                </Link>
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold pb-5">Productivity</h2>
              <div className=" flex flex-wrap gap-4">
                <Link
                  className="tool-box"
                  href="https://subarnabhd.notion.site/Chrome-Extension-42d226e412f447d9a4104d14e714ba9a?pvs=4"
                  type="button"
                  target="_blank"
                >
                  <Image
                    src="/tools/chrome.webp"
                    width={55}
                    height={100}
                    alt=""
                  />
                  <p className="t1-title">Chrome Extension</p>
                  <p className="t2-title">Best Chrome Extension</p>
                </Link>

                <Link
                  className="tool-box"
                  href="https://subarnabhd.notion.site/VS-Code-Extension-6dfb50f2b4bc4402914b732d7fe53226?pvs=4"
                  type="button"
                  target="_blank"
                >
                  <Image
                    src="/tools/vscode.webp"
                    width={55}
                    height={100}
                    alt=""
                  />
                  <p className="t1-title">VS Code Extension</p>
                  <p className="t2-title">Best VS Code Extension</p>
                </Link>

                <Link
                  className="tool-box"
                  href="https://subarnabhd.notion.site/Fonts-8274776d9fea423c80e03f5ab3d52946?pvs=4"
                  type="button"
                  target="_blank"
                >
                  <Image src="/tools/fonts.webp" width={55} height={100} alt="" />
                  <p className="t1-title">Fonts</p>
                  <p className="t2-title">English & Nepali</p>
                </Link>
                <Link
                  className="tool-box"
                  href="https://subarnabhd.notion.site/Icons-86d490e1f14d4b1fb0e330a50d8308b1?pvs=4"
                  type="button"
                  target="_blank"
                >
                  <Image src="/tools/icons.webp" width={55} height={100} alt="" />
                  <p className="t1-title">Icons</p>
                  <p className="t2-title">Develop & Design</p>
                </Link>
                <Link
                  className="tool-box"
                  href="https://subarnabhd.notion.site/Colors-9fcadded44ba4eaf93433d904abdb3f7?pvs=4"
                  type="button"
                  target="_blank"
                >
                  <Image
                    src="/tools/colors.webp"
                    width={55}
                    height={100}
                    alt=""
                  />
                  <p className="t1-title">Colors</p>
                  <p className="t2-title">Find Beautiful Colors</p>
                </Link>

                <Link
                  className="tool-box"
                  href="https://subarnabhd.notion.site/ISO-File-3cf9122fae4041c6b7baa0c44cc7e1d7?pvs=4"
                  type="button"
                  target="_blank"
                >
                  <Image src="/tools/iso.webp" width={55} height={100} alt="" />
                  <p className="t1-title">ISO File</p>
                  <p className="t2-title">Mac.Windows.Linux</p>
                </Link>
                <Link
                  className="tool-box"
                  href="https://subarnabhd.notion.site/Keyboard-Shortcuts-724f2cf6fad04de583b095b09f9c033f?pvs=4"
                  type="button"
                  target="_blank"
                >
                  <Image
                    src="/tools/shortcut.webp"
                    width={55}
                    height={100}
                    alt=""
                  />
                  <p className="t1-title">Keyboard Shortcuts</p>
                  <p className="t2-title">Mac.Window</p>
                </Link>
                <Link
                  className="tool-box"
                  href="https://mega.nz/folder/5E8XBS7A#pEC0WxTOCv93I-H4vc-EzA"
                  type="button"
                  target="_blank"
                >
                  <Image
                    src="/tools/folder.webp"
                    width={55}
                    height={100}
                    alt=""
                  />
                  <p className="t1-title">Files by Subarna</p>
                  <p className="t2-title">files.subarnabhandari.com</p>
                </Link>
                <Link
                  className="tool-box"
                  href="https://subarnabhd.notion.site/Microsoft-Office-48f9bbc7051a4ffdb5f99b93fc9a4860?pvs=4"
                  type="button"
                  target="_blank"
                >
                  <Image
                    src="/tools/office.webp"
                    width={55}
                    height={100}
                    alt=""
                  />
                  <p className="t1-title">Microsoft Office</p>
                  <p className="t2-title">2016.2019.2021.365</p>
                </Link>

                <Link
                  className="tool-box"
                  href="https://subarnabhd.notion.site/Windows-Activator-db419ad7b3744492b519ef5ff2e9d472?pvs=4"
                  type="button"
                  target="_blank"
                >
                  <Image
                    src="/tools/wactivator.webp"
                    width={55}
                    height={100}
                    alt=""
                  />
                  <p className="t1-title">Windows Activator</p>
                  <p className="t2-title">7.10.11</p>
                </Link>

                <Link
                  className="tool-box"
                  href="https://subarnabhd.notion.site/Mac-App-d526415b61784b24938a1e21ed539e06?pvs=4"
                  type="button"
                  target="_blank"
                >
                  <Image
                    src="/tools/appstore.webp"
                    width={55}
                    height={100}
                    alt=""
                  />
                  <p className="t1-title">Mac Apps</p>
                  <p className="t2-title">Best Mac Apps</p>
                </Link>

                <Link
                  className="tool-box"
                  href="https://subarnabhd.notion.site/Windows-App-0277adcc2b184052be72810fae9f82e2?pvs=4"
                  type="button"
                  target="_blank"
                >
                  <Image
                    src="/tools/wstore.webp"
                    width={55}
                    height={100}
                    alt=""
                  />
                  <p className="t1-title">Windows App</p>
                  <p className="t2-title">Best Windows Apps</p>
                </Link>
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold pb-5">Creativity</h2>
              <div className=" flex flex-wrap gap-4">
                <Link
                  className="tool-box"
                  href="https://subarnabhd.notion.site/Figma-90c1da50b3af48d8be800a832fcc5e3b?pvs=4"
                  type="button"
                  target="_blank"
                >
                  <Image src="/tools/figma.webp" width={55} height={100} alt="" />
                  <p className="t1-title">Figma</p>
                  <p className="t2-title">UI/UX Design</p>
                </Link>
                <Link
                  className="tool-box"
                  href="https://subarnabhd.notion.site/Adobe-Photoshop-d644030be81440f8bff1ff86b77b8d21?pvs=4"
                  type="button"
                  target="_blank"
                >
                  <Image
                    src="/tools/photoshop.webp"
                    width={55}
                    height={100}
                    alt=""
                  />
                  <p className="t1-title">Adobe Photoshop</p>
                  <p className="t2-title">PS</p>
                </Link>

                <Link
                  className="tool-box"
                  href="https://subarnabhd.notion.site/Adobe-illustrator-22df35ec931d4408b30049b01f87e092?pvs=4"
                  type="button"
                  target="_blank"
                >
                  <Image
                    src="/tools/illustrator.webp"
                    width={55}
                    height={100}
                    alt=""
                  />
                  <p className="t1-title">Adobe Illustrator</p>
                  <p className="t2-title">AI</p>
                </Link>

                <Link
                  className="tool-box"
                  href="https://subarnabhd.notion.site/Adobe-Lightroom-767e48d0146841df999bed4b013f2588?pvs=4"
                  type="button"
                  target="_blank"
                >
                  <Image
                    src="/tools/lightroom.webp"
                    width={55}
                    height={100}
                    alt=""
                  />
                  <p className="t1-title">Adobe Lightroom</p>
                  <p className="t2-title">Lr</p>
                </Link>

                <Link
                  className="tool-box"
                  href="https://subarnabhd.notion.site/Adobe-Premier-Pro-97d655dbded84899b870047972f19283?pvs=4"
                  type="button"
                  target="_blank"
                >
                  <Image
                    src="/tools/premier.webp"
                    width={55}
                    height={100}
                    alt=""
                  />
                  <p className="t1-title">Adobe Premier Pro</p>
                  <p className="t2-title">Pr</p>
                </Link>
                <Link
                  className="tool-box"
                  href="https://subarnabhd.notion.site/Adobe-After-Effects-c87d3e9aaadf4b8a8f198deb2683b8dc?pvs=4"
                  type="button"
                  target="_blank"
                >
                  <Image
                    src="/tools/aftereffect.webp"
                    width={55}
                    height={100}
                    alt=""
                  />
                  <p className="t1-title">Adobe After Effects</p>
                  <p className="t2-title">Ae</p>
                </Link>
                <Link
                  className="tool-box"
                  href="https://subarnabhd.notion.site/Adobe-Media-Encoder-e9ceabc80f7244bb8c569364e1faedca?pvs=4"
                  type="button"
                  target="_blank"
                >
                  <Image
                    src="/tools/mediaencoder.webp"
                    width={55}
                    height={100}
                    alt=""
                  />
                  <p className="t1-title">Adobe Media Encoder</p>
                  <p className="t2-title">Me</p>
                </Link>
                <Link
                  className="tool-box"
                  href="https://subarnabhd.notion.site/Adobe-Acrobat-Reader-14dc148180f24f0b8678ac77ae1d323e?pvs=4"
                  type="button"
                  target="_blank"
                >
                  <Image
                    src="/tools/acrobat.webp"
                    width={55}
                    height={100}
                    alt=""
                  />
                  <p className="t1-title">Adobe Acrobat Pro DC</p>
                  <p className="t2-title">PDF Editor</p>
                </Link>
                <Link
                  className="tool-box"
                  href="https://subarnabhd.notion.site/Adobe-Creative-Cloud-25515da0b17b4caa80a32648e0d6267b?pvs=4"
                  type="button"
                  target="_blank"
                >
                  <Image
                    src="/tools/creativecloud.webp"
                    width={55}
                    height={100}
                    alt=""
                  />
                  <p className="t1-title">Adobe Creative Cloud</p>
                  <p className="t2-title">Adobe</p>
                </Link>
                <Link
                  className="tool-box"
                  href="https://subarnabhd.notion.site/Blender-f797dddd4ece49e5aec8b8b5cce9fb06?pvs=4"
                  type="button"
                  target="_blank"
                >
                  <Image
                    src="/tools/blender.webp"
                    width={55}
                    height={100}
                    alt=""
                  />
                  <p className="t1-title">Blender</p>
                  <p className="t2-title">3D Modeling</p>
                </Link>
                <Link
                  className="tool-box"
                  href="https://subarnabhd.notion.site/DaVinci-Resolve-bf344f553a714058a75d113626b6d0ec?pvs=4"
                  type="button"
                  target="_blank"
                >
                  <Image
                    src="/tools/davinci.webp"
                    width={55}
                    height={100}
                    alt=""
                  />
                  <p className="t1-title">DaVinci Resolve</p>
                  <p className="t2-title">Video Editor</p>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
};

export default tools;
