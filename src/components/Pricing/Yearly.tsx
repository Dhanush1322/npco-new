"use client";

import React from "react";
import Link from "next/link";

// Data object containing all dynamic content
const pricingData = {
  plans: [
    {
      id: 1,
      title: "Basic",
      subtitle: "Build A Website",
      price: 39,
      period: "y",
      features: [
        { icon: "bx bx-check", text: "Drag & Drop Builder" },
        { icon: "bx bx-check", text: "Lead Generation & Sales" },
        { icon: "bx bx-check", text: "Boot & Digital Assistants" },
        { icon: "bx bx-check", text: "Customer Service" },
        { icon: "bx bx-x", text: "Up to 1000 Subscribers" },
        { icon: "bx bx-x", text: "Unlimited Broadcasts" },
        { icon: "bx bx-x", text: "Landing Pages & Web Widgets" },
      ],
      link: "/contact",
      popular: false,
    },
    {
      id: 2,
      title: "Standard",
      subtitle: "Build A Website",
      price: 79,
      period: "y",
      features: [
        { icon: "bx bx-check", text: "Drag & Drop Builder" },
        { icon: "bx bx-check", text: "Lead Generation & Sales" },
        { icon: "bx bx-check", text: "Boot & Digital Assistants" },
        { icon: "bx bx-check", text: "Customer Service" },
        { icon: "bx bx-check", text: "Up to 1000 Subscribers" },
        { icon: "bx bx-x", text: "Unlimited Broadcasts" },
        { icon: "bx bx-x", text: "Landing Pages & Web Widgets" },
      ],
      link: "/contact",
      popular: true,
    },
    {
      id: 3,
      title: "Premium",
      subtitle: "Build A Website",
      price: 99,
      period: "y",
      features: [
        { icon: "bx bx-check", text: "Drag & Drop Builder" },
        { icon: "bx bx-check", text: "Lead Generation & Sales" },
        { icon: "bx bx-check", text: "Boot & Digital Assistants" },
        { icon: "bx bx-check", text: "Customer Service" },
        { icon: "bx bx-check", text: "Up to 1000 Subscribers" },
        { icon: "bx bx-check", text: "Unlimited Broadcasts" },
        { icon: "bx bx-check", text: "Landing Pages & Web Widgets" },
      ],
      link: "/contact",
      popular: false,
    },
  ],
};

const Yearly: React.FC = () => {
  return (
    <>
      <div
        className="row justify-content-center"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="200"
      >
        {pricingData.plans.map((plan) => (
          <div key={plan.id} className="col-lg-4 col-md-6">
            <div className="single-pricing">
              <div className="pricing-top-heading">
                <h3>{plan.title}</h3>
                <p>{plan.subtitle}</p>
              </div>
              <span>
                ${plan.price}
                <sub>/{plan.period}</sub>
              </span>
              <ul>
                {plan.features.map((feature, index) => (
                  <li key={index}>
                    <i className={feature.icon}></i>
                    {feature.text}
                  </li>
                ))}
              </ul>
              <Link href={plan.link} className="default-btn">
                Get Started
              </Link>
              {plan.popular && <strong className="popular">Popular</strong>}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Yearly;
