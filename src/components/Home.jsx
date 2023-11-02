import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import SideBar from "./SideBar.jsx";
import Topbar from "./Topbar.jsx";
import Carousel from "./Carousel.jsx";
import Card from './Card.jsx';
import './Home.css';
function Home() {
  return (
    <>
      <SideBar />
      <Topbar />
      <Carousel />
      <div style={{ paddingLeft: '6.7rem', paddingTop: '2rem' }}>
        <img src="midoffer.webp" style={{ width: '97.8%' }} />
      </div>
    </>
  )
}


export default Home;
