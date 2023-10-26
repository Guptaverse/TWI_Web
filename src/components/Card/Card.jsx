// Card.js
import React from 'react';
import './Card.css';
import pic1 from "../../Assets/Card-images/Type1/pic1.png"
const Card = ({ imageSrc, text }) => {
  return (
    <div className="outer-card">
      {/* <div className="inner-card"> */}
        <img src={pic1} alt="Card Image" />
        <p className="card-text">Shivam</p>
      {/* </div> */}
    </div>
  );
};

export default Card;
