"use client";

import React, { useState } from "react";
import Image from "next/image";

const FaqContent: React.FC = () => {
  // State to manage which accordion item is expanded
  const [expanded, setExpanded] = useState<string>("a");

  // FAQ data array
  const faqData = [
    {
      id: "a",
      question: "What types of aircraft tools are essential for routine maintenance tasks?",
      answer: (
        <>
          <p>
           Wrenches, screwdrivers, pliers, and specialized tools like torque wrenches and pressure gauges tailored for aircraft systems are some of the ✈ aircraft tools- aircraft maintenance and equipment.
          </p>
         
        </>
      ),
    },
    {
      id: "b",
      question: "Are there specific safety precautions when using aircraft maintenance tools?",
      answer: (
        <p>
          Yes, wearing appropriate and well-functioning personal protective equipment (PPE), following manufacturer guidelines, and ensuring proper tool calibration to maintain safety standards are essential.
        </p>
      ),
    },
    {
      id: "c",
      question: "Where can I purchase reliable aircraft tools- aircraft maintenance and equipment?",
      answer: (
        <p>
          NPCO is a big name when it comes to purchasing ✈reliable aircraft tools- aircraft maintenance and equipment.
        </p>
      ),
    },
    {
      id: "d",
      question: "What are some specialized tools required for avionic systems maintenance?",
      answer: (
        <p>
         Specialized tools such as multimeters, cable testers, and data bus analyzers are some of the tools that are required for avionic system maintenance to troubleshoot and repair communication and navigation syst
        </p>
      ),
    },
    {
      id: "e",
      question: "How often should aircraft tools be inspected and calibrated?",
      answer: (
        <p>
        Regular inspection and calibration of aircraft tools are crucial. It is recommended to follow the manufacturer’s guidelines and industry standards, typically checking and calibrating tools annually or as specified
        </p>
      ),
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
            <span>FAQ,s</span>
            <h2 style={{color:"black"}}>Frequently Asked Questions</h2>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="faq-accordion">
                <div className="accordion">
                  {faqData.map((item) => (
                    <div className="accordion-item" key={item.id}>
                      <button
                        className="accordion-button"
                        onClick={() => toggleAccordion(item.id)}
                        aria-expanded={expanded === item.id}
                      >
                        <div className="d-flex align-items-center gap-1">
                          <i className="bx bx-chevron-right"></i>
                          {item.question}
                        </div>
                      </button>

                      <div
                        className={`accordion-panel ${
                          expanded === item.id ? "expanded" : ""
                        }`}
                      >
                        {item.answer}
                      </div>
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

export default FaqContent;
