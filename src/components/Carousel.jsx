import React, { useState, useEffect } from "react";
import 'font-awesome/css/font-awesome.min.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';

function Carousel() {

  const images = [
    'ban1.webp',
    'ban2.webp',
    'ban3.webp',
    'ban4.jpg'
  ];


  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    autoplay: true,
  };


  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };

    handleResize(); // Initial check

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);




  return (
    <>
      <div className="banner-outer" >
        <div className="banner-inner" >
          <Slider {...settings}>
            {images.map((image, index) => (
              <div id="slide" key={index}>
                <img className="slider-img" src={image} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </Slider>
        </div>
        {!isMobile ? <div style={{ paddingTop: '1rem' }}>
          <img style={{ height: '90vh', objectFit: 'cover' }} src="sideoffer.webp" />
        </div> : <></>}

      </div>
    </>
  )
}


export default Carousel;
