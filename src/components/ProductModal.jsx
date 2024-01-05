import React from 'react';
import { Modal, Button } from 'react-bootstrap'; // Import necessary components from react-bootstrap
import './Card.css';

function ProductModal({ show, onHide, row }) {
  return (

    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{row.Title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="card-container">
          <img style={{ height: '300px', width: '300px' }} src={row.Image_path} alt="Avatar" />
          <div className="container1">
            <h6>{row.Title}</h6>
            <p style={{ fontFamily: 'sans-serif', fontSize: 'Medium', textAlign: 'justify' }}> ({row.Extends})</p>
            <p>
              <span style={{ color: 'yellow' }}>Rs. {row.Price}&nbsp;&nbsp;</span>
              <span style={{ color: 'grey' }}>
                <strike>Rs. {row.Compare_to}</strike>
              </span>
            </p>
          </div>
        </div>
      </Modal.Body>
      {/* You can add Footer or other elements as needed */}
    </Modal>
  );
}

export default ProductModal;
