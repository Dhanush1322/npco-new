"use client";

import React, { useState } from "react";
import Image from "next/image";

const WeSupply: React.FC = () => {
  const [expanded, setExpanded] = useState<string>("a");

  const faqData = [
    { id: "a", question: "Aircraft Spare Parts & Simulator Devices" },
    { id: "b", question: "Ground Support Equipment Services & Spare Parts" },
    {
      id: "c",
      question:
        "Consumables (Lubrication Oil, Greases & Refined Petroleum Products)",
    },
    { id: "d", question: "Electrical Parts (Motors & Transformers)" },
    { id: "e", question: "Security Equipment" },
    {
      id: "f",
      question: "Expandables (Nuts, Bolts, Rivets, Clips, Bearings, Pins, etc.)",
    },
    {
      id: "g",
      question:
        "Rotables Parts (Airframe Parts, Engine, APU, Landing Gear, etc.) for Aircraft & Helicopters",
    },
    {
      id: "h",
      question:
        "General & Aviation Tools, Helicopter & Aircraft Protective Covers, Engine Covers, etc.",
    },
  ];

  const toggleAccordion = (id: string) => {
    setExpanded(expanded === id ? "" : id);
  };

  return (
    <>
      <div className="faq-area ptb-100">
        <div className="container">
          {/* Section Title */}
          <div
            className="section-title home-four-section-title"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <span>We Supply</span>
            <h2>We Supply Everything You Need</h2>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="faq-accordion">
                <div className="accordion">
                  {faqData.map((item, index) => (
                    <div
                      className="accordion-item"
                      key={item.id}
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-delay={200 + index * 100} // stagger effect
                    >
                      <button
                        className={`accordion-button ${
                          expanded === item.id ? "active" : ""
                        }`}
                        onClick={() => toggleAccordion(item.id)}
                      >
                        <div className="d-flex align-items-center gap-1">
                          {item.question}
                        </div>
                      </button>

                      {expanded === item.id && (
                        <div
                          className="accordion-content"
                          data-aos="fade-in"
                          data-aos-duration="800"
                          data-aos-delay="100"
                        >
                         
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeSupply;
