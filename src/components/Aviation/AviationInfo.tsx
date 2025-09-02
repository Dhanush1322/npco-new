"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link"; 
import { FaClock, FaMoon, FaTools, FaCogs } from "react-icons/fa"; // ✅ Icons
import "./AviationInfo.css";

const AviationInfo = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="aviation-section">
      <div className="aviation-container">
        {/* ✅ Text Section */}
        <div className="aviation-text" data-aos="fade-right" data-aos-delay="200">
          <h2 className="aviation-title">LINE MAINTENANCE</h2>
          <p className="aviation-description">
            We are a major <strong>Saudi company</strong> specializing in aviation for both the
            <strong> commercial</strong> and <strong>military</strong> sectors. <br />
            Our mission is to deliver world-class <strong>maintenance and handling services</strong>,
            ensuring quality and reduced lead times while committing to the{" "}
            <strong>highest international safety standards</strong>.
          </p>
          <Link href="/aviation/linemaintanence">
            <button className="aviation-btn">Learn More</button>
          </Link>
        </div>

        {/* ✅ Image Section */}
        <div className="aviation-image" data-aos="fade-left" data-aos-delay="400">
          <Image
            src="/aviation/aviation.jpeg"
            alt="Aviation Maintenance"
            width={500}
            height={350}
            className="aviation-main-img"
          />
        </div>
      </div>

      {/* ✅ Services Section */}
      <div className="aviation-services" data-aos="fade-up" data-aos-delay="300">
        <h3 className="services-title">Our Core Services</h3>
        <div className="services-grid">
          {/* Service 1 */}
          <div className="service-card" data-aos="zoom-in" data-aos-delay="200">
            <FaClock className="service-icon" />
            <h4>Turnaround Routine Service</h4>
            <p>
              Fast and efficient checks during aircraft ground time, ensuring safe,
              timely departures without delays.
            </p>
          </div>

          {/* Service 2 */}
          <div className="service-card" data-aos="zoom-in" data-aos-delay="300">
            <FaMoon className="service-icon" />
            <h4>Overnight Checks</h4>
            <p>
              Comprehensive overnight inspections and maintenance to keep aircraft in
              peak condition and ready for service the next day.
            </p>
          </div>

          {/* Service 3 */}
          <div className="service-card" data-aos="zoom-in" data-aos-delay="400">
            <FaTools className="service-icon" />
            <h4>Rectification of Log Entries</h4>
            <p>
              Expert resolution of non-routine aircraft logbook issues to maintain
              flight safety and regulatory compliance.
            </p>
          </div>

          {/* Service 4 */}
          <div className="service-card" data-aos="zoom-in" data-aos-delay="500">
            <FaCogs className="service-icon" />
            <h4>Spare Parts Support</h4>
            <p>
              Reliable spare parts supply chain to minimize downtime and keep your
              fleet operational without interruptions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AviationInfo;
