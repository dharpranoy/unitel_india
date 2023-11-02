import React from "react";
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

  const imgStyle = {
    width: '100%',
    height: '90vh',
    objectFit: 'cover'
  };
  return (
    <>
      <div className="banner-outer" >
        <div style={{ paddingTop: '1rem', marginLeft: '5.7rem', width: '65vw' }}>
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <img src={image} style={imgStyle} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </Slider>
        </div>
        <div style={{ paddingTop: '1rem' }}>
          <img style={{ height: '90vh', objectFit: 'cover' }} src="sideoffer.webp" />
        </div>

      </div>
    </>
  )
}


export default Carousel;
