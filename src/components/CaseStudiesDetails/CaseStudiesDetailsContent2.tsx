"use client";

import React from "react";
import Image from "next/image";

import detailsImg from "../../../public/images/services-details/services-details.jpg";
import detailsImg2 from "../../../public/images/services-details/services-details2.png";

const CaseStudiesDetailsContent: React.FC = () => {
  return (
    <>
      <div className="service-details-area ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="service-details-wrap">
                <div className="service-img">
                  <Image
                    src="/blog/b2.webp"
                    alt="Image"
                    width={400}
                    height={300}
                  />
                </div>

                <h3>Airbus Supplier Services</h3>
                <p>
                  Welcome to <b>NPCO</b>, where precision is our ultimate goal to provide you
                  with the best aerospace solutions. As a leading player in the aviation
                  supply chain in Saudi Arabia, we take pride in being a crucial link among
                  the best Airbus suppliers not only in the Saudi Kingdom but all over the
                  world with the commitment to quality, innovation, reliability, and
                  performance through our unparalleled services to our clients and customers
                  as well.
                </p>

                <h4>Advanced Airbus Services NPCO Offers</h4>
                <ul>
                  <li>
                    <i className="bx bx-check"></i>
                    <b>Integrated Logistics Solutions:</b> To ensure streamlined operations
                    and reduced lead times for Airbus manufacturers, we excel in providing
                    end-to-end logistics solutions.
                  </li>
                  <li>
                    <i className="bx bx-check"></i>
                    <b>Innovative Engineering Solutions:</b> From design optimization to
                    developing advanced materials that enhance performance and efficiency of
                    aircraft, NPCO offers the most innovative engineering solutions.
                  </li>
                  <li>
                    <i className="bx bx-check"></i>
                    <b>Regulatory Compliance and Certification Support:</b> We ensure that
                    our products and services comply with stringent aviation regulations.
                    This helps our clients obtain necessary certifications, facilitating
                    smoother integration of components into Airbus aircraft.
                  </li>
                  <li>
                    <i className="bx bx-check"></i>
                    <b>Cybersecurity Measures:</b> With the rapid digitization of aerospace,
                    NPCO prioritizes robust cybersecurity—securing communication channels,
                    protecting sensitive data, and ensuring the integrity of digital systems
                    to safeguard Airbus aircraft from cyber threats.
                  </li>
                </ul>

                <div className="car-service-list-wrap mt-4">
                  <div className="row align-items-center">
                   
                    <div className="col-lg-12 col-md-6">
                      <div className="car-service-list">
                        <h4>Why NPCO is Your Reliable Airbus Supplier?</h4>
                        <ul>
                          <li>
                            <i className="bx bx-check"></i>
                            <b>Global Reach, Local Expertise:</b> We transcend borders
                            globally while staying connected with local clients to
                            understand their unique requirements.
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            <b>Unrivaled Product Portfolio:</b> From cutting-edge avionics
                            to structural components, NPCO offers a wide portfolio of
                            aerospace systems designed for the diverse needs of the
                            industry.
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            <b>Tailored Solutions:</b> We focus on understanding each
                            client’s exact needs before delivering bespoke services.
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            <b>Reliability You Can Trust:</b> Quality, consistency, and
                            timely delivery are at the core of our services.
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            <b>Transparency and Accountability:</b> We maintain clear
                            communication with clients, providing real-time updates and
                            ensuring accountability at every step.
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            <b>Environmental Responsibility:</b> NPCO adopts sustainable
                            practices with eco-friendly materials and processes to
                            contribute to a greener future.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="mt-4">
                  At NPCO, our commitment as a trusted Airbus supplier in Saudi Arabia is to
                  deliver excellence through innovation, precision, and sustainability—
                  supporting the future of aviation with world-class aerospace solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudiesDetailsContent;
