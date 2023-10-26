import React, { useState } from 'react';
import './Slider.css'; 

const Slider = ({ cards }) => {
  const [scrollX, setScrollX] = useState(0);

  const handleScroll = (direction) => {
    if (direction === 'left') {
      setScrollX(scrollX - 1);
    } else {
      setScrollX(scrollX + 1);
    }
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            {card}
          </div>
        ))}
      </div>
      <button onClick={() => handleScroll('left')} className="scroll-button left">
        &lt;
      </button>
      <button onClick={() => handleScroll('right')} className="scroll-button right">
        &gt;
      </button>
    </div>
  );
};

export default Slider;
