"use client";

import React from "react";
import Image from "next/image";
import "./Gse.css"; // ✅ External CSS

const Gse = () => {
  return (
    <section className="gse-section">
      <div className="gse-container">
        {/* Text Section */}
        <div className="gse-text">
          <h2 className="gse-title">GSE Services</h2>
          <p className="gse-description">
            We provide and maintain Ground Support Equipment (GSE) and
            Automobiles which serve our clients in civil and military sectors.
            We also provide spare parts for aircraft with a team of experts in
            training, engineering, response, performance in order to meet the
            standard maintenance systems with their functions at various levels.
          </p>
          <p className="gse-description">
            We also offer a full range of comprehensive leasing and purchasing
            solutions and services for ground support equipment for the aviation
            sector.
          </p>
        </div>

        {/* Image Section */}
        <div className="gse-image">
          <Image
            src="/gse/gse.jpg" // ✅ replace with your image
            alt="Ground Support Equipment"
            width={500}
            height={350}
          />
        </div>
      </div>

      {/* Levels Section */}
      <div className="gse-levels">
        <h3 className="levels-title">Line Maintenance Aircraft Levels</h3>
        <ul className="levels-list">
          <li>1. Preventive Maintenance</li>
          <li>2. Corrective Maintenance</li>
          <li>3. Periodic Inspection</li>
          <li>4. PDI - Pre-Delivery Inspection</li>
          <li>5. Expendables</li>
          <li>6. Lubrication</li>
          <li>7. Interior and Exterior Cleaning</li>
          <li>8. Documentation and Reports</li>
          <li>9. Overhauling</li>
          <li>10. Painting</li>
        </ul>
      </div>
    </section>
  );
};

export default Gse;
