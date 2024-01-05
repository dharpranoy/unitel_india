import React from "react";
import { useState, useEffect } from "react";
import 'font-awesome/css/font-awesome.min.css';
import SideBar from "./SideBar.jsx";
import Topbar from "./Topbar.jsx";
import Carousel from "./Carousel.jsx";
import Featured from './Featured.jsx';
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";


function Support() {

    return (
        <>
            <Topbar />
            <SideBar />
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center', // Horizontally center
                    alignItems: 'center', // Vertically center
                }}
            >
                <img height='300' width='300' src="under.png" alt="Under Construction" />
            </div>

            <Footer />
        </>
    )
}

export default Support;
