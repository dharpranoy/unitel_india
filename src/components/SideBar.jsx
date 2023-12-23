import React, { useState, useEffect } from "react";
import 'font-awesome/css/font-awesome.min.css';
import './SideBar.css';


function SideBar() {

  const [isMobile, setIsMobile] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };
    const handleScroll = () => {
      const offset = window.scrollY;

      if (offset > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    handleResize(); // Initial check

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [isChecked, setIsChecked] = useState(false);

  const handleToggleChange = () => {
    setIsChecked(!isChecked); // Toggle the state
  };


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

            <a className="navbar-item-inner flexbox-left" style={{ height: '3.7rem' }} href="/productDetails">
              <img src="search.png" height={40} width={40} style={{ margin: '0.5rem' }} />

              <div className="navbar-item-inner-icon-wrapper flexbox">
                <ion-icon name="search-outline"></ion-icon>
              </div>
              <span className="link-text">Search</span>
            </a>
          </li>
          <li className="navbar-item flexbox-left">
            <a className="navbar-item-inner flexbox-left" style={{ height: '3.7rem' }} href="/">

              <img src="home.png" height={42} width={42} style={{ margin: '0.5rem' }} />
              <div className="navbar-item-inner-icon-wrapper flexbox">
                <ion-icon name="home-outline"></ion-icon>
              </div>
              <span className="link-text">Home</span>
            </a>
          </li>
          <li className="navbar-item flexbox-left">
            <a className="navbar-item-inner flexbox-left" style={{ height: '3.7rem' }} href="/shopall">

              <img src="shopping-bag.png" height={42} width={42} style={{ margin: '0.5rem' }} />
              <div className="navbar-item-inner-icon-wrapper flexbox">
                <ion-icon name="folder-open-outline"></ion-icon>
              </div>
              <span className="link-text">Products</span>
            </a>
          </li>
          <li className="navbar-item flexbox-left">
            <a className="navbar-item-inner flexbox-left" href="/gaming" style={{ height: '3.7rem' }}>

              <img src="gamepad.png" height={44} width={44} style={{ margin: '0.5rem' }} />
              <div className="navbar-item-inner-icon-wrapper flexbox">
                <ion-icon name="pie-chart-outline"></ion-icon>
              </div>
              <span className="link-text">Gaming</span>
            </a>
          </li>
          <li className="navbar-item flexbox-left">
            <a className="navbar-item-inner flexbox-left" style={{ height: '3.7rem' }} href="/support">

              <img src="support.png" height={42} width={42} style={{ margin: '0.5rem' }} />
              <div className="navbar-item-inner-icon-wrapper flexbox">
                <ion-icon name="chatbubbles-outline"></ion-icon>
              </div>
              <span className="link-text">Support</span>
            </a>
          </li>
        </ul>
      </nav> : <>




        <div className="hamburger-menu">
          <input id="menu__toggle" type="checkbox" checked={isChecked} onChange={handleToggleChange} />
          <label className="menu__btn" for="menu__toggle" style={{ position: isChecked ? 'fixed' : 'absolute' }}>
            <span></span>
          </label>





          <ul className="menu__box mobilebox">


            <li className="navbar-logo flexbox-left">
              <a className="navbar-item-inner flexbox">
                <img src="logo.png" height={52} width={52} style={{ margin: '1rem' }} />
              </a>

              <h3 style={{ width: '13rem' }}>Unitel India</h3>
            </li>
            <li><a style={{ color: 'wheat' }} className="menu__item" href="/">Home</a></li>
            <li><a style={{ color: 'wheat' }} className="menu__item" href="/about">About</a></li>
            <li><a style={{ color: 'wheat' }} className="menu__item" href="/shopall">Products</a></li>
            {/* <li><a style={{ color: 'wheat' }} className="menu__item" href="/contact">Contact</a></li> */}
            <li><a style={{ color: 'wheat' }} className="menu__item" href="/gaming">Gaming</a></li>
            <li><a style={{ color: 'wheat' }} className="menu__item" href="/stores">Contact & Stores Locator</a></li>
            <li><a style={{ color: 'wheat' }} className="menu__item" href="/support">Support</a></li>



          </ul>
        </div>




      </>
      }
    </>
  )

}


export default SideBar;
