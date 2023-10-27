import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import './SideBar.css';


function SideBar() {
  return (
    <nav id="navbar">
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
    </nav>

  )
}


export default SideBar;
