import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import './SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';



function SearchBar() {
  return (
    <>
      <div className="search-wrapper active">
        <div id="iconf" style={{ padding: '0.5rem' }}>
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <div style={{ backgroundColor: ' #dddddd ' }} className="input-holder">
          <input type="text" style={{ backgroundColor: '#dddddd' }} className="search-input" placeholder="Type to search" />
        </div>
      </div>
    </>
  )
}


export default SearchBar;
