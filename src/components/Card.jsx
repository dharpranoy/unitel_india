import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import './Card.css';
function Card() {
  return (
    <>

      <div className='container-fluid'>
        <div id="product-class" className="card mx-auto col-md-3 col-10 mt-5">
          <img className='mx-auto img-thumbnail'
            src="img"
            width="auto" height="auto" />
          <div className="card-body text-center mx-auto">
            <div className='cvp' id="uid">
              <h5 className="card-title font-weight-bold">name</h5>
              <p className="card-text">price</p>
              <p className="btn details px-auto">description</p><br />
              <a id="add-kart" className="btn cart px-auto">ADD TO CART</a>
              <a href="" id="make-order" className="btn cart px-auto">MAKE ORDER</a>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}


export default Card;
