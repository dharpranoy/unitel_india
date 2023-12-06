import React, { useState, useEffect } from "react";
import 'font-awesome/css/font-awesome.min.css';
import "./Topbar.css";
import SearchBar from "./SearchBar";
function Topbar() {

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

      <div className="topbar" >
        <div>
          <SearchBar />
        </div>

        {!isMobile ?
          <div>
            <nav role="navigation" className="primary-navigation">
              <ul>
                
                <li><a href="#">About us</a></li>
                <li><a href="/stores">Contact & Store locator</a></li>
                <li><a href="#">Accessories</a></li>
                
              </ul>
            </nav>
          </div> : <></>}
      </div>

    </>
  )
}


export default Topbar;
