import Head from 'next/head';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdOutlineFileDownload } from "react-icons/md";

const cv = () => {
    return (
      <main className="cv">
        <Head>
          <title>CV. Subarna</title>
        </Head>
        <div className="cv-container">
          <div className="">
            <div className="flex justify-between items-center  m-auto pb-10">
              <div className="flex gap-8 items-center">
                <Image
                  className="rounded-full"
                  src="/about/subarnabhandari.jpg"
                  alt="Subarna Bhandari"
                  width="160"
                  height="160"
                ></Image>

                <div className="flex flex-col gap-2">
                  <p className="text-3xl font-bold">Subarna Bhandari</p>
                  <p className="text-sm font-light color-white80">
                    UI/UX Designer in Kathmandu, NP, He/Him
                  </p>
                  <Link className="" href="/">
                    www.subarnabhandari.com
                  </Link>
                </div>
              </div>
              <div className="col-4 cv-down">
                <Link
                  className="primary-btn flex justify-center items-center font-semibold text-2xl gap-2 p-2"
                  target="_blank"
                  href="https://drive.google.com/file/d/1aubb-8-L00tY7hvwqpdx6bqiUvr9du2d/view?usp=sharing"
                >
                  <MdOutlineFileDownload />
                  Download Resume
                </Link>
              </div>
            </div>

            <div>
              <p className="text-base color-white70">
                Experienced UI/UX Designer based in Kathmandu, Nepal, with 5
                years of proven success in delivering user-friendly digital
                solutions. Proficient in wire-framing, prototyping, and
                designing for web and mobile platforms. Adept at collaborating
                with cross-functional teams to create innovative products that
                meet business needs. Thrives on tackling complex design problems
                and applying creative solutions. Seeking new challenges to
                further enhance skills and contribute to impactful projects.
              </p>
            </div>
          </div>

          <div className="container mt-5 mb-5">
            <div className="row">
              <div className="col">
                <h4>Work Experience</h4>
                <ul className="timeline">
                  <li>
                    <div className="cvcard">
                      <div className="cvcard-container row">
                        <div className="cv-details col-8">
                          <div className="cv-details-container">
                            <p className="cv-company">Freelancer</p>
                          </div>

                          <p className="cv-timeline">2018 - Present</p>
                        </div>

                        <div className="cv-details col-4">
                          <div className="cv-details-container">
                            <img src="/cv/Location.svg" />
                            <p className="cv-location">Kathmandu, NP</p>
                          </div>
                        </div>
                      </div>

                      <div className="cv-description">
                        <ul>
                          <li>
                            Designed and built the “Track Shield” web app for
                            telematic solutions designed to Global Car Tracking.
                          </li>
                          <li>
                            Designed and built Mobile app and web profile for
                            “My Bantu” to Upgrade Phone Calling Experience to
                            provide an ultimate call forwarding, transcription
                            and recording solution.
                          </li>
                          <li>
                            Revamped the "Opaline Shop" e-commerce website to
                            offer an immersive and user-friendly shopping
                            experience.
                          </li>
                          <li>
                            Created innovative digital branding assets and print
                            materials to elevate brand presence across various
                            platforms.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="cvcard">
                      <div className="cv-logo">
                        <img src="/cv/kantipurinfotech.png" />
                      </div>

                      <div className="cvcard-container row">
                        <div className="cv-details col-8">
                          <div className="cv-details-container">
                            <Link
                              href="https://kantipurinfotech.com/"
                              target="_blank"
                              className="cv-company"
                            >
                              Kantipur Infotech
                            </Link>
                            <p className="cv-dot">•</p>
                            <p className="cv-position">Product Designer</p>
                          </div>

                          <p className="cv-timeline">May 2023 - Present</p>
                        </div>

                        <div className="cv-details col-4">
                          <div className="cv-details-container">
                            <img src="/cv/Location.svg" />
                            <p className="cv-location">Kathmandu, NP</p>
                          </div>
                        </div>
                      </div>

                      <div className="cv-description">
                        <ul>
                          <li>
                            Conducted UX research and created sitemaps, user
                            flows, wireframes, and visual designs for the
                            "Laboratory Information Management System (LIMS)"
                            web app for DFTQC, resulting in an 70% increase in
                            lab automation and information management
                            efficiency.
                          </li>

                          <li>
                            Designed and iteratively improved the "Dietary Food
                            Supplement Registration System" web apps through
                            usability testing and maintaining the design system,
                            resulting in increased conversions and optimized
                            user experience.
                          </li>

                          <li>
                            Redesigned the Ul for "Suchana Park" to
                            significantly improve the user experience.
                          </li>

                          <li>
                            Revamp different news portal website by improving
                            its user interface, collaborating on design,
                            conducting iterative testing, and optimizing it to
                            meet business goals, all while enhancing the user
                            experience.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="cvcard">
                      <div className="cv-logo">
                        <img src="/cv/sajhainvestment.png" />
                      </div>

                      <div className="cvcard-container row">
                        <div className="cv-details col-8">
                          <div className="cv-details-container">
                            <Link
                              href="https://sajhainvestment.com/"
                              target="_blank"
                              className="cv-company"
                            >
                              Sajha Investment
                            </Link>
                            <p className="cv-dot">•</p>
                            <p className="cv-position">UI/UX Designer</p>
                          </div>

                          <p className="cv-timeline">Feb 2022 - Mar 2023</p>
                        </div>

                        <div className="cv-details col-4">
                          <div className="cv-details-container">
                            <img src="/cv/Location.svg" />
                            <p className="cv-location">Lalitpur, NP</p>
                          </div>
                        </div>
                      </div>

                      <div className="cv-description">
                        <ul>
                          <li>
                            Designed and iteratively improved the "Sajha
                            Investment" web and mobile apps through usability
                            testing and maintaining the design system, resulting
                            in increased conversions and optimized user
                            experience.
                          </li>
                          <li>
                            Designed and developed wireframes, mockups, and
                            prototypes to visually communicate design concepts,
                            user flows, and interactions for web and mobile
                            applications.
                          </li>
                          <li>
                            Worked closely with developers to ensure accurate
                            and timely implementation of designs, providing
                            guidance and support throughout the development
                            process.
                          </li>
                          <li>
                            Conducted user research and usability testing to
                            inform design decisions and improve the user
                            experience.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="cvcard">
                      <div className="cv-logo">
                        <img src="/cv/slashplus.jpg" />
                      </div>
                      <div className="cvcard-container row">
                        <div className="cv-details col-8">
                          <div className="cv-details-container">
                            <Link
                              href="https://slashplus.com.np/"
                              target="_blank"
                              className="cv-company"
                            >
                              Slash Plus
                            </Link>
                            <p className="cv-dot">•</p>
                            <p className="cv-position">Creative Designer</p>
                          </div>

                          <p className="cv-timeline">June 2021 - Feb 2022</p>
                        </div>

                        <div className="cv-details col-4">
                          <div className="cv-details-container">
                            <img src="/cv/Location.svg" />
                            <p className="cv-location">Kathmandu, NP</p>
                          </div>
                        </div>
                      </div>

                      <div className="cv-description">
                        <ul>
                          <li>
                            Worked with clients to develop brand identities and
                            visual communication strategies.
                          </li>
                          <li>
                            Designed and produced various print and digital
                            materials including posters, billboards, websites,
                            and mobile applications.
                          </li>
                          <li>
                            Coordinated with clients, printers, and other
                            vendors to ensure timely delivery of final products.
                          </li>
                          <li>
                            In order to ensure that designs are implemented
                            accurately and effectively, collaborate with
                            developers to create an effective user interface
                            (UI) for mobile and web applications for various IOT
                            apps.
                          </li>
                          <li>
                            Assisted with the development of marketing and
                            advertising campaigns.
                          </li>
                          <li>
                            Managed multiple projects simultaneously and ensured
                            timely completion of each project.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="cvcard">
                      <div className="cv-logo">
                        <img src="/cv/designpac.png" />
                      </div>

                      <div className="cvcard-container row">
                        <div className="cv-details flex justify-between">
                          <div className="cv-details-container">
                            <Link
                              href="https://designpac.net"
                              target="_blank"
                              className="cv-company"
                            >
                              Design Pac
                            </Link>
                            <p className="cv-dot">•</p>
                            <p className="cv-position">Graphic Designer</p>
                          </div>

                          <p className="cv-timeline">June 2018 - Nov 2019</p>
                        </div>

                        <div className="cv-details col-4">
                          <div className="cv-details-container">
                            <img src="/cv/Location.svg" />
                            <p className="cv-location">Kathmandu, NP | USA</p>
                          </div>
                        </div>
                      </div>

                      <div className="cv-description">
                        <ul>
                          <li>
                            Develop creative concepts and designs for print and
                            digital media including branding, marketing
                            collateral, and social media campaigns.
                          </li>
                          <li>
                            Produced high-quality designs including logos,
                            business cards, brochures, flyers, banners, book
                            covers, ticket and posters that effectively
                            communicated the client's message and brand
                            identity.
                          </li>
                          <li>
                            Create and redesigned user interfaces for web and
                            mobile applications.
                          </li>
                          <li>
                            Managed multiple design projects simultaneously and
                            met project deadlines, while also maintaining high
                            standards of design quality.
                          </li>
                          <li>
                            I worked on a variety of GIF animations, icon
                            design, and photo manipulation projects while
                            ensuring that designs complied with accessibility
                            guidelines and best practices.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="container mt-5 mb-5">
            <div className="row">
              <div className="col">
                <h4>Eductaion</h4>
                <ul className="timeline">
                  <li>
                    <div className="cvcard">
                      <div className="cv-logo">
                        <img src="/cv/tu.jpeg" />
                      </div>

                      <div className="cvcard-container row">
                        <div className="cv-details col-8">
                          <div className="cv-details-container">
                            <Link
                              href="#"
                              target="_blank"
                              className="cv-company"
                            >
                              Bachelor's Degree
                            </Link>
                            <p className="cv-dot">•</p>
                            <p className="cv-position">BSc.CSIT</p>
                          </div>

                          <p className="cv-timeline">New Summit College</p>
                        </div>

                        <div className="cv-details col-4">
                          <div className="cv-details-container">
                            <p className="cv-location">2015 - 2020</p>
                          </div>
                        </div>
                      </div>

                      <div className="cv-description">
                        <ul>
                          <li>
                            Completed Bsc.Csit from New Summit College,
                            Shantinagar, Kathmandu. Passed with first division
                            on year 2077 BS.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="cvcard">
                      <div className="cvcard-container row">
                        <div className="cv-details col-8">
                          <div className="cv-details-container">
                            <Link
                              href="#"
                              target="_blank"
                              className="cv-company"
                            >
                              High School
                            </Link>
                            <p className="cv-dot">•</p>
                            <p className="cv-position">
                              Intermediate 10+2 Computer Science
                            </p>
                          </div>

                          <p className="cv-timeline">New Summit College</p>
                        </div>

                        <div className="cv-details col-4">
                          <div className="cv-details-container">
                            <p className="cv-location">2013 - 2015</p>
                          </div>
                        </div>
                      </div>

                      <div className="cv-description">
                        <ul>
                          <li>
                            Completed +2 Science from New Summit College, Old
                            Baneshwor, Kathmandu. Passed with first division on
                            year 2072 BS
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="cvcard">
                      <div className="cvcard-container row">
                        <div className="cv-details col-8">
                          <div className="cv-details-container">
                            <Link
                              href="#"
                              target="_blank"
                              className="cv-company"
                            >
                              School
                            </Link>
                            <p className="cv-dot">•</p>
                            <p className="cv-position">
                              School Leaving Certificate
                            </p>
                          </div>

                          <p className="cv-timeline">
                            Gauri Shankar English Boarding School
                          </p>
                        </div>

                        <div className="cv-details col-4">
                          <div className="cv-details-container">
                            <p className="cv-location">2002 - 2013</p>
                          </div>
                        </div>
                      </div>

                      <div className="cv-description">
                        <ul>
                          <li>
                            Completed SLC from Gauri Shankar English Boarding
                            School, Sandhikharka, Arghakhanchi. Passed with
                            first division on year 2069 BS.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="container mt-5 mb-5">
            <div className="row">
              <div className="col">
                <h4>Skill</h4>
                <ul className="cv-description">
                  <li>
                    Proficient in design tools such as Figma, Adobe Creative
                    Suite (Photoshop, Illustrator, InDesign), Sketch, InVision,
                    and Zeplin
                  </li>
                  <li>
                    Strong understanding of user-centered design principles and
                    methodologies
                  </li>
                  <li>
                    Experience creating wireframes, prototypes, design system
                    and high-fidelity mockups
                  </li>
                  <li>
                    Knowledge of front-end development technologies, including
                    HTML, CSS, and JavaScript
                  </li>
                  <li>
                    Ability to work collaboratively with cross-functional teams
                    and stakeholders
                  </li>
                  <li>
                    Excellent communication skills and ability to present and
                    explain design concepts to non-designers
                  </li>
                  <li>
                    Experience conducting user research and usability testing
                  </li>
                  <li>
                    Knowledge of accessibility guidelines and best practices
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div id="toolsUse" className="container mt-5 mb-5">
            <div className="row">
              <div className="col">
                <h4>Tools & Technologies</h4>
                <ul className="cv-description">
                  <p>Figma</p>
                  <p>UI Design</p>
                  <p>UX Design</p>
                  <p>Photoshop</p>
                  <p>Illustrator</p>
                  <p>Product Design</p>
                  <p>UX Research</p>
                  <p>Usability Testing</p>
                  <p>Mobile Design</p>
                  <p>Web Design</p>
                  <p>Illustrator</p>
                  <p>Adobe XD</p>
                  <p>HTML</p>
                  <p>CSS</p>
                  <p>Javascript</p>
                  <p>Wordpress</p>
                  <p>WebFlow</p>
                  <p>Framer</p>
                  <p>User Flows</p>
                  <p>User Personas</p>
                  <p>Sitemaps</p>
                  <p>Design Thinking</p>
                  <p>Agile</p>
                  <p>Prototyping</p>
                  <p>Design Systems</p>
                  <p>Wireframes</p>
                  <p>Information Architecture</p>
                  <p>Wireflows</p>
                  <p>A/B Testing</p>
                  <p>Google Material Design</p>
                  <p>Human Interface Guidelines</p>
                  <p>Sketching</p>
                </ul>
              </div>
            </div>
          </div>

          <div id="language" className="container mt-5 mb-5">
            <div className="row">
              <div className="col">
                <h4>Language</h4>
                <ul className="cv-description">
                  <li>
                    Nepali <b>[ Native ]</b>
                  </li>
                  <li>
                    English <b>[ Fluent ]</b>
                  </li>
                  <li>
                    Hindi <b>[ Fluent ]</b>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div id="contact" className=" container mt-5 mb-5">
            <div className="row">
              <div className="col">
                <h4>Contact</h4>
                <ul className="cv-description">
                  <li>
                    Website:{" "}
                    <Link href="http://www.subarnabhandari.com">
                      subarnabhandari.com
                    </Link>
                  </li>
                  <li>
                    Email:{" "}
                    <Link href="mailto:helo@subarnabhandari.com">
                      helo@subarnabhandari.com
                    </Link>
                  </li>
                  <li>
                    Portfolio:{" "}
                    <Link href="http://www.subarnabhandari.com/portfolio">
                      www.subarnabhandari.com
                    </Link>
                  </li>
                  <li>
                    Linkedin:{" "}
                    <Link href="https://www.linkedin.com/in/subarnabhd">
                      subarnabhd
                    </Link>
                  </li>
                  <li>
                    Instagram:{" "}
                    <Link href="https://www.instagram.com/subarnabhd">
                      subarnabhd
                    </Link>
                  </li>
                  <li>
                    Behance:{" "}
                    <Link href="https://www.behance.net/subarnabhd">
                      subarnabhd
                    </Link>
                  </li>
                  <li>
                    Facebook:{" "}
                    <Link href="https://www.facebook.com/subarnabhd">
                      subarnabhd
                    </Link>
                  </li>
                  <li>
                    Phone:{" "}
                    <Link href="tel:+9779844740360">+977-9844740360</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
}

export default cv