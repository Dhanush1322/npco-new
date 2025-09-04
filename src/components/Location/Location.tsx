"use client";
import React, { useState } from "react";
import "./Location.css";

function Location() {
  const [scale, setScale] = useState(1);
  const minScale = 1;
  const maxScale = 3;

  // ✅ Handle zoom with scroll
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault(); // stop page from scrolling
    if (e.deltaY > 0) {
      // scroll down → zoom in
      setScale((prev) => Math.min(prev + 0.1, maxScale));
    } else {
      // scroll up → zoom out
      setScale((prev) => Math.max(prev - 0.1, minScale));
    }
  };

  return (
    <div
      className="location-container"
      onWheel={handleWheel}
      style={{
        overflow: "hidden",
        width: "100%",
        height: "100%",
      }}
    >
      <img
        src="/location/location.jpeg"
        alt="Our Location"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "center center", // always zoom from center
          transition: "transform 0.3s ease-out", // smooth effect
          width: "100%",
          height: "auto",
          display: "block",
        }}
      />
    </div>
  );
}

export default Location;
