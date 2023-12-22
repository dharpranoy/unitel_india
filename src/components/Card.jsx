import React, { useState, useEffect } from "react";
import 'font-awesome/css/font-awesome.min.css';
import './Card.css';
import Papa from 'papaparse';
function Card(props) {

  const [csvData, setCsvData] = useState([]);
  const [randomRows, setRandomRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('Book1.csv'); // Replace with your file path
        const text = await response.text();
        const parsedData = Papa.parse(text, {
          header: true, // Assumes the first row is the header row
          dynamicTyping: true, // Auto-detects the data types
          skipEmptyLines: true,
        });
        setCsvData(parsedData.data);
      } catch (error) {
        console.error('Error fetching and parsing data:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <>
      <div className="card-outer">


        {csvData.map((row, rowIndex) => (
          row['Target'] == props.bar || props.bar == "All" || props.bar == row.Category ? (
            <div className="card" data-label={`${row.Discount}% Off`} key={rowIndex}>

              <div className="card-container" style={{ padding: '1rem' }}>
                <img src={row.Image_path} alt="Avatar" />
                <div className="container1">
                  <h6>{row.Title}</h6>
                  <p style={{ fontFamily: 'sans-serif', fontSize: 'Medium', textAlign: 'justify' }}> ({row.Extends})</p>
                  <p ><span style={{ color: 'yellow' }}>Rs. {row.Price} &nbsp; &nbsp;</span><span style={{ color: 'grey' }}><strike>Rs. {row.Compare_to}</strike></span></p>
                </div>
              </div>
            </div>) : <>

          </>

        ))}



      </div>

    </>
  )
}


export default Card;
