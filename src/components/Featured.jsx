import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import './Featured.css';
function Featured(props) {
  return (
    <>
      <div className="seven">
        <h1>{props.text}</h1>
      </div>
    </>
  )
}


export default Featured;
