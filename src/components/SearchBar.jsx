import React, { useEffect, useState } from "react";
import 'font-awesome/css/font-awesome.min.css';
import './SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Papa from 'papaparse';


function SearchBar() {
  const [searchText, setSearchText] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const navigate = useNavigate();

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
        const result = parsedData.data.filter(row => {
          // Convert both title and search text to lowercase and split into words
          const titleWords = row.Title.toLowerCase().split(' ');
          const typeWords = row.Category.toLowerCase().split(' ');
          const searchWords = searchText.toLowerCase().split(' ');
          return (
            searchWords.some(word => titleWords.includes(word)) ||
            searchWords.some(word => typeWords.includes(word))
          );
          // Check if there's any intersection between searchWords and titleWords
        });
        setSearchResult(result);
        console.log(result)

        navigate('/productDetails', { state: { searchResult: result } });


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
