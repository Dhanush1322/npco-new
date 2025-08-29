"use client";

import React from "react";
import Image from "next/image";
import "./AviationInfo.css"; // ✅ Import external CSS

const AviationInfo = () => {
  return (
    <section className="aviation-section">
      <div className="aviation-container">
        {/* Text Section */}
        <div className="aviation-text">
          <h2 className="aviation-title">LINE MAINTENANCE</h2>
          <p className="aviation-description">
            We provide line maintenance services that offer any kind of
            technical assistance, from routine turnaround and overnight checks,
            to rectification of non-routine aircraft log entries.
          </p>
          <button className="aviation-btn">Learn More</button>
        </div>

        {/* Image Section */}
        <div className="aviation-image">
          <Image
            src="/aviation/aviation.jpg" // ✅ Replace with your actual image path
            alt="Aviation Maintenance"
            width={500}
            height={350}
          />
        </div>
      </div>
    </section>
  );
};

export default AviationInfo;
