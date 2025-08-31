
"use client"
import React, { useState } from 'react';
import './Location.css';

function Location() {
  const [scale, setScale] = useState(1);
  const minScale = 1;
  const maxScale = 3;

  const zoomIn = () => {
    if (scale < maxScale) {
      setScale(prev => prev + 0.2);
    }
  };

  const zoomOut = () => {
    if (scale > minScale) {
      setScale(prev => prev - 0.2);
    }
  };

  return (
    <div className="location-container">
      <div className="location-controls">
        <button onClick={zoomIn}>+</button>
        <button onClick={zoomOut} disabled={scale <= minScale}>-</button>
      </div>
      <div className="location-scroll">
        <img
          src="/location/location.jpeg"
          alt="Our Location"
          style={{
            transform: `scale(${scale})`,
            transformOrigin: 'center center',
            transition: 'transform 0.3s ease'
          }}
        />
      </div>
    </div>
  );
}

export default Location;
