"use client";

import React from "react";
import Image from "next/image";
import { FaWrench, FaTools, FaClipboardCheck, FaCheckDouble, FaCogs, FaOilCan, FaBroom, FaFileAlt, FaSync, FaPaintRoller } from "react-icons/fa";
import "./Gse.css";

const Gse = () => {
  const levels = [
    {
      icon: <FaWrench />,
      title: "Preventive Maintenance",
      desc: "Regular inspections and servicing to prevent potential equipment failures and ensure operational safety.",
    },
    {
      icon: <FaTools />,
      title: "Corrective Maintenance",
      desc: "Quick response to faults and repairs to restore full functionality and minimize downtime.",
    },
    {
      icon: <FaClipboardCheck />,
      title: "Periodic Inspection",
      desc: "Scheduled checks to verify compliance with safety, performance, and industry regulations.",
    },
    {
      icon: <FaCheckDouble />,
      title: "PDI - Pre-Delivery Inspection",
      desc: "Thorough inspection before equipment delivery, ensuring readiness and reliability.",
    },
    {
      icon: <FaCogs />,
      title: "Expendables",
      desc: "Replacement of consumable parts like filters, seals, and hoses to maintain efficiency.",
    },
    {
      icon: <FaOilCan />,
      title: "Lubrication",
      desc: "Systematic lubrication of moving parts to reduce wear, friction, and extend equipment life.",
    },
    {
      icon: <FaBroom />,
      title: "Interior and Exterior Cleaning",
      desc: "Deep cleaning services for both inside and outside, ensuring hygiene and presentation.",
    },
    {
      icon: <FaFileAlt />,
      title: "Documentation and Reports",
      desc: "Detailed reporting and record-keeping for compliance, traceability, and audits.",
    },
    {
      icon: <FaSync />,
      title: "Overhauling",
      desc: "Complete refurbishment of equipment to restore it to optimal working condition.",
    },
    {
      icon: <FaPaintRoller />,
      title: "Painting",
      desc: "Protective and aesthetic painting services, increasing durability and appearance.",
    },
  ];

  return (
    <section className="gse-section">
      <div className="gse-container">
        {/* Text Section */}
        <div className="gse-text" data-aos="fade-right" data-aos-duration="800">
          <h2 className="gse-title">GSE Services</h2>
          <p className="gse-description">
            We provide and maintain Ground Support Equipment (GSE) and automobiles serving
            civil and military sectors. Our expert team ensures world-class maintenance,
            engineering, and performance to meet international standards.
          </p>
          <p className="gse-description">
            We also offer leasing and purchasing solutions, supplying spare parts, and
            providing reliable services tailored for aviation industry needs.
          </p>
        </div>

        {/* Image Section */}
        <div className="gse-image" data-aos="fade-left" data-aos-duration="800">
          <Image
            src="/gse/gse.jpeg"
            alt="Ground Support Equipment"
            width={500}
            height={350}
            className="rounded shadow-lg"
          />
        </div>
      </div>

      {/* Levels as Cards */}
      <div className="gse-levels" data-aos="fade-up" data-aos-duration="800">
        <h3 className="levels-title">Line Maintenance Aircraft Levels</h3>
        <div className="levels-grid">
          {levels.map((level, index) => (
            <div className="level-card" key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
              <div className="level-icon">{level.icon}</div>
              <h4>{level.title}</h4>
              <p>{level.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gse;
