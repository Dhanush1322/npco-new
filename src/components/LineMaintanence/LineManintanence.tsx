"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import "./LineMaintenance.css"; // ✅ Your custom CSS

const LineMaintenance = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true }); // initialize AOS
  }, []);

  return (
    <section className="line-section">
      <div className="line-container">
        {/* Text Section */}
        <div className="line-text" data-aos="fade-right">
          <h2 className="line-title">Line Maintenance And Services</h2>
          <p className="line-description">
            Our team(s) offer a full range of support services, Technical
            assistance, AOG response teams and enhanced reliability through
            rapid response times. Skilled engineers who stand ready to handle
            upcoming tasks, turnaround checks, non-routine discrepancies.
          </p>
          <button className="line-btn" data-aos="zoom-in" data-aos-delay="300">
            Explore Services
          </button>
        </div>

        {/* Image Section */}
        <div className="line-image" data-aos="fade-left">
          <Image
            src="/line/line.jpg"
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
