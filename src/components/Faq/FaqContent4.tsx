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
            question: "What sets NPCO apart from other suppliers of aircraft consumables?",
            answer: (
                <>
                    <p>
                        NPCO stands out due to its unwavering commitment to quality with a customer-centric approach in every service no matter how small or big. We partner with reputable manufacturers and work with the coopera
                    </p>

                </>
            ),
        },
        {
            id: "b",
            question: "How can I be sure that NPCO's products meet industry standards?",
            answer: (
                <p>
                    We believe in putting our best in all the services we provide. Every product in our inventory undergoes rigorous testing, guaranteeing adherence to the highest industry standards.
                </p>
            ),
        },
        {
            id: "c",
            question: "Does NPCO offer a comprehensive range of consumables and expendables?",
            answer: (
                <p>
                    Yes, Being a major name in the manufacturing of aviation, NPCO excels in providing customers with a comprehensive range of aircraft consumables and expendables.
                </p>
            ),
        },
        {
            id: "d",
            question: "How does NPCO handle global distribution and logistics?",
            answer: (
                <p>
                    As we have a big network in the aviation industry worldwide, we consider the responsibilities that come along with it. Our worldwide network of suppliers and distribution centers ensures efficient logistics and timely delivery while understanding the critical nature of aviation operations simultaneously.
                </p>
            ),
        },
        {
            id: "e",
            question: "What customer support services does NPCO offer?",
            answer: (
                <p>
                    NPCO takes pride in its customer-centric approach with a team of dedicated professionals who assist with all inquiries, discuss specific requirements, and provide tailored solutions.
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
                                                className={`accordion-panel ${expanded === item.id ? "expanded" : ""
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
