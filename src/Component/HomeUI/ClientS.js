import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ClientSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-200 py-4 max-w-screen-xl mx-auto overflow-hidden">
      <Slider {...settings}>
        <div className="p-4">
          <img src="assets/homepage/MaxLifeInsurance.jpg" alt="Client Logo" className="mx-auto" />
        </div>
        <div className="p-4">
          <img src="assets/homepage/tata-life-insurance-logo-web.webp" alt="Client Logo" className="mx-auto" />
        </div>
        <div className="p-4">
          <img src="assets/homepage/hdfc.png" alt="Client Logo" className="mx-auto" />
        </div>
        <div className="p-4">
          <img src="assets/homepage/sbi.png" alt="Client Logo" className="mx-auto" />
        </div>
        <div className="p-4">
          <img src="assets/homepage/icic.jpg" alt="Client Logo" className="mx-auto" />
        </div>
        <div className="p-4">
          <img src="assets/homepage/hdfc-home-loan.png" alt="Client Logo" className="mx-auto" />
        </div>
        {/* Add more client logos here */}
      </Slider>
    </div>
  );
};

export default ClientSlider;
