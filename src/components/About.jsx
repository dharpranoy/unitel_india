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
import "./About.css";


function About(props) {

    return (
        <>
            <Topbar />
            <SideBar />
            <div className="outerdesc">
                <div className="innerdesc">
                    <h1> Who Are We </h1>
                    <p>
                        For 24 years, Unitel has been dedicated to enhancing the lives of our customers since opening our first store in Asansol. We strive to be your ultimate choice for all things computer-related, boasting a tech-savvy team, a diverse product range, and an unwavering commitment to helping you make the best tech choices.

                        Starting as a single store, with your support, we've grown to over 10 locations across West Bengal. Unitel offers a flexible shopping experience, seamlessly merging online and physical stores to make technology easily and smartly accessible.

                        Our sales and service team ensures a personalized experience, understanding each customer's needs and budgets. From expert buying advice to personalized after-sales care, our commitment to lasting relationships is at the core of Unitel. Join us on this journey where your satisfaction is not just a goal but a commitment that lasts a lifetime.
                    </p>
                </div>
                <div id="growth">
                    <img src="growth_about.avif" />
                </div>
            </div>
            <div className="founder">
                <h1>A Message from the Founder</h1>
                <p>23 years ago, since the first Unitel store opened in Asansol, we’ve been dedicated to make a difference in the lives of our customers by helping them save more and live better. We strive to become the only choice for all your computer related needs and services, with our tech-savvy staff, wide range of products and the unwavering commitment to help customers make the best choice while buying their tech. This is what makes us the business we are today and shapes the company we will be tomorrow.

                    We started with a single store and today, with your support and continued belief in us we have more than 10 stores spread across West Bengal to fulfill our commitment of making technology easily & smartly accessible. Unitel offers a flexible shopping experience, seamlessly combining our online presence with our physical stores. Our sales & service team makes sure to understand every customer's personal needs and budgets while assisting them to make the best choice. From in-depth expert buying advice to personal after sales care, tailored to each customer. We believe once a relation is started, it never ends.

                    Thank you for choosing us!</p>
                <div id="whychoose">
                    <div><img src="c1.svg" /> <h5 style={{ paddingTop: '1.8rem' }}>Global experience</h5></div>
                    <div><img src="c2.svg" /><h5 >Quality for value</h5></div>
                    <div><img src="c3.svg" /><h5 style={{ paddingTop: '1.8rem' }}>Favourable Terms</h5></div>
                    <div><img src="c4.svg" /><h5 style={{ paddingTop: '1.8rem' }}>High Standards</h5></div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem' }}><button style={{ borderRadius: '50%', backgroundColor: 'brown', border: 'none' }} type="button"><a href="/stores" >Contact Us</a></button></div>
            </div>

            <Footer />
        </>
    )
}

export default About;
