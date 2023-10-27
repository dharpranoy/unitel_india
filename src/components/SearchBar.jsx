import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import './SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';



function SearchBar() {
  return (
    <>
      <div className="search-wrapper active">
        <div style={{ padding: '0.5rem' }}>
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <div className="input-holder">
          <input type="text" className="search-input" placeholder="Type to search" />

        </div>
      </div>
    </>
  )
}


export default SearchBar;
