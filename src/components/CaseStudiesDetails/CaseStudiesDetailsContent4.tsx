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
                    src="/blog/b4.webp"
                    alt="Image"
                    width={400}
                    height={300}
                  />
                </div>

                <h3>
                  Aircraft Maintenance and Ground Support Equipment Services
                </h3>
                <p>
                  As a leading provider of aircraft maintenance and Ground
                  Support Equipment services in Saudi Arabia, we feel that being
                  equipped with the most advanced and every category of aircraft
                  tools is our responsibility so that our clients don’t feel
                  disappointed when they approach us with great expectations.
                </p>

                <p>
                  In this dynamic evolving industry, we aim to provide our
                  customers with top-notch aircraft tools, maintenance, and
                  equipment solutions that not only focus on the efficiency of
                  the aircraft fleet but also prioritize safety.
                </p>

                <h4>Key Features of Our Aircraft Tools</h4>
                <p>
                  We believe in quality service and thus, we choose the best
                  suppliers of these defence equipment so that we can make
                  optimum use during the manufacturing process. Following are
                  some of the main key features of the tools we use in the
                  manufacturing of aircraft equipment:
                </p>

                <ul>
                  <li>
                    <i className="bx bx-check"></i>
                    <b>Quality Assurance:</b> All processes related to aircraft
                    tools, maintenance, and equipment undergo rigorous quality
                    checks.
                  </li>
                  <li>
                    <i className="bx bx-check"></i>
                    <b>Precision Engineering:</b> Tools are crafted with
                    precision to ensure accuracy and efficiency in every task.
                  </li>
                  <li>
                    <i className="bx bx-check"></i>
                    <b>Diversity of Options:</b> A large stock of tools for
                    various aircraft models and maintenance tasks — from routine
                    inspections to specialized operations.
                  </li>
                  <li>
                    <i className="bx bx-check"></i>
                    <b>Durability and Longevity:</b> Tools are built for
                    durability, reducing the need for frequent replacements.
                  </li>
                </ul>

                <h4>Advanced Aircraft Tools NPCO Specializes In</h4>
                <p>
                  Advanced aircraft tools are the backbone of strong aircraft —
                  from design and maintenance to operation. We use the most
                  advanced tools that are relevant in the aerospace industry at
                  the current time. Some include:
                </p>

                <ul>
                  <li>
                    <i className="bx bx-check"></i>
                    <b>Flight Data Recorders (Black Box):</b> Essential for
                    recording cockpit conversations and instrument readings,
                    acting as life-savers during emergencies or accidents.
                  </li>
                  <li>
                    <i className="bx bx-check"></i>
                    <b>Avionics Test Equipment:</b> Used for testing navigation,
                    communication, and monitoring systems.
                  </li>
                  <li>
                    <i className="bx bx-check"></i>
                    <b>Non-Destructive Testing (NDT) Equipment:</b> Tools like
                    eddy current testers, ultrasonic testers, and X-ray
                    equipment to detect flaws in materials and structures.
                  </li>
                  <li>
                    <i className="bx bx-check"></i>
                    <b>Aircraft Health Monitoring Systems:</b> Real-time
                    monitoring of aircraft systems to ensure safety and
                    performance.
                  </li>
                </ul>

                <div className="car-service-list-wrap mt-4">
                  <div className="row align-items-center">
                    
                    <div className="col-lg-12 col-md-6">
                      <div className="car-service-list">
                        <h4>Our Aircraft Maintenance Services Include</h4>
                        <ul>
                          <li>
                            <i className="bx bx-check"></i>
                            <b>Routine Inspections:</b> Scheduled checks to
                            identify potential issues early and keep aircraft in
                            top condition.
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            <b>Component Overhauls:</b> Ensuring each part of
                            the aircraft is performing at its best through
                            expert overhauls.
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            <b>Emergency Repairs:</b> Ready to respond to
                            unexpected repair needs with quick and reliable
                            solutions.
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            <b>Regulatory Compliance:</b> Ensuring all services
                            and tools comply with the latest aviation
                            regulations and standards.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="mt-4">
                  NPCO remains committed to delivering top-tier aircraft tools,
                  maintenance, and equipment solutions. By focusing on safety,
                  precision, and regulatory compliance, we ensure that our
                  clients receive nothing less than excellence in aviation
                  support services.
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
