import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import './Footer.css';
function Footer() {
  return (
    <>
      <div className="footer-clean">
        <footer>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-sm-4 col-md-3 item">
                <h3>Services</h3>
                <ul>
                  <li><a href="/shopall">Laptops</a></li>

                  <li><a href="/shopall">All-In-Ones</a></li>
                  <li><a href="/shopall">Printers</a></li>
                  <li><a href="/shopall">Accessories</a></li>

                </ul>
              </div>
              <div className="col-sm-4 col-md-3 item">
                <h3>About</h3>
                <ul>
                  <li><a href="/about">Company</a></li>
                  <li><a href="/about">Founder</a></li>
                  <li><a href="/about">Legacy</a></li>
                </ul>
              </div>
              <div className="col-sm-4 col-md-3 item">
                <h3>Contact Us</h3>
                <ul>
                  <li><a href="#">contact@unitelindia.com</a></li>
                  <li><a href="#">+91 98321 63213</a></li>
                  <li><a href="#">+91 99031 49704</a></li>
                  <li><a href="#"><b>Office Address</b></a></li>
                  <li><a href="#">Unitel emall, Arghya Commercial Plaza, Burnpur Road, Asansol - 713301</a></li>
                </ul>
              </div>
              <div className="col-lg-3 item social"><a href="https://www.facebook.com/unitelindia?mibextid=vk8aRt"><i className="icon ion-social-facebook"></i></a><a href="https://www.instagram.com/unitelindia?igsh=MTIwOHY0cHdqYWdtYw=="><i className="icon ion-social-instagram"></i></a>
                <p className="copyright">Unitel India © 2023</p>
                <h3>Designed by <a href="https://smalltowntalks.com">SmallTownTalks</a></h3>
              </div>

            </div>
          </div>
        </footer>
      </div>
    </>
  )
}


export default Footer;
