import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import SideBar from "./SideBar.jsx";
import Topbar from "./Topbar.jsx";
import Carousel from "./Carousel.jsx";
function Home() {
  return (
    <>
      <SideBar />
      <Topbar />
      <Carousel />
    </>
  )
}


export default Home;
