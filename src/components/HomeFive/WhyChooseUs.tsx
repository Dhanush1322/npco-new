"use client";

import React from "react";

const WhyChooseUs: React.FC = () => {
  // Dynamic data object
  const chooseData = {
    subtitle: "Why Choose Us",
    title: "Our Platform Takes Away The Hard Process Of Creating Your Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nisi rem quo itaque minus dolorem ratione vero, quisquam reiciendis quia atque eos aspernatur.",
    cards: [
      {
        number: "01",
        icon: "flaticon-technical-support",
        title: "Safe Security",
        description:
          "Lorem ipsum dolor sit labore amet, consectetur adipiscing elit, sed do eiusmod tempor.",
        aosDelay: "200",
      },
      {
        number: "02",
        icon: "flaticon-shield",
        title: "Technical Support",
        description:
          "Lorem ipsum dolor sit labore amet, consectetur adipiscing elit, sed do eiusmod tempor.",
        aosDelay: "300",
      },
      {
        number: "03",
        icon: "flaticon-support",
        title: "Live Support",
        description:
          "Lorem ipsum dolor sit labore amet, consectetur adipiscing elit, sed do eiusmod tempor.",
        aosDelay: "400",
      },
      {
        number: "04",
        icon: "flaticon-technical-support",
        title: "Free Try",
        description:
          "Lorem ipsum dolor sit labore amet, consectetur adipiscing elit, sed do eiusmod tempor.",
        aosDelay: "500",
      },
      {
        number: "05",
        icon: "flaticon-shield",
        title: "Advanced Tchnology",
        description:
          "Lorem ipsum dolor sit labore amet, consectetur adipiscing elit, sed do eiusmod tempor.",
        aosDelay: "600",
      },
      {
        number: "06",
        icon: "flaticon-support",
        title: "Competitive Pricing",
        description:
          "Lorem ipsum dolor sit labore amet, consectetur adipiscing elit, sed do eiusmod tempor.",
        aosDelay: "700",
      },
    ],
  };

  return (
    <>
      <div className="choose-ue-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span>{chooseData.subtitle}</span>
            <h2>{chooseData.title}</h2>
            <p>{chooseData.description}</p>
          </div>

          <div className="row align-items-center">
            {chooseData.cards.map((card, index) => (
              <div
                className="col-lg-6"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay={card.aosDelay}
                key={index}
              >
                <div className="choose-card">
                  <span>
                    {card.number} <i className={card.icon}></i>
                  </span>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
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