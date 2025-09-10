"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaCogs,
  FaTools,
  FaWrench,
  FaTrain,
  FaClipboardCheck,
} from "react-icons/fa";
import "./Railway.css";

const Railway = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className="railway-section" data-aos="fade-up">
      <div className="railway-container">
        {/* Text Section */}
        <div className="railway-text" data-aos="fade-right">
          <h2 className="railway-title">Railway Services</h2>
          <p className="railway-description">
            NPCO serves the railway industry in three categories:{" "}
            <b>Surface Railways, Elevated Railways, and Underground Railways</b>.
            We are a trusted <b>maintenance & service provider</b> in the Kingdom
            of Saudi Arabia with a dedicated maintenance center built on the
            highest Quality and Safety standards.
          </p>
          <p className="railway-description">
            We handle preventive maintenance, repairs, and inventory management
            with precision. Our support teams are available <b>24/7</b> to
            deliver outstanding customer care and ensure uninterrupted
            operations.
          </p>
        </div>

        {/* Images Section */}
        <div className="railway-images">
          <div data-aos="zoom-in" data-aos-delay="100">
            <Image
              src="/rail/KAFD-Station-1.webp"
              alt="Surface Railways"
              width={400}
              height={280}
            />
          </div>
          <div data-aos="zoom-in" data-aos-delay="200">
            <Image
              src="/rail/11.png"
              alt="Elevated Railways"
              width={400}
              height={280}
            />
          </div>
          <div data-aos="zoom-in" data-aos-delay="300">
            <Image
              src="/rail/Riyadh-Metro.jpg"
              alt="Underground Railways"
              width={400}
              height={280}
            />
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="railway-services" data-aos="fade-up">
        <h3 className="services-title">Maintenance and Support</h3>
        <p className="services-description">
          NPCO provides reliable <b>preventive</b> and <b>emergency maintenance</b>{" "}
          services for railway support equipment across Saudi Arabia. Our services
          cover Ground Support Equipment Maintenance, Mobile Repairs, Welding,
          Electrical, and Hydraulic System Repairs — all focused on maximizing
          availability and performance.
        </p>

        {/* Detailed Services */}
        <div className="railway-services-grid">
          <div className="service-card" data-aos="fade-up" data-aos-delay="100">
            <FaCogs className="service-icon" />
            <h4>Supplying Spare Parts & Consumables</h4>
            <p>
              We source and supply <b>genuine spare parts and consumables</b> for
              railway systems, ensuring long-term reliability and reduced downtime.
            </p>
          </div>

          <div className="service-card" data-aos="fade-up" data-aos-delay="200">
            <FaTools className="service-icon" />
            <h4>Supplying Tools & Safety Equipment</h4>
            <p>
              Providing high-quality <b>tools, safety gear, and maintenance
              equipment</b> to meet the demanding requirements of railway
              operations.
            </p>
          </div>

          <div className="service-card" data-aos="fade-up" data-aos-delay="300">
            <FaWrench className="service-icon" />
            <h4>Preventive & Emergency Maintenance</h4>
            <p>
              From routine inspections to urgent breakdown repairs, NPCO ensures
              <b>24/7 maintenance services</b> that guarantee operational
              continuity and safety.
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
      .railway-section {
  position: relative;
  background-image: url("/rail/NCPO OUTLINE DESIGN-07.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1;
}

/* White blur overlay */
.railway-section::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(7, 4, 4, 0.6); /* white overlay with opacity */

  z-index: -1; /* keeps overlay behind content */
}
  .railway-description ,.services-description{
  color: white;
  font-weight:300;
  }
.railway-title , .services-title{
color:white;
}
      `}

      </style>
    </section>
  );
};

export default Railway;
