import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import SideBar from "./SideBar.jsx";
import Topbar from "./Topbar.jsx";
import Carousel from "./Carousel.jsx";
import './Home.css';
function Home() {
  return (
    <>
      <SideBar />
      <Topbar />
      <Carousel />
      <div >
      </div>
    </>
  )
}


export default Home;
