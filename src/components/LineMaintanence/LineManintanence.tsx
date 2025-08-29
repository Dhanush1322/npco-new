"use client";

import React from "react";
import Image from "next/image";
import "./LineMaintenance.css"; // ✅ External CSS file

const LineMaintenance = () => {
  return (
    <section className="line-section">
      <div className="line-container">
        {/* Text Section */}
        <div className="line-text">
          <h2 className="line-title">Line Maintenance And Services</h2>
          <p className="line-description">
            Our team(s) offer a full range of support services, Technical
            assistance, AOG response teams and enhanced reliability through
            rapid response times. Skilled engineers who stand ready to handle
            upcoming tasks, turnaround checks, non-routine discrepancies.
          </p>
          <button className="line-btn">Explore Services</button>
        </div>

        {/* Image Section */}
        <div className="line-image">
          <Image
            src="/line/line.jpg" // ✅ replace with your image
            alt="Line Maintenance"
            width={500}
            height={350}
          />
        </div>
      </div>
    </section>
  );
};

export default LineMaintenance;
