import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import 'font-awesome/css/font-awesome.min.css';
import Featured from './Featured.jsx';
import Topbar from "./Topbar.jsx";
import SideBar from "./SideBar.jsx";
import Footer from "./Footer.jsx";
import './Carousel.css';
import Card from "./Card.jsx";
import './Shop.css';
function Shop() {


  const images = [
    'top_shop.jpg',
    'ban1.png',
    'ban2.png',
    'ban3.png',
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
    withbars: false,
  };


  const [isMobile, setIsMobile] = useState(false);
  const [menuItem, setMenuItem] = useState('Laptop');

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


  const [showGif, setShowGif] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowGif(false);
    }, 1000); // Hides the GIF after 3 seconds (3000 milliseconds)

    return () => clearTimeout(timeout);
  }, []);


  const hideGifAfterDelay = () => {
    setTimeout(() => {
      setShowGif(false);
    }, 500); // Hides the GIF after 3 seconds (3000 milliseconds)
  };


  return (
    <>
      <Topbar />
      <SideBar />

      {/* <div className="banner-outer" style={{ paddingTop: '1rem' }} >
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
          <img style={{ height: '60vh', objectFit: 'cover', cursor: 'pointer' }} src="sideoffer2.jpeg" />
        </div> : <></>}
      </div>*/}

      <div>
        <nav className="slidemenu">

          <input type="radio" name="slideItem" id="slide-item-1" className="slide-toggle" />
          <label onClick={() => { setMenuItem('Laptop'); setShowGif(true); hideGifAfterDelay() }} for="slide-item-1"><p style={{ fontSize: '2rem' }} className="icon">💻</p><span>Laptops</span></label>

          <input type="radio" name="slideItem" id="slide-item-2" className="slide-toggle" />
          <label onClick={() => { setMenuItem('Printer'); setShowGif(true); hideGifAfterDelay() }} for="slide-item-2"><p style={{ fontSize: '2rem' }} className="icon">🖨️</p><span>Scanners & Printers</span></label>

          <input type="radio" name="slideItem" id="slide-item-3" className="slide-toggle" />
          <label onClick={() => { setMenuItem('Accessories'); setShowGif(true); hideGifAfterDelay() }} for="slide-item-3"><p style={{ fontSize: '2rem' }} className="icon">🔌</p><span>Accessories</span></label>

          <input type="radio" name="slideItem" id="slide-item-4" className="slide-toggle" />
          <label onClick={() => { setMenuItem('All'); setShowGif(true); hideGifAfterDelay() }} for="slide-item-4"><p style={{ fontSize: '2rem' }} className="icon">🏢</p><span>Commercial</span></label>

          <div className="clear"></div>

          <div className="slider">
            <div className="bar"></div>
          </div>

        </nav>
      </div>

      <Featured text="laptops at best Deals" />
      <div style={{ minHeight: '32rem' }}>

        {showGif &&
          <div style={{ display: 'flex', justifyContent: 'center' }} ><img style={{ alignContent: 'center' }} src={'loading.gif'} alt="Your GIF" />
          </div>
        }
        {!showGif && <Card bar={menuItem} />}
      </div>
      <Footer />
    </>
  )
}


export default Shop;
