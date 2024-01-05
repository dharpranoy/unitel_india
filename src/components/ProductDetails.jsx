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
    const { searchResult } = location.state || { searchResult: [] };
    const [showGif, setShowGif] = useState(true);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowGif(false);
        }, 1000); // Hides the GIF after 3 seconds (3000 milliseconds)

        return () => clearTimeout(timeout);
    }, []);
    return (
        <>
            <Topbar />
            <SideBar />
            <div>
                {showGif &&
                    <div style={{ display: 'flex', justifyContent: 'center' }} ><img style={{ alignContent: 'center' }} src={'loading.gif'} alt="Your GIF" />
                    </div>
                }
                {!showGif && <div className="card-outer">


                    {searchResult.map((row, rowIndex) => (
                        (
                            <div className="card" data-label={`${row.Discount}% Off`} key={rowIndex}>

                                <div className="card-container" style={{ padding: '1rem' }}>
                                    <img src={row.Image_path} alt="Avatar" />
                                    <div className="container1">
                                        <h6>{row.Title}</h6>
                                        <p style={{ fontFamily: 'sans-serif', fontSize: 'Medium', textAlign: 'justify' }}> ({row.Extends})</p>
                                        <p ><span style={{ color: 'yellow' }}>Rs. {row.Price} &nbsp; &nbsp;</span><span style={{ color: 'grey' }}><strike>Rs. {row.Compare_to}</strike></span></p>
                                    </div>
                                </div>
                            </div>)



                    ))}
                    {Object.keys(searchResult).length <= 0 ? (
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center', // Horizontally center
                                alignItems: 'center', // Vertically center
                                paddingLeft: '26%'
                            }}
                        >
                            <img height='300' width='500' src="no-product.png" />
                        </div>
                    ) : <></>}



                </div>}

            </div>
            <Footer />
        </>
    )
}

export default ProductDetails;
