import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import 'font-awesome/css/font-awesome.min.css';
import Featured from './Featured.jsx';
import Topbar from "./Topbar.jsx";
import SideBar from "./SideBar.jsx";
import Footer from "./Footer.jsx";
import './Carousel.css';
import Card from "./Card.jsx";
function Shop() {


  const images = [
    'top_shop.jpg',
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
    withbars: false,
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
      <Topbar />
      <SideBar />

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




      <Featured text="laptops at best Deals" />
      <Card />
      <Footer />
    </>
  )
}


export default Shop;
