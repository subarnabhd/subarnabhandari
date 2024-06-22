"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Slider from 'react-slick';

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  speed: 5000,
  autoplaySpeed: 5000,
  cssEase: "linear",
  pauseOnHover: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 1540,
      settings: {
        slidesToShow: 5,
      },
    },
  ],
};
const ClientSlider = () => {

  const clients = [
    { link: 'https://www.goldenmudcreation.com/', imageSrc: '/client/goldenmudcreation.webp', alt: 'Goldenmud Creation' },
    { link: 'https://www.facebook.com/gwnofficial/', imageSrc: '/client/ghostwritingnepal.webp', alt: 'Ghost Writing Nepal' },
    { link: '#', imageSrc: '/client/moviemandala.webp', alt: 'Movie Mandala' },
    { link: 'https://designpac.net', imageSrc: '/client/designpac.webp', alt: 'Design Pac' },
    { link: 'https://qubex.com.np/', imageSrc: '/client/qubexedu.webp', alt: 'QubexEdu - Qbex' },
    { link: 'http://www.sallerikhabar.com/', imageSrc: '/client/sallerikhabar.webp', alt: 'Sallerikhabra' },
    { link: 'https://www.facebook.com/p/Speedy-Gateways-Travels-and-Tours-Pvt-Ltd-200057447669327/', imageSrc: '/client/speedygateways.webp', alt: 'Speedy Gateways' },
    { link: 'https://www.facebook.com/sulavsmsnepal/', imageSrc: '/client/sulavsms.webp', alt: 'Sulav SMS' },
    { link: '#', imageSrc: '/client/sumeshacollection.webp', alt: 'Sumesha Collection' },
    { link: 'https://www.facebook.com/techtrixnepal/', imageSrc: '/client/techtrix.webp', alt: 'Tech Trix Nepal' },
    { link: 'https://facebook.com/thechoicecafe', imageSrc: '/client/thechoicecafe.webp', alt: 'The Choice Cafe' },
    { link: 'https://ttworld.com.np/', imageSrc: '/client/ttworldeducationalconsultancy.webp', alt: 'TTworld Educational Consultancy' },
    { link: 'https://www.ovenfreshnepal.com/', imageSrc: '/client/ovenfresh.webp', alt: 'Oven Fresh Bakery' },
    { link: 'https://sethreadingsalon.com/', imageSrc: '/client/stylisheyebrowsthreading.webp', alt: 'Stylish Eyebrows Threading' },
    { link: '#', imageSrc: '/client/baidikkendra.webp', alt: 'Baidik Kendra' },
    { link: 'https://www.risenepalrise.com/', imageSrc: '/client/risenepalrise.webp', alt: 'Rise Nepal Rise' },
    { link: 'https://osrdigital.com.np/', imageSrc: '/client/osrdigital.webp', alt: 'OSR Digital' },
    { link: 'link_to_slide_21', imageSrc: '/client/nepalpizzaschool.webp', alt: 'Nepal Pizza School' },
    { link: 'https://palikapatra.com/', imageSrc: '/client/palikapatra.webp', alt: 'Palika Patra' },
    { link: 'https://gandakiunesco.org/', imageSrc: '/client/gandakiunescoclub.webp', alt: 'Gandaki Unesco Club' },
    { link: 'http://www.fernwehedu.com/', imageSrc: '/client/fernwehiInternational.webp', alt: 'Fernwehi International' },
    { link: '#', imageSrc: '/client/mayadevitv.webp', alt: 'Mayadevi TV' },
    { link: '#', imageSrc: '/client/ucando.webp', alt: 'U Can Do' },
    { link: 'https://www.mad-honey.store', imageSrc: '/client/madhoneystore.webp', alt: 'Mad Honey Store' },
    { link: 'https://adventureseriesnepal.com/', imageSrc: '/client/adventureseriesnepal.webp', alt: 'Adventure Series Nepal' },
    { link: 'https://flavorbakerynepal.com/', imageSrc: '/client/flavorbakery.webp', alt: 'Flavor Bakery Nepal' },
    { link: '#', imageSrc: '/client/ghaila.webp', alt: 'Ghaila Oil' },
    { link: '#', imageSrc: '/client/hulasfoods.webp', alt: 'Hulas Foods' },
    { link: '#', imageSrc: '/client/itharimedical.webp', alt: 'Ithari Medical' },
    { link: 'https://kaveriinn.com/', imageSrc: '/client/kaverinn.webp', alt: 'Kaveri INN' },
    { link: 'https://kantipurinfotech.com/', imageSrc: '/client/kit.webp', alt: 'Kantipur Infotech-KIT' },
    { link: '#', imageSrc: '/client/mobilelife.webp', alt: 'Mobile Life' },
    { link: 'https://www.youtube.com/@OSRReality', imageSrc: '/client/osrreality.webp', alt: 'OSR Reality' },
    { link: 'https://rrgcafrica.com/', imageSrc: '/client/rgg.webp', alt: 'Radaur Realty Group & Consultants' },
    { link: 'https://sajhainvestment.com/', imageSrc: '/client/Sajha.webp', alt: 'Sajha Investment' },
    { link: '#', imageSrc: '/client/durapave.webp', alt: 'Durapave' },
    { link: '#', imageSrc: '/client/shivamcement.webp', alt: 'Shivam Cement' },
    { link: '#', imageSrc: '/client/slashplus.webp', alt: 'Slash Plus' },
    { link: '#', imageSrc: '/client/swasthanari.webp', alt: 'Swastha Nari' },
    { link: 'https://techkagaj.com/', imageSrc: '/client/techkagaj.webp', alt: 'Tech Kagaj' },
    { link: 'https://trackshieldsgps.com/', imageSrc: '/client/trackshield.webp', alt: 'Track Shield' }
  ];

  return (
    <div className="py-20">
      <div className="container m-auto block md:flex justify-center items-center">
        <div>
          <h2 className="  text-black text-left md:text-center font-bold text-lg w-max">
            Trusted by:
          </h2>
        </div>

        <div className="relative w-11/12">
          <div className="client-slide flex  overflow-x-hidden">
            <Slider {...settings}>
              {clients.map((client, index) => (
                <Link key={index} href={client.link} target="_blank">
                  <Image
                    src={client.imageSrc}
                    alt={client.alt}
                    width={400}
                    height={400}
                  />
                </Link>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSlider;
