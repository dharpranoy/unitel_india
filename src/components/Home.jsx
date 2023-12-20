import React from "react";
import { useState, useEffect } from "react";
import 'font-awesome/css/font-awesome.min.css';
import SideBar from "./SideBar.jsx";
import Topbar from "./Topbar.jsx";
import Carousel from "./Carousel.jsx";
import './Home.css';
import Featured from './Featured.jsx';
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";
function Home() {
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

  const componentStyle = {
    paddingLeft: isMobile ? '0.5rem' : '6.7rem',
    paddingTop: isMobile ? '0' : '2rem',
  };


  return (
    <>
      <SideBar />
      <Topbar />
      <Carousel />
      {/* <div style={componentStyle}>
        <img src="midoffer.webp" style={{ width: '97.8%' }} />
      </div> */}
      <Featured  text="Best selling laptops" />
      <div>
        <Card bar={'F2'}/>
      </div>
      <Featured text="Diwali Offers on Student laptops" /><div>
        <Card bar={'F1'}/>
      </div>
      <Footer />
    </>
  )
}


export default Home;
