

"use client";

import React, { useState } from "react";
import Image from "next/image";

const WeSupply: React.FC = () => {
  // State to manage which accordion item is expanded
  const [expanded, setExpanded] = useState<string>("a");

  // FAQ data array
 const faqData = [
  {
    id: "a",
    question: "Aircraft Spare Parts & Simulator Devices",
  },
  {
    id: "b",
    question: "Ground Support Equipment Services & Spare Parts",
  },
  {
    id: "c",
    question: "Consumables (Lubrication Oil, Greases & Refined Petroleum Products)",
  },
  {
    id: "d",
    question: "Electrical Parts (Motors & Transformers)",
  },
  {
    id: "e",
    question: "Security Equipment",
  },
  {
    id: "f",
    question: "Expandables (Nuts, Bolts, Rivets, Clips, Bearings, Pins, etc.)",
  },
  {
    id: "g",
    question: "Rotables Parts (Airframe Parts, Engine, APU, Landing Gear, etc.) for Aircraft & Helicopters",
  },
  {
    id: "h",
    question: "General & Aviation Tools, Helicopter & Aircraft Protective Covers, Engine Covers, etc.",
  },
];

  // Toggle accordion item
  const toggleAccordion = (id: string) => {
    setExpanded(expanded === id ? "" : id);
  };

  return (
    <>
      <div className="faq-area ptb-100">
        <div className="container">
          <div className="section-title home-four-section-title">
            <span>We Supply</span>
            <h2>We Supply Everything You Need</h2>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="faq-accordion">
                <div className="accordion">
                  {faqData.map((item) => (
                    <div className="accordion-item" key={item.id}>
                      <button
                        className="accordion-button"
                       
                      >
                        <div className="d-flex align-items-center gap-1">
                         
                          {item.question}
                        </div>
                      </button>

                      
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="faq-img">
                <Image
                  src="/images/faq-img.png"
                  alt="Image"
                  width={360}
                  height={465}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeSupply;
