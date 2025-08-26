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
                    src="/blog/b1.webp"
                    alt="Image"
                    width={400}
                    height={300}
                  />
                </div>

                <h3>Ground Support Equipment (GSE) Services</h3>
                <p>
                  In the challenging landscape of aviation, where safety is the
                  first concern and the investment is huge, the best ground
                  support solutions are crucial to ensure successful operations
                  and to avoid any unprecedented challenging situations that can
                  cause huge losses both physically and economically.
                </p>

                <p>
                  NPCO is one of the leading names in aircraft maintenance and
                  Ground Support Equipment (GSE) for Airports in Saudi Arabia.
                  Our state-of-the-art GSE services are tailored to meet the
                  unique needs of airports, ensuring the smooth functioning of
                  your fleet and the maintenance of huge aircraft and other
                  heavy and big equipment.
                </p>

                <h4>Our Expertise</h4>
                <p>
                  We have years of experience and expertise in aircraft
                  maintenance with the best ground support equipment GSE for
                  airports. Our team of expert professionals and technicians
                  operate with the most advanced and cutting-edge facilities to
                  ensure accuracy, time efficiency, and the success of every
                  operation across aviation, marine, and railway industries.
                </p>
                <p>
                  NPCO aims to make optimum use of our experience and expertise
                  in aircraft and GSE maintenance with a holistic approach to
                  enhance the efficiency of your ground operations. Our skilled
                  technicians, working as a dedicated team, use the latest
                  cutting-edge technology to deliver precision and reliability.
                </p>

                <h4>Ground Support Equipment Services</h4>
                <p>We specialize in the following GSE-related services:</p>

                <ul>
                  <li>
                    <i className="bx bx-check"></i>
                    <b>Maintenance and Repairs:</b> We repair a wide range of
                    GSE including aircraft tugs, baggage loaders, ground power
                    units, and more with rigorous procedures focused on safety
                    and performance standards.
                  </li>
                  <li>
                    <i className="bx bx-check"></i>
                    <b>Equipment Upgrades and Modernization:</b> We utilize
                    advanced technology to improve efficiency, reliability, and
                    time optimization of ground support operations.
                  </li>
                  <li>
                    <i className="bx bx-check"></i>
                    <b>Custom Solutions:</b> Recognizing that each airport has
                    unique conditions such as location, market norms, available
                    technologies, and weather, we provide customized solutions.
                    Our team works closely with clients to deliver tailored GSE
                    strategies.
                  </li>
                </ul>

                <div className="car-service-list-wrap mt-4">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                      <div className="service-list-img">
                        <Image
                          src={detailsImg2}
                          alt="Image"
                          width={570}
                          height={400}
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="car-service-list">
                        <h4>Why Choose NPCO?</h4>
                        <ul>
                          <li>
                            <i className="bx bx-check"></i>
                            We prioritize <b>quality and safety</b> above all
                            else, even when services and tools are costly.
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            Our processes are streamlined for{" "}
                            <b>efficiency and quick turnaround</b>.
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            NPCO adheres to{" "}
                            <b>international standards and regulations</b> for
                            safety, environment, and compliance.
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            We have established ourselves as a{" "}
                            <b>trusted name in GSE</b> across Saudi Arabia.
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            Dedicated team of <b>skilled professionals</b> using
                            cutting-edge technology.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="mt-4">
                  NPCO remains a reliable partner for Ground Support Equipment
                  (GSE) for Airports in Saudi Arabia, committed to delivering
                  world-class services that enhance efficiency, safety, and
                  sustainability in aviation operations.
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
