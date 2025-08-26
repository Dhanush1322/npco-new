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
      question: "What types of Ground Support Equipment does NPCO offer for airports in Saudi Arabia?",
      answer: (
        <>
          <p>
             We have a specialized team that has expertise and advanced equipment tailored for airports including aircraft tugs, baggage loaders, ground power units (GPUs), and aircraft de-icing equipment. 
           </p>
         
        </>
      ),
    },
    {
      id: "b",
      question: "How does NPCO ensure the quality and reliability of its Ground Support Equipment services?",
      answer: (
        <p>
         At NPCO, quality and reliability are the epicenters of our GSE services. We make sure that every process that is undergoing in our assistance adheres to industry standards along with regular inspections and performanc
        </p>
      ),
    },
    {
      id: "c",
      question: "Can NPCO provide customized Ground Support Equipment solutions for specific airport requirements in Saudi Arabia?",
      answer: (
        <p>
         Yes. We understand that from a personal to the organization, we can satisfy our customers only when our services fulfill their requirements and we understand that the customization of services is possible according to their requirements with the help of advanced technology. We specialize in providing tailored GSE solutions to meet their unique needs according to the airports
        </p>
      ),
    },
    {
      id: "d",
      question: "What measures does NPCO take to ensure compliance with aviation regulations in Saudi Arabia?",
      answer: (
        <p>
          We are a leading name in Ground Support Equipment GSE for Airports in Saudi Arabia and we consider the importance of complying with the current legal scenarios. We are committed to strict adherence to the aviation regulations of Saudi Arabia. Our GSE services are designed and implemented according to the local and international standards that are set 
        </p>
      ),
    },
    {
      id: "e",
      question: "How does NPCO handle emergency repairs and maintenance for Ground Support Equipment at airports in Saudi Arabia?",
      answer: (
        <p>
          NPCO has a dedicated emergency response team available 24/7 to handle urgent repairs and maintenance of Ground Support Equipment at airports in Saudi Arabia. Our rapid response capabilities are crucial in minimizing downtime and ensuring the continuity of airport operations.


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

export default Faq;
