"use client";

import React from "react";

// Data object containing all dynamic content
const whyChooseUsData = {
  sectionTitle: {
    subtitle: "Why Choose Us",
    title: "Our Platform Takes Away The Hard Process Of Creating Your Website",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nisi rem quo itaque minus dolorem ratione vero, quisquam reiciendis quia atque eos aspernatur."
  },
  features: [
    {
      id: 1,
      icon: "flaticon-technical-support",
      title: "Safe Security",
      description: "Lorem ipsum dolor sit labore amet, consectetur adipiscing elit, sed do eiusmod tempor."
    },
    {
      id: 2,
      icon: "flaticon-shield",
      title: "Technical Support",
      description: "Lorem ipsum dolor sit labore amet, consectetur adipiscing elit, sed do eiusmod tempor."
    },
    {
      id: 3,
      icon: "flaticon-support",
      title: "Live Support",
      description: "Lorem ipsum dolor sit labore amet, consectetur adipiscing elit, sed do eiusmod tempor."
    },
    {
      id: 4,
      icon: "flaticon-technical-support",
      title: "Free Try",
      description: "Lorem ipsum dolor sit labore amet, consectetur adipiscing elit, sed do eiusmod tempor."
    },
    {
      id: 5,
      icon: "flaticon-shield",
      title: "Advanced Technology",
      description: "Lorem ipsum dolor sit labore amet, consectetur adipiscing elit, sed do eiusmod tempor."
    },
    {
      id: 6,
      icon: "flaticon-support",
      title: "Competitive Pricing",
      description: "Lorem ipsum dolor sit labore amet, consectetur adipiscing elit, sed do eiusmod tempor."
    }
  ]
};

const WhyChooseUs: React.FC = () => {
  return (
    <>
      <div className="choose-ue-area pt-100">
        <div className="container">
          <div className="section-title">
            <span>{whyChooseUsData.sectionTitle.subtitle}</span>
            <h2>{whyChooseUsData.sectionTitle.title}</h2>
            <p>{whyChooseUsData.sectionTitle.description}</p>
          </div>
          <div className="row align-items-center">
            {whyChooseUsData.features.map((feature) => (
              <div key={feature.id} className="col-lg-6">
                <div className="choose-card">
                  <span>
                    {feature.id < 10 ? `0${feature.id}` : feature.id} <i className={feature.icon}></i>
                  </span>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;