"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Railway.css"; // ✅ External CSS

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
            NPCO is a maintenance & service provider in the Kingdom of Saudi
            Arabia with a maintenance center built on the highest level of
            Quality and Safety standards.
          </p>
          <p className="railway-description">
            We can track, inventorize, and assist for preventive maintenance
            checks, repairs, and record keeping. We provide 24/7 support, with
            outstanding customer care.
          </p>
        </div>

        {/* Images Section */}
        <div className="railway-images">
          <div data-aos="zoom-in" data-aos-delay="100">
            <Image
              src="/rail/rail.jpg"
              alt="Surface Railways"
              width={400}
              height={280}
            />
          </div>
          <div data-aos="zoom-in" data-aos-delay="200">
            <Image
              src="/rail/rail2.jpg"
              alt="Elevated Railways"
              width={400}
              height={280}
            />
          </div>
          <div data-aos="zoom-in" data-aos-delay="300">
            <Image
              src="/rail/rail3.jpg"
              alt="Underground Railways"
              width={400}
              height={280}
            />
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="railway-services" data-aos="fade-up">
        <h3 className="services-title">Maintenance and Services</h3>
        <p className="services-description">
          We provide preventive and emergency maintenance services for support
          equipment. Ground Support Equipment Maintenance, Mobile Repairs,
          Welding, Electrical System Repair, and Hydraulic System Repair are
          currently available across the Kingdom of Saudi Arabia. Our repair
          service focuses on preventive maintenance and ongoing support to
          maintain the maximum availability of maintenance equipment.
        </p>
      </div>
    </section>
  );
};

export default Railway;
