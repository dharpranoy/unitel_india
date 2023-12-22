import React from "react";
import { useState, useEffect } from "react";
import 'font-awesome/css/font-awesome.min.css';
import './Contact.css';
import SideBar from "./SideBar";
import Topbar from "./Topbar";
import Footer from "./Footer";

function Contact() {
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
      <SideBar />
      <Topbar />
      <div id="container">
        <h1>&bull; Contact Us &bull;</h1>
        <div className="underline">
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem' }}>
          <div>
            <img src="logo.png" style={{ height: '100px' }} />
          </div>
        </div>
        <form action="#" method="post" id="contact_form">
          <div className="name">
            <label for="name"></label>
            <input type="text" placeholder="My name is" name="name" id="name_input" required />
          </div>
          <div className="email">
            <label for="email"></label>
            <input type="email" placeholder="My e-mail is" name="email" id="email_input" required />
          </div>
          <div className="telephone">
            <label for="name"></label>
            <input type="text" placeholder="My number is" name="telephone" id="telephone_input" required />
          </div>
          <div className="subject">
            <label for="subject"></label>
            <select placeholder="Subject line" name="subject" id="subject_input" required>
              <option disabled hidden selected>Subject line</option>
              <option>Enquiry of a product</option>
              <option>Order a Custom PC</option>
              <option>Prebooking a product</option>
            </select>
          </div>
          <div className="message">
            <label for="message"></label>
            <textarea name="message" placeholder="I'd like to chat about" id="message_input" cols="30" rows="5" required></textarea>
          </div>
          <div className="submit">
            <input type="submit" value="Send Message" id="form_button" />
          </div>
        </form>
      </div>
      <Footer />
    </>
  )
}


export default Contact;
