import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <main>
    <div className="container portfolio-container">
      <div className="portfolio-header-section">
        <h2>Project I have Done</h2>
        <p>
          Throughout my professional journey, I've had the privilege of
          collaborating with both small, tight-knit teams and large, diverse
          groups, gaining invaluable insights and skills from hands-on
          experience.
        </p>
      </div>

      <div className="portfolio-title p-10 w-full flex mb-hide">
        <div className="p-container">
          <div className="ptitle col">
            <h4>Projects</h4>
          </div>
          <div className="appricate col">
            <Link
              className="behance"
              target="_blank"
              href="https://www.behance.net/subarnabhd"
              ><i className="fa-brands fa-behance"></i>&nbsp;Behance</Link>
           
            <h2>Appricate &nbsp;<i className="fas fa-heart"></i>&nbsp; it on</h2>
          </div>
        </div>
      </div>

      <div className="line-10"></div>



      <div className="projectcard flex animate pop">
        <div className="col project-details">
          <Image
            className="project-logo"
            src="/portfolio/vhandar-logo.png"
         height={60} width={60} alt=''></Image>
          <p className="project-title">Digitizing Grocery Ordering Experience</p>
          <div className="line-20"></div>
          <p className="project-name">Vhandar.com</p>
          <div className="project-sm-container">
            <p className="project-position">Product Designer</p>
            <p className="project-dot">•</p>
            <p className="project-timeline">Jan 2024 - Present</p>
          </div>

          <p className="project-description">
            Shop online for groceries and get your order delivered at your
            doorstep in minutes. Enjoy instant delivery with Vhandar.
          </p>
          <Link
            className="project-button"
            target="_blank"
            href="http://www.vhandar.com/"
            >Coming Soon...</Link>
        </div>
        <div className="col project-image">
          <Image src="/portfolio/vhandar.png"height={600} width={600} alt=''></Image>
        </div>
      </div>

      <div className="line-80"></div>

      <div className="projectcard flex animate pop">
        <div className="col project-details">
          <Image
            className="project-logo"
            src="/portfolio/trackshield-logo.png"
          height={60} width={60} alt=''></Image>
          <p className="project-title">Telematic solutions designed to Global Car Tracking.</p>
          <div className="line-20"></div>
          <p className="project-name">Track Shield</p>
          <div className="project-sm-container">
            <p className="project-position">Lead UI Designer</p>
            <p className="project-dot">•</p>
            <p className="project-timeline">Feb 2024 - Apr 2024</p>
          </div>

          <p className="project-description">
            Fleet tracking apps are a handy solution for fleet managers, and
            their capabilities are quite powerful.
          </p>
          <Link
            className="project-button"
            target="_blank"
            href="https://trackshields.com/"
            >View Project</Link>
        </div>
        <div className="col project-image">
          <Image src="/portfolio/trackshield.png" height={600} width={600} alt=''></Image>
        </div>
      </div>

      <div className="line-80"></div>

      <div className="projectcard flex animate pop">
        <div className="col project-details">
          <Image
            className="project-logo"
            src="/portfolio/mybantu-logo.png"
          height={60} width={60} alt=''></Image>
          <p className="project-title">Upgrading Phone Calling Experience</p>
          <div className="line-20"></div>
          <p className="project-name">My Bantu</p>
          <div className="project-sm-container">
            <p className="project-position">Product Designer</p>
            <p className="project-dot">•</p>
            <p className="project-timeline">Feb 2023 - Jan 2024</p>
          </div>
          <p className="project-description">
            Your Ultimate call forwarding , Transcription and recording
            solution. Simplify your communication, boost productivity, and
            stay connected like never before.
          </p>
          <Link className="project-button" target="_blank" href="https://mybantu.in/"
            >View Project</Link>
        </div>
        <div className="col project-image">
          <Image src="/portfolio/mybantu.png" height={600} width={600} alt=''></Image>
        </div>
      </div>


      <div className="line-80"></div>


      <div className="projectcard flex animate pop">
        <div className="col project-details">
          <Image className="project-logo" src="/portfolio/lims-logo.png" height={60} width={60} alt=''></Image>
          <p className="project-title">Modernizing Laboratory Information Management Through Digitalization</p>
          <div className="line-20"></div>
          <p className="project-name">
            Laboratory Information Management System - LIMS
          </p>
          <div className="project-sm-container">
            <p className="project-position">Product Designer</p>
            <p className="project-dot">•</p>
            <p className="project-timeline">Feb 2023 - Jan 2024</p>
          </div>
          <p className="project-description">
            Laboratory Information Management System at Department of Food
            Technology and Quality Control.
          </p>
          <Link className="project-button" target="_blank" href="http://lims.dftqc.gov.np/">View Project</Link>
        </div>
        <div className="col project-image">
          <Image src="/portfolio/lims.png" height={600} width={600} alt=''></Image>
        </div>
      </div>


      <div className="line-80"></div>


      <div className="projectcard flex animate pop">
        <div className="col project-details">
          <Image className="project-logo" src="/portfolio/sajha-logo.png" height={60} width={60} alt=''></Image>
          <p className="project-title">Inovative application for managing Real Estate Management Services</p>
          <div className="line-20"></div>
          <p className="project-name">
            Sajha Investment
          </p>
          <div className="project-sm-container">
            <p className="project-position">UI/UX Designer</p>
            <p className="project-dot">•</p>
            <p className="project-timeline">Feb 2022 - Mar 2023</p>
          </div>
          <p className="project-description">
            Platform that lets real estate manage the selling, buying and investment process end-to-end with ease, all from one location.
          </p>
          <Link className="project-button" target="_blank" href="#">View Project</Link>
        </div>
        <div className="col project-image">
          <Image src="/portfolio/sajha.png" height={600} width={600} alt=''></Image>
        </div>
      </div>

     


      <div className="portfolio-banner">
        <div className="row portfolio-banner-container">
          <div className="col p-col-1">
            <h2>Portfolio<strong>.</strong> <span>Subarna</span></h2>
            <p>Hire Subarna for the best design experience.</p>
            <div className="portfolio-banner-btn-container">
              <Link className="btn1" href="https://subarnabhandari.com/contact"
                >Hire</Link>
        

              <Link className="btn2" href="https://subarnabhandari.com/">Message</Link>
            </div>
          </div>
          <div className="col p-col-2">
            <Image src="/home/icon.webp" height={600} width={600} alt=''></Image>
          </div>
        </div>
      </div>
      
    </div>

    <div className="portfolio-footer">
      <h1>Let's make something great together.</h1>
      <div className="portfolio-footer-sm-container">
        <p>Have a project or want to talk? Say</p>
        <Link
          className="primary-btn"
          href="mailto:hello@subarnabhandari.com"
          target="_blank"
          >hello@subarnabhandari.com</Link>
      </div>
      <h6>SAY HELLO!</h6>
      <div className="portfolio-footer-sm-container">
        <Link
          className="portfolio-social"
          href="https://www.linkedin.com/in/subarnabhd"
          target="_blank"
          >Linkedin</Link>
        <Link
          className="portfolio-social"
          href="https://facebook.com/subarnabhd"
          target="_blank"
          >Facebook</Link>
        <Link
          className="portfolio-social"
          href="https://instagram.com/subarnabhd"
          target="_blank"
          >Instagram</Link>
        <Link
          className="portfolio-social"
          href="https://behance.net/subarnabhd"
          target="_blank"
          >Behance</Link>
      </div>
    </div>

    <div className="portfolio-end">
      <Image src="/portfolio/portfoliotext.png" height={60} width={60} alt=''></Image>
    </div>
  </main>
  )
}

export default page