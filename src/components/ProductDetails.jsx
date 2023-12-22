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
import { useLocation } from 'react-router-dom';


function ProductDetails(props) {
    const location = useLocation();

    const noStatesAssociated = !location.state || Object.keys(location.state).length === 0;
    
   
    return (
        <>
            <Topbar />
            <SideBar />
            <div>
                
            </div>
            <Footer />
        </>
    )
}

export default ProductDetails;