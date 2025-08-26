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
      question: "What sets NPCO apart from other suppliers in the Airbus network?",
      answer: (
        <>
          <p>
           NPCO stands out with its global reach, local expertise, unrivaled product portfolio, and commitment to innovation. Our stringent quality control measures ensure that every component meets the highest industry standards
          </p>
         
        </>
      ),
    },
    {
      id: "b",
      question: "How does NPCO tailor solutions to meet the specific needs of clients?",
      answer: (
        <p>
         At NPCO, we adopt a partnership approach while actively collaborating with clients to understand their unique requirements. This ensures that our deliveries align seamlessly with their operational goals, providing tailored 
        </p>
      ),
    },
    {
      id: "c",
      question: "How does NPCO prioritize environmental responsibility in the aerospace industry?",
      answer: (
        <p>
         As, a big name among Airbus suppliers, NPCO never compromises with

our responsibility towards the planet and environment as well as our customers and clients. NPCO is dedicated to sustainable practices, prioritizing eco-friendly materials and processes. As a responsible member of the Airbus suppliers network, we contribute to a greener future for aviation while maintaining the highest standards of quality and reli
        </p>
      ),
    },
    {
      id: "d",
      question: "Can NPCO handle deliveries on a global scale?",
      answer: (
        <p>
      Absolutely. NPCO excels in navigating the complexities of global supply chains with our extensive network that makes us the best Airbus supplier in the aviation industry. We ensure on-time deliveries worldwide, maintaining the same level of reliability, accountability, and precision that defines our service.
        </p>
      ),
    },
    {
      id: "e",
      question: "How does NPCO ensure transparency and accountability in its operations?",
      answer: (
        <p>
          Transparency is a core value at NPCO. We maintain open communication lines, providing real-time updates on orders and deliveries. Our commitment to accountability means taking responsibility for every step of the supply chain and instilling confidence in our clients’ operations.
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
