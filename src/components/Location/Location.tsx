"use client";
import React, { useState, useEffect, useRef } from "react";
import "./Location.css";

function Location() {
  const [scale, setScale] = useState(1);
  const minScale = 1;
  const maxScale = 3;
  const containerRef = useRef<HTMLDivElement>(null);

  // ✅ Handle scroll-based zoom
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let lastScrollTop = 0;

    const handleScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      const scrollTop = target.scrollTop;

      if (scrollTop > lastScrollTop) {
        // Scrolling Down → Zoom In
        setScale((prev) => Math.min(prev + 0.02, maxScale));
      } else {
        // Scrolling Up → Zoom Out
        setScale((prev) => Math.max(prev - 0.02, minScale));
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ✅ Manual Zoom Controls
  const zoomIn = () => setScale((prev) => Math.min(prev + 0.2, maxScale));
  const zoomOut = () => setScale((prev) => Math.max(prev - 0.2, minScale));

  return (
    <div className="location-container">
      {/* Zoom Buttons */}
      <div className="location-controls">
        <button onClick={zoomIn}>+</button>
        <button onClick={zoomOut} disabled={scale <= minScale}>
          -
        </button>
      </div>

      {/* Scroll Area */}
      <div className="location-scroll" ref={containerRef}>
        <img
          src="/location/location.jpeg"
          alt="Our Location"
          style={{
            transform: `scale(${scale})`,
            transformOrigin: "center center",
            transition: "transform 0.2s ease-out", // ✅ smooth animation
          }}
        />
      </div>
    </div>
  );
}

export default Location;
