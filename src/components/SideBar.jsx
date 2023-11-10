import React, { useState, useEffect } from "react";
import 'font-awesome/css/font-awesome.min.css';
import './SideBar.css';


function SideBar() {

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
      {!isMobile ? <nav id="navbar">
        <ul className="navbar-items flexbox-col">
          <li className="navbar-logo flexbox-left">
            <a className="navbar-item-inner flexbox">
              <img src="logo.png" height={52} width={52} style={{ margin: '1rem' }} />
            </a>


            <span className="link-text" style={{ color: 'white', fontSize: '1.2rem' }}>Unitel India</span>
          </li>
          <li className="navbar-item flexbox-left">

            <a className="navbar-item-inner flexbox-left" style={{ height: '3.7rem' }}>
              <img src="search.png" height={42} width={42} style={{ margin: '0.5rem' }} />

              <div className="navbar-item-inner-icon-wrapper flexbox">
                <ion-icon name="search-outline"></ion-icon>
              </div>
              <span className="link-text">Search</span>
            </a>
          </li>
          <li className="navbar-item flexbox-left">
            <a className="navbar-item-inner flexbox-left" style={{ height: '3.7rem' }}>

              <img src="home.png" height={42} width={42} style={{ margin: '0.5rem' }} />
              <div className="navbar-item-inner-icon-wrapper flexbox">
                <ion-icon name="home-outline"></ion-icon>
              </div>
              <span className="link-text">Home</span>
            </a>
          </li>
          <li className="navbar-item flexbox-left">
            <a className="navbar-item-inner flexbox-left" style={{ height: '3.7rem' }}>

              <img src="shopping-bag.png" height={42} width={42} style={{ margin: '0.5rem' }} />
              <div className="navbar-item-inner-icon-wrapper flexbox">
                <ion-icon name="folder-open-outline"></ion-icon>
              </div>
              <span className="link-text">Shop</span>
            </a>
          </li>
          <li className="navbar-item flexbox-left">
            <a className="navbar-item-inner flexbox-left" href="/gaming" style={{ height: '3.7rem' }}>

              <img src="gamepad.png" height={42} width={42} style={{ margin: '0.5rem' }} />
              <div className="navbar-item-inner-icon-wrapper flexbox">
                <ion-icon name="pie-chart-outline"></ion-icon>
              </div>
              <span className="link-text">Gaming</span>
            </a>
          </li>
          <li className="navbar-item flexbox-left">
            <a className="navbar-item-inner flexbox-left" style={{ height: '3.7rem' }}>

              <img src="mechanism.png" height={42} width={42} style={{ margin: '0.5rem' }} />
              <div className="navbar-item-inner-icon-wrapper flexbox">
                <ion-icon name="chatbubbles-outline"></ion-icon>
              </div>
              <span className="link-text">Support</span>
            </a>
          </li>
        </ul>
      </nav> : <>




        <div className="hamburger-menu">
          <input id="menu__toggle" type="checkbox" />
          <label className="menu__btn" for="menu__toggle">
            <span></span>
          </label>





          <ul className="menu__box">


            <li className="navbar-logo flexbox-left">
              <a className="navbar-item-inner flexbox">
                <img src="logo.png" height={52} width={52} style={{ margin: '1rem' }} />
              </a>

              <h3 style={{ width: '3rem' }}>Unitel India</h3>
              <span className="link-text1" style={{ color: 'white', fontSize: '1.2rem' }}>Unitel India</span>
            </li>
            <li className="navbar-item flexbox-left">

              <a className="navbar-item-inner flexbox-left" style={{ height: '3.7rem' }}>
                <img src="search.png" height={42} width={42} style={{ margin: '0.5rem' }} />

                <div className="navbar-item-inner-icon-wrapper flexbox">
                  <ion-icon name="search-outline"></ion-icon>
                </div>
                <span className="link-text1">Search</span>
              </a>
            </li>
            <li className="navbar-item flexbox-left">
              <a className="navbar-item-inner flexbox-left" style={{ height: '3.7rem' }}>

                <img src="home.png" height={42} width={42} style={{ margin: '0.5rem' }} />
                <div className="navbar-item-inner-icon-wrapper flexbox">
                  <ion-icon name="home-outline"></ion-icon>
                </div>
                <span className="link-text1">Home</span>
              </a>
            </li>
            <li className="navbar-item flexbox-left">
              <a className="navbar-item-inner flexbox-left" style={{ height: '3.7rem' }}>

                <img src="shopping-bag.png" height={42} width={42} style={{ margin: '0.5rem' }} />
                <div className="navbar-item-inner-icon-wrapper flexbox">
                  <ion-icon name="folder-open-outline"></ion-icon>
                </div>
                <span className="link-text1">Shop</span>
              </a>
            </li>
            <li className="navbar-item flexbox-left">
              <a className="navbar-item-inner flexbox-left" href="/gaming" style={{ height: '3.7rem' }}>

                <img src="gamepad.png" height={42} width={42} style={{ margin: '0.5rem' }} />
                <div className="navbar-item-inner-icon-wrapper flexbox">
                  <ion-icon name="pie-chart-outline"></ion-icon>
                </div>
                <span className="link-text1">Gaming</span>
              </a>
            </li>
            <li className="navbar-item flexbox-left">
              <a className="navbar-item-inner flexbox-left" style={{ height: '3.7rem' }}>

                <img src="mechanism.png" height={42} width={42} style={{ margin: '0.5rem' }} />
                <div className="navbar-item-inner-icon-wrapper flexbox">
                  <ion-icon name="chatbubbles-outline"></ion-icon>
                </div>
                <span className="link-text1">Support</span>
              </a>
            </li>




          </ul>
        </div>




      </>
      }
    </>
  )

}


export default SideBar;
