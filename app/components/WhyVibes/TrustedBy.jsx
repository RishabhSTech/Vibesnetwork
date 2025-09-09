import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TrustedBy() {
  const [logos, setLogos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch logos from API
  useEffect(() => {
    const fetchLogos = async () => {
      try {
        const response = await axios.get("https://admin.thevibes.academy/network_content_api.php");
        setLogos(response.data.clients || []);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching logos:', error);
        setLoading(false);
      }
    };
    fetchLogos();
  }, []);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 500,
    swipeToSlide: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  if (loading) {
    return (
      <div className='hidden sm:flex mt-32 mb-10 flex-col items-center md:flex-row max-w-[900px] w-[80%] m-auto justify-around'>
        <p className="text-[#554469] md:mr-[-10px] text-xl font-normal leading-normal">Trusted by</p>
        <div className="flex space-x-8 animate-pulse">
          <div className="w-[230px] h-[50px] bg-gray-200 rounded"></div>
          <div className="w-[230px] h-[50px] bg-gray-200 rounded"></div>
          <div className="w-[230px] h-[50px] bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-20 sm:mt-32 mb-10 sm:flex flex-col items-center md:flex-row max-w-[900px] w-[80%] m-auto justify-around">
      <p className="text-[#554469] text-center md:mr-[-10px] text-xl font-normal leading-normal mb-6 md:mb-0">Trusted by</p>
      <div className="w-full max-w-[700px]">
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index} className="px-2">
              <div className="relative h-[50px] m-auto">
                <Image
                  src={`https://admin.thevibes.academy/network-media/${logo.logo}`}
                  alt={logo.client_name || 'Trusted partner'}
                  layout="fill"
                  objectFit="contain"
                  className='transition-opacity duration-500'
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default TrustedBy;
