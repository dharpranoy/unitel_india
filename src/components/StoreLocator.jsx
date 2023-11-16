import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import Topbar from "./Topbar";
import Featured from "./Featured.jsx";
import SideBar from "./SideBar";
import Footer from "./Footer";
import './StoreLocator.css';
function StoreLocator() {
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
                <dd>Asansol, Burnpur</dd>
                <dd>HP World / Acer Mall / Asus Exclusive Store / Tally </dd>

                <dt>B</dt>
                <dd>Benin</dd>
                <dd>Botswana</dd>
                <dd>Burkina Faso</dd>
                <dd>Burundi</dd>

                <dt>C</dt>
                <dd>Cabo Verde</dd>
                <dd>Cameroon</dd>
                <dd>Central African Republic</dd>
                <dd>Chad</dd>
                <dd>Comoros</dd>
                <dd>Congo, Democratic Republic of the</dd>
                <dd>Congo, Republic of the</dd>
                <dd>Cote d'Ivoire</dd>

                <dt>D</dt>
                <dd>Djibouti</dd>

                <dt>E</dt>
                <dd>Egypt</dd>
                <dd>Equatorial Guinea</dd>
                <dd>Eritrea</dd>
                <dd>Eswatini (formerly Swaziland)</dd>
                <dd>Ethiopia</dd>
              </dl>
            </div>
          </div>
        </div>

        <div id="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d935335.4248839569!2d86.94443841591615!3d23.68832828904651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f71f13dba051bd%3A0x749527c5b86c8987!2sAsus%20Exclusive%20Showroom%20-%20UNITEL!5e0!3m2!1sen!2sin!4v1700117233781!5m2!1sen!2sin&amp;output=embed&amp;ll=23.68832828904651,86.94443841591615&amp;z=16&amp;t=k" width="400" height="550" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <Footer />
    </>
  )
}


export default StoreLocator;
