import React, { useState } from "react";
import 'font-awesome/css/font-awesome.min.css';
import Topbar from "./Topbar";
import Featured from "./Featured.jsx";
import SideBar from "./SideBar";
import Footer from "./Footer";
import './StoreLocator.css';
function StoreLocator() {
  const [activeButton, setActiveButton] = useState(1);
  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };
  return (
    <>
      <Topbar />
      <SideBar />
      <div className="store-outer">
        <div id="officelist">
          <Featured text="Store: Main Office" />
          <div className="container">
            <div className="floating-stack">
              <dl>
                <dt>A</dt>
                <dd onClick={() => handleButtonClick(1)} style={{ fontWeight: 'bold', background: '#263238', fontSize: '1.3rem', cursor: 'pointer' }}>Asansol, Burnpur</dd>
                <dd>HP World / Acer Mall / Asus Exclusive Store / Tally </dd>
                <dd>1st Floor/ 2nd Floor, Arghya Commercial Complex, WB, 713304, Phone: +91 9832163213</dd>

                <dt>B</dt>
                <dd onClick={() => handleButtonClick(2)} style={{ fontWeight: 'bold', background: '#263238', fontSize: '1.3rem', cursor: 'pointer' }}>Benachity, Durgapur</dd>
                <dd>HP World</dd>
                <dd>Ground Floor, Durga Market, Girja More, GT Road               West Bengal, 713301, Phone: +91 8657568691</dd>

                <dt>C</dt>
                <dd onClick={() => handleButtonClick(3)} style={{ fontWeight: 'bold', background: '#263238', fontSize: '1.3rem', cursor: 'pointer' }}>City Centre, Durgapur</dd>
                <dd>Asus Mall - Exclusive Store</dd>
                <dd>Najrul Sarani, Beside FITJEE Building, City Centre, Durgapur, WB 713216, Phone: +91 8016095965</dd>

                <dt>D</dt>
                <dd onClick={() => handleButtonClick(4)} style={{ fontWeight: 'bold', background: '#263238', fontSize: '1.3rem', cursor: 'pointer' }}>Durga Market</dd>

                <dd>HP World</dd>
                <dd>Ground Floor, Durga Market, Girja More, GT Road, WB 713301, Phone: +91 8657568691</dd>
                <dt>R</dt>
                <dd onClick={() => handleButtonClick(5)} style={{ fontWeight: 'bold', background: '#263238', fontSize: '1.3rem', cursor: 'pointer' }}>Raniganj</dd>
                <dd>Building, BN Agarwal Memorial Hospital, NSB Rd, Raniganj, West Bengal 713347</dd>
              </dl>
            </div>
          </div>
        </div>

        <div id="map">
          {activeButton === 1 && <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d935335.4248839569!2d86.94443841591615!3d23.68832828904651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f71f13dba051bd%3A0x749527c5b86c8987!2sAsus%20Exclusive%20Showroom%20-%20UNITEL!5e0!3m2!1sen!2sin!4v1700117233781!5m2!1sen!2sin&amp;output=embed&amp;ll=23.68832828904651,86.94443841591615&amp;z=16&amp;t=k" width="400" height="550" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>}
          {activeButton === 3 && <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.82388299106!2d87.3025647!3d23.538836000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f771d95f4b40f1%3A0x9995f28121729740!2sAsus%20Exclusive%20Store%20-%20Unitel!5e0!3m2!1sen!2sin!4v1704464739798!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>}

          {activeButton === 2 && <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.339090553437!2d87.27421199999999!3d23.556262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f76d8f2096b277%3A0xe0b33e304becf0fa!2sHP%20World!5e0!3m2!1sen!2sin!4v1704464299220!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>}
          {activeButton === 4 && <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.6492162944032!2d86.9665527!3d23.688499399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f71f20db549585%3A0xf9c4897593e67cbb!2sHP%20World!5e0!3m2!1sen!2sin!4v1704464845991!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>}
          {activeButton === 5 && <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.581782516045!2d87.1139857!3d23.619327300000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f71104d8c3076d%3A0x3b48d3d3bc9756a4!2sHP%20World!5e0!3m2!1sen!2sin!4v1704464954261!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>}
        </div>
      </div>
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


export default StoreLocator;
