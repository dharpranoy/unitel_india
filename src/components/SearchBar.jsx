import React, {useEffect, useState} from "react";
import 'font-awesome/css/font-awesome.min.css';
import './SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Navigate } from 'react-router-dom';
import Papa from 'papaparse';


function SearchBar() {
  const [searchText,setSearchText] = useState('');
  const [searchResult,setSearchResult] = useState(null);
  

  const handleSearch = () => {
   
    const fetchData = async () => {
      
      try {
        const response = await fetch('Book1.csv'); // Replace with your file path
        const text = await response.text();
        const parsedData = Papa.parse(text, {
          header: true, // Assumes the first row is the header row
          dynamicTyping: true, // Auto-detects the data types
          skipEmptyLines: true,
        });
        const result = parsedData.data.filter(row => row.Title.toLowerCase().includes(searchText.toLowerCase()));
        setSearchResult(result);
        console.log(result)
        
        return (<Navigate to="/productDetails" state={{ searchResult }} />);
        
      } catch (error) {
        alert('ERR');
        console.error('Error fetching and parsing data:', error);
      }
    };
    fetchData();
  };
  return (
    <>
      <div className="search-wrapper active">
        <div id="iconf" onClick={handleSearch}>
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <div style={{ backgroundColor: ' #dddddd ' }} className="input-holder">
          <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={{ backgroundColor: '#dddddd' }} autoCapitalize="none" className="search-input" placeholder="Type to search" />
        </div>
        
      </div>
    </>
  )
}


export default SearchBar;
