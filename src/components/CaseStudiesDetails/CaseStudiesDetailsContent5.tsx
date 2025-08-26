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
                    src="/blog/b5.webp"
                    alt="Image"
                    width={400}
                    height={300}
                  />
                </div>

                <h3>Aircraft Tools, Consumables & Expendables</h3>
                <p>
                  NPCO is a name that provides services from aircraft tools and
                  equipment to aircraft consumables and expendables with
                  excellence that strives to meet the needs of the aviation
                  industry. We are a trusted name in the aviation industry for
                  various airlines, maintenance facilities, and aviation
                  professionals not only in Saudi Arabia but worldwide.
                </p>

                <h4>Our Commitment to Quality</h4>
                <p>
                  Every small thing matters the most when it comes to aviation,
                  where attention and quality of the tools used in the aircraft
                  are crucial at every step. At NPCO, the safety of our
                  customers is the first thing in our minds and that’s why the
                  delivery of reliable and high-quality aircraft consumables and
                  expendables is our focus with a comprehensive range of items
                  from lubricants and sealants to filters and fasteners.
                </p>

                <h4>Wide Range of Products</h4>
                <p>
                  Our extensive catalog of consumables and expendables is
                  designed to cater to the diverse needs of the aviation
                  industry. From specialized lubricants to reliable filters and
                  durable fasteners, we have you covered. Our product range
                  includes, but is not limited to:
                </p>

                <ul>
                  <li>
                    <i className="bx bx-check"></i>
                    <b>Lubricants and Oils:</b> Enhance the functionality of
                    your aircraft with high-performance lubricants and oils
                    specially formulated for aviation needs.
                  </li>
                  <li>
                    <i className="bx bx-check"></i>
                    <b>Sealants and Adhesives:</b> Ensure strong structural
                    integrity of your aircraft with our high-quality sealants
                    and adhesives.
                  </li>
                  <li>
                    <i className="bx bx-check"></i>
                    <b>Filters and Filtration Systems:</b> Maintain optimal
                    engine performance with premium filters that extend the life
                    of critical components.
                  </li>
                  <li>
                    <i className="bx bx-check"></i>
                    <b>Fasteners and Hardware:</b> From bolts and nuts to rivets
                    and screws, we provide reliable hardware for every part of
                    your aircraft.
                  </li>
                  <li>
                    <i className="bx bx-check"></i>
                    <b>Safety and Survival Equipment:</b> Prioritize the safety
                    of your crew and passengers with life vests, emergency
                    oxygen systems, and a wide range of survival equipment.
                  </li>
                </ul>

                <div className="car-service-list-wrap mt-4">
                  <div className="row align-items-center">
                    

                    <div className="col-lg-12 col-md-6">
                      <div className="car-service-list">
                        <h4>Why Choose NPCO?</h4>
                        <ul>
                          <li>
                            <i className="bx bx-check"></i>
                            <b>Quality Assurance:</b> Each product undergoes
                            rigorous testing to eliminate any defects that could
                            compromise safety.
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            <b>Global Reach:</b> With a worldwide supplier and
                            distribution network, NPCO supports aviation
                            professionals across the globe.
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            <b>Customer-Centric Approach:</b> Customer
                            satisfaction is our ultimate goal, and every service
                            we deliver is aligned with client needs.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <h4 className="mt-4">Contact Us Today!</h4>
                <p>
                  Choose NPCO and experience the difference by getting our
                  cutting-edge aircraft consumables and expendables services
                  that cater to your specific needs. Whether you operate a small
                  fleet or a large-scale aviation operation, we have the
                  products and expertise to meet your requirements.
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
