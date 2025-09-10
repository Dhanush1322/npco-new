"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { FaClock, FaMoon, FaTools, FaCogs } from "react-icons/fa";

const AviationInfo = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="aviation-section">
      <div className="aviation-container">
        {/* ✅ Text Section */}
        <div
          className="aviation-text"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <h2 className="aviation-title">LINE MAINTENANCE</h2>
          <p className="aviation-description">
            We are a major <strong>Saudi company</strong> specializing in aviation
            for both the <strong>commercial</strong> and <strong>military</strong>{" "}
            sectors. <br />
            Our mission is to deliver world-class{" "}
            <strong>maintenance and handling services</strong>, ensuring quality
            and reduced lead times while committing to the{" "}
            <strong>highest international safety standards</strong>.
          </p>
          <Link href="/aviation/linemaintanence">
            <button className="aviation-btn">Learn More</button>
          </Link>
        </div>

        {/* ✅ Image Section */}
        <div
          className="aviation-image"
          data-aos="fade-left"
          data-aos-delay="400"
        >
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
          <div className="service-card" data-aos="zoom-in" data-aos-delay="200">
            <FaClock className="service-icon" />
            <h4>Turnaround Routine Service</h4>
            <p>
              Fast and efficient checks during aircraft ground time, ensuring
              safe, timely departures without delays.
            </p>
          </div>

          <div className="service-card" data-aos="zoom-in" data-aos-delay="300">
            <FaMoon className="service-icon" />
            <h4>Overnight Checks</h4>
            <p>
              Comprehensive overnight inspections and maintenance to keep
              aircraft in peak condition and ready for service the next day.
            </p>
          </div>

          <div className="service-card" data-aos="zoom-in" data-aos-delay="400">
            <FaTools className="service-icon" />
            <h4>Rectification of Log Entries</h4>
            <p>
              Expert resolution of non-routine aircraft logbook issues to
              maintain flight safety and regulatory compliance.
            </p>
          </div>

          <div className="service-card" data-aos="zoom-in" data-aos-delay="500">
            <FaCogs className="service-icon" />
            <h4>Spare Parts Support</h4>
            <p>
              Reliable spare parts supply chain to minimize downtime and keep
              your fleet operational without interruptions.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .aviation-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
        }
.aviation-description{
color:black;
}
.aviation-btn {
  background-color: #1dd3f8;   /* ✅ main color */
  color: #fff;                 /* white text */
  padding: 12px 24px;          /* space inside */
  border: none;                /* remove default border */
  border-radius: 8px;          /* smooth corners */
  font-size: 16px;             /* text size */
  font-weight: 600;            /* semi-bold text */
  cursor: pointer;             /* pointer on hover */
  transition: all 0.3s ease;   /* smooth animation */
  box-shadow: 0 4px 6px rgba(0,0,0,0.1); /* subtle shadow */
}

.aviation-btn:hover {
  background-color: #0bbbdc;   /* ✅ slightly darker on hover */
  transform: translateY(-2px); /* lift effect */
  box-shadow: 0 6px 12px rgba(0,0,0,0.15);
}

        .aviation-text {
          flex: 1 1 400px; /* grow, shrink, base width */
          max-width: 700px;
          background-image: url("/aviation/NCPO OUTLINE DESIGN 300 px_Prancheta 1.png");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          padding: 40px;
          border-radius: 12px;
          color: white;
          position: relative;
          z-index: 1;
        }

        .aviation-text::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 12px;
          z-index: -1;
        }

        .aviation-image {
          flex: 1 1 300px;
          display: flex;
          justify-content: center;
        }

        .aviation-main-img {
          max-width: 100%;
          height: auto;
          border-radius: 12px;
        }
.service-card p{
color:black;
}
        /* ✅ Services section */
        .aviation-services {
          margin-top: 60px;
          text-align: center;
        }

        .services-title {
          font-size: 24px;
          margin-bottom: 30px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }

        .service-card {
          background: #fff;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
          text-align: center;
        }

        .service-card.service-icon {
          font-size: 50px;
          margin-bottom: 12px;
          color: #0072a0;
        }

        /* ✅ Responsive tweaks */
        @media (max-width: 768px) {
          .aviation-container {
            flex-direction: column;
            text-align: center;
          }

          .aviation-text {
            width: 100%;
            padding: 20px;
          }

          .aviation-image {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default AviationInfo;
