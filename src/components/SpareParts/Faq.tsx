"use client";

import React, { useState } from "react";
import Image from "next/image";

const Faq: React.FC = () => {
  // State to manage which accordion item is expanded
  const [expanded, setExpanded] = useState<string>("a");

  // Updated FAQ data array
  const faqData = [
    {
      id: "a",
      question: "Do you support AOG shipments?",
      answer: (
        <p>
          Yes. We arrange same-day shipping from our U.S. stock to all the world if a PO is received before noon local time. 
          We manage customs clearance and delivery coordination.
        </p>
      ),
    },
    {
      id: "b",
      question: "Where is your stock located?",
      answer: (
        <p>
          Most items are stored in the U.S., with rapid shipment to Riyadh and worldwide and full logistics support.
        </p>
      ),
    },
    {
      id: "c",
      question: "Do you serve customers outside Saudi Arabia?",
      answer: (
        <p>
          Yes. We work with airlines and MROs across the world.
        </p>
      ),
    },
    {
      id: "d",
      question: "What are your payment terms?",
      answer: (
        <p>
          We accept prepaid payments (wire transfer only) and offer credit terms to loyal clients.
        </p>
      ),
    },
    {
      id: "e",
      question: "Can you source unavailable parts?",
      answer: (
        <p>
          Yes. Our team specializes in locating hard-to-find or long lead time items.
        </p>
      ),
    },
    {
      id: "f",
      question: "How often is your inventory updated?",
      answer: (
        <p>
          The inventory is updated every month. For real-time availability, contact our sales team.
        </p>
      ),
    },
    {
      id: "g",
      question: "What types of aircraft spare parts does NPCO supply?",
      answer: (
        <p>
          We supply certified aircraft parts for Airbus family, Boeing Family and Embraer Aircrafts including consumables, 
          expendables and rotables, filters, lubricants, sealants, safety items, tires, and landing gears. 
          With a strong global sourcing network and in-stock inventory in the USA and KSA, 
          we support urgent and routine orders with same-day dispatch when required.
        </p>
      ),
    },
    {
      id: "h",
      question: "How fast can NPCO deliver spare parts?",
      answer: (
        <p>
          For high-priority requests, we offer same-day processing and AOG shipping from our U.S. and local warehouses. 
          Our logistics team handles customs clearance, documentation, and end-to-end delivery particularly for clients in the Gulf region.
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
            <span>FAQ’s</span>
            <h2 style={{ color: "black" }}>Frequently Asked Questions – NPCO Parts Sales</h2>
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
                  alt="FAQ Image"
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

export default Faq;
