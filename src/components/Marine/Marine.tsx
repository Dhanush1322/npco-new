// Marine.jsx
"use client"
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Marine.css";

const Marine = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true }); // animation duration
  }, []);

  return (
    <div className="marine-container" data-aos="fade-up">
      <p className="marine-description" data-aos="fade-right">
        We provide professional, reliable services and solutions in the marine
        maintenance for the military and civil sectors. We offer the experience
        and credibility of our staff and our best practices, which are developed
        with international administrative and technical services to build stable
        and reputable clients. We always strive to find ways to take good care
        of them.
      </p>

      <h2 className="marine-subtitle" data-aos="zoom-in">
        Maintenance and Services
      </h2>

      <ul className="marine-list">
        <li data-aos="fade-up" data-aos-delay="100">⚙️ Engine Services</li>
        <li data-aos="fade-up" data-aos-delay="200">🔌 Electrical System</li>
        <li data-aos="fade-up" data-aos-delay="300">🛠️ Body and Hull</li>
        <li data-aos="fade-up" data-aos-delay="400">🚤 Propulsion System</li>
        <li data-aos="fade-up" data-aos-delay="500">📡 Communication & Navigation</li>
      </ul>

      <div className="marine-images">
        <img src="/marine/marin.jpg" alt="Marine Service 1" data-aos="flip-left" />
        <img src="/marine/marin1.jpg" alt="Marine Service 2" data-aos="flip-up" />
        <img src="/marine/marin2.jpg" alt="Marine Service 3" data-aos="flip-right" />
      </div>
    </div>
  );
};

export default Marine;
