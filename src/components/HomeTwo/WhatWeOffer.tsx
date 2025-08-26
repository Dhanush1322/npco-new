"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const WhatWeOffer: React.FC = () => {
  // Dynamic data object
  const offerData = {
    section: {
      subtitle: "What We Offer",
      title: "Industries We Serve",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates magni fugit, quod iure quibusdam, omnis nisi cum, nostrum nulla deleniti mollitia tenetur.",
    },
    image: {
      src: "/images/offer1.png",
      alt: "Image", 
      aosDelay: "400",
    },
    industries: {
      left: [
        {
          icon: "flaticon-machine-learning",
          title: "Heavy Industry",
          description: "All kind of industry",
          link: "/services/service-details/",
          aosDelay: "100",
        },
        {
          icon: "flaticon-artificial-intelligence",
          title: "Transportation",
          description: "All kind of industry",
          link: "/services/service-details/",
          aosDelay: "200",
        },
        {
          icon: "flaticon-health",
          title: "Health Care",
          description: "All kind of industry",
          link: "/services/service-details/",
          aosDelay: "300",
        },
        {
          icon: "flaticon-automation",
          title: "Manufacturing",
          description: "All kind of industry",
          link: "/services/service-details/",
          aosDelay: "900",
        },
      ],
      right: [
        {
          icon: "flaticon-choice",
          title: "Logistic",
          description: "All kind of industry",
          link: "/services/service-details/",
          aosDelay: "500",
        },
        {
          icon: "flaticon-deep-learning",
          title: "Real Estate",
          description: "All kind of industry",
          link: "/services/service-details/",
          aosDelay: "600",
        },
        {
          icon: "flaticon-cyber-security",
          title: "Banking",
          description: "All kind of industry",
          link: "/services/service-details/",
          aosDelay: "700",
        },
        {
          icon: "flaticon-blockchain",
          title: "Automobile",
          description: "All kind of industry",
          link: "/services/service-details/",
          aosDelay: "800",
        },
      ],
    },
  };

  return (
    <>
      <div className="industries-serve-area pt-100 pb-0">
        <div className="container">
          <div className="section-title">
            <span>{offerData.section.subtitle}</span>
            <h2>{offerData.section.title}</h2>
            <p>{offerData.section.description}</p>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-4">
              {/* left items */}
              <div className="row">
                {offerData.industries.left.map((industry, index) => (
                  <div className="col-lg-12 col-md-6" key={index}>
                    <div
                      className="single-industries"
                      data-aos="fade-in"
                      data-aos-duration="800"
                      data-aos-delay={industry.aosDelay}
                    >
                      <i className={industry.icon}></i>
                      <h3>{industry.title}</h3>
                      <span>{industry.description}</span>

                      <Link href={industry.link} className="right-icon">
                        <span className="bx bx-chevrons-right"></span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-4">
              <div
                className="industries-img"
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-delay={offerData.image.aosDelay}
              >
                <Image
                  src={offerData.image.src}
                  alt={offerData.image.alt}
                  width={370}
                  height={390} 
                />
              </div>
            </div>

            <div className="col-lg-4">
              {/* right items */}
              <div className="row">
                {offerData.industries.right.map((industry, index) => (
                  <div className="col-lg-12 col-md-6" key={index}>
                    <div
                      className="single-industries right-item"
                      data-aos="fade-in"
                      data-aos-duration="800"
                      data-aos-delay={industry.aosDelay}
                    >
                      <i className={industry.icon}></i>
                      <h3>{industry.title}</h3>
                      <span>{industry.description}</span>

                      <Link href={industry.link} className="right-icon">
                        <span className="bx bx-chevrons-right"></span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeOffer;