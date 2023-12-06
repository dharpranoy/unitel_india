import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import './Card.css';
function Card() {
  return (
    <>
      <div className="card-outer">
        <div className="card" data-label="30% Off">
          <div className="card-container" style={{ padding: '1rem' }}>
            <img src="https://static-ecapac.acer.com/media/catalog/product/e/x/ex215-23_nx.eh3si.004_1.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=500&width=500&canvas=500:500" alt="Avatar" />
            <div className="container1">
              <h6>Acer Swift 5</h6>
              <p style={{ fontFamily: 'sans-serif', fontSize: 'Medium', textAlign: 'justify' }}> (8GB RAM, 512GB SSD, Vega 8 Graphics, DOS)</p>
              <p ><span style={{ color: 'yellow' }}>Rs 39,999 &nbsp; &nbsp;</span><span style={{ color: 'grey' }}><strike>Rs 60,000</strike></span></p>
            </div>
          </div>
        </div>
        <div className="card" data-label="No.1 Seller">
          <div className="card-container" style={{ padding: '1rem' }}>
            <img src="https://dlcdnwebimgs.asus.com/files/media/dfaf1afd-45ae-4a08-b806-249304c6d899/v1.4/features/images/large/1x/kv.jpg" alt="Avatar" />
            <div className="container1">
              <h6>Asus Flip Book</h6>
              <p style={{ fontFamily: 'sans-serif', fontSize: 'Medium', textAlign: 'justify' }}> (16GB RAM, 1TB SSD, Silver, Windows 11 Home)</p>
              <p  ><span style={{ color: 'yellow' }}>Rs 89,999 &nbsp; &nbsp;</span><span style={{ color: 'grey' }}><strike>Rs 99,000</strike></span></p>

            </div>
          </div>
        </div>
        <div className="card" data-label="15% Off" >
          <div className="card-container" style={{ padding: '1rem' }}>
            <img src="https://rukminim2.flixcart.com/image/416/416/xif0q/computer/f/u/o/-original-imagr5zzj68vamme.jpeg?q=70" alt="Avatar" />
            <div className="container1">
              <h6>ASUS ROG Ally Ryzen Z1 Octa Core Extreme</h6>
              <p style={{ fontFamily: 'sans-serif', fontSize: 'Medium', textAlign: 'justify' }}> (16GB RAM, 512GB SSD, White, Windows 11 Home)</p>
              <p><span style={{ color: 'yellow' }}>Rs 59,999 &nbsp; &nbsp;</span><span style={{ color: 'grey' }}><strike>Rs 81,000</strike></span></p>

            </div>
          </div>
        </div>
        <div className="card" data-label="24% Off">
          <div className="card-container" style={{ padding: '1rem' }}>
            <img src="https://www.reliancedigital.in/medias/HP-Victus-16-d0309TX-493837856-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxODU4ODA5fGltYWdlL2pwZWd8aW1hZ2VzL2g0OC9oOWEvMTAwMTE4NDYzMTE5NjYuanBnfGRkM2M5YTU0ZWVlNWQ2OGIzMTUwMTdhY2Q0N2JlOTU3ZTY5ZmQwZDc1YmFkY2EyZDIwMmM1MDVhYzI0YjRjZDg" alt="Avatar" />
            <div className="container1">
              <h6>HP Omen Gaming</h6>
              <p style={{ fontFamily: 'sans-serif', fontSize: 'Medium', textAlign: 'justify' }}> (16GB RAM, 512GB SSD, Black, Windows 11 Home)</p>
              <p><span style={{ color: 'yellow' }}>Rs 69,999 &nbsp; &nbsp;</span><span style={{ color: 'grey' }}><strike>Rs 87,000</strike></span></p>

            </div>
          </div>
        </div>

      </div>
    </>
  )
}


export default Card;
