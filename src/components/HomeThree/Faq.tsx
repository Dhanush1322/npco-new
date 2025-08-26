"use client";

import React, { useState } from "react";
import Image from "next/image";

const Faq: React.FC = () => {
  // State to manage which accordion item is expanded
  const [expanded, setExpanded] = useState<string>("a");

  // FAQ data array
  const faqData = [
    {
      id: "a",
      question: "What Are The Business Advisory Company?",
      answer: (
        <>
          <p>
            A business advisory company helps organizations improve performance,
            solve problems, and implement strategic initiatives. They offer
            expert guidance in areas such as finance, operations, marketing, and
            growth.
          </p>
          <p>
            Services often include market research, financial planning, risk
            management, and organizational development. Learn more on our{" "}
            <a href="#">services page</a>.
          </p>
        </>
      ),
    },
    {
      id: "b",
      question: "Research Is What Makes An Effective Business Plan?",
      answer: (
        <p>
          Absolutely. A well-researched business plan is crucial for making
          informed decisions, identifying market opportunities, analyzing
          competitors, and setting achievable goals. Data-driven planning
          increases your chances of success and investor confidence.
        </p>
      ),
    },
    {
      id: "c",
      question: "How Achieving Small Business Success?",
      answer: (
        <p>
          Small business success relies on clear goals, excellent customer
          service, sound financial management, and continuous innovation.
          Staying agile and responsive to market trends is also key.
        </p>
      ),
    },
    {
      id: "d",
      question: "Why Business Planing Is Important?",
      answer: (
        <p>
          Business planning helps set clear objectives, allocate resources
          efficiently, and measure progress. It serves as a roadmap for
          decision-making and minimizes risks by preparing for potential
          challenges.
        </p>
      ),
    },
    {
      id: "e",
      question: "How Do You Startup?",
      answer: (
        <p>
          To start a business, identify a problem to solve, validate your idea
          through market research, create a business plan, register your
          business, and secure necessary funding. Then launch your product or
          service and continuously improve based on feedback.
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
      <div className="faq-area pt-100">
        <div className="container">
          <div className="section-title">
            <span>FAQ,s</span>
            <h2>Frequently Asked Questions</h2>
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

export default Faq;
