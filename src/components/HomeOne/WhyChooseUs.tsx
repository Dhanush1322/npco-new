"use client";

import React from "react";
import Image from "next/image";

const WhyChooseUs: React.FC = () => {
  // Dynamic data object
  const chooseData = {
    subtitle: "Why Choose Us",
    title: "Our Platform Takes Away The Hard Process Of Creating Your Website",
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
    ],
    image: {
      src: "/images/choose-img.png",
      alt: "Image",
      aosDelay: "500",
    },
  };

  return (
    <>
      <div className="choose-ue-area pb-100">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <div
                className="choose-title"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="100"
              >
                <span>{chooseData.subtitle}</span>
                <h2>{chooseData.title}</h2>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              {chooseData.cards.map((card, index) => (
                <div
                  className="choose-card"
                  data-aos="fade-in"
                  data-aos-duration="800"
                  data-aos-delay={card.aosDelay}
                  key={index}
                >
                  <span>
                    {card.number} <i className={card.icon}></i>
                  </span>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              ))}
            </div>

            <div className="col-lg-6">
              <div
                className="choose-img"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay={chooseData.image.aosDelay}
              >
                <Image
                  src={chooseData.image.src}
                  alt={chooseData.image.alt}
                  width={807}
                  height={704}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
