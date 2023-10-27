import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import "./Topbar.css";
import SearchBar from "./SearchBar";
function Topbar() {
  return (
    <>
      <div className="topbar" >
        <div>
          <SearchBar />
        </div>

        <div>
          <nav role="navigation" className="primary-navigation">
            <ul>
              <li><a href="#">Contact us</a>
              </li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Store locator</a></li>
              <li><a href="#">Mouse & Keyboard</a></li>
              <li><a href="#">Build Custom PC</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}


export default Topbar;
