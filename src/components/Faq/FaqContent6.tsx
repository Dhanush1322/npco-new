"use client";

import React, { useState } from "react";
import Image from "next/image";

const FaqContent: React.FC = () => {
  // State to manage which accordion item is expanded
  const [expanded, setExpanded] = useState<string>("a");

  // ✅ Boeing Supplier FAQ data array
  const faqData = [
    {
      id: "a",
      question:
        "What types of precision machined components does NPCO offer as a Boeing supplier?",
      answer: (
        <p>
          NPCO specializes in producing high-precision machined parts essential
          for Boeing aircraft assembly to be at the top when it comes to the
          best Boeing suppliers. Our capabilities encompass a wide range of
          components with tight tolerances to ensure optimal performance and
          reliability.
        </p>
      ),
    },
    {
      id: "b",
      question:
        "How does NPCO contribute to sustainability in the aerospace industry?",
      answer: (
        <p>
          NPCO strives to drive innovation and sustainability in aerospace at
          the same time. We invest in research and development mechanisms to
          create cutting-edge solutions to enhance aircraft performance as well
          as strive hard to follow eco-friendly practices throughout all our
          procedures.
        </p>
      ),
    },
    {
      id: "c",
      question:
        "Can NPCO customize avionics systems to meet specific Boeing aircraft requirements?",
      answer: (
        <p>
          Yes. At NPCO, we believe that every person and organization has
          different requirements and thus we are one of those Boeing suppliers
          known for delivering tailored solutions for our client’s satisfaction.
        </p>
      ),
    },
    {
      id: "d",
      question:
        "What logistics and supply chain solutions does NPCO offer to support Boeing's manufacturing operations?",
      answer: (
        <p>
          NPCO provides comprehensive supply chain solutions to streamline
          procurement processes for Boeing. Our logistics expertise ensures
          timely delivery and efficient inventory management, contributing to
          the overall success of Boeing's manufacturing operations.
        </p>
      ),
    },
    {
      id: "e",
      question:
        "How does NPCO ensure the quality and compliance of its products as a Boeing supplier?",
      answer: (
        <p>
          We focus on our major responsibility not only towards our clients but
          also towards ourselves, ensuring they never face even the smallest
          issue because of us. We maintain the highest level of certifications,
          including ISO, to ensure our products and processes consistently meet
          or exceed global quality benchmarks. Additionally, we strictly adhere
          to Boeing's specific requirements and standards, demonstrating our
          commitment to being a reliable and compliant partner in their supply
          chain.
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
            <h2 style={{ color: "black" }}>Frequently Asked Questions</h2>
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
