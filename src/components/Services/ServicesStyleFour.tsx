"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

// Data object containing all dynamic content
const industriesData = {
  sectionTitle: {
    subtitle: "What We Offer",
    title: "Industries We Serve",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates magni fugit, quod iure quibusdam, omnis nisi cum, nostrum nulla deleniti mollitia tenetur."
  },
  centerImage: {
    src: "/images/offer1.png",
    alt: "Industries We Serve",
  },
  leftIndustries: [
    {
      id: 1,
      icon: "flaticon-machine-learning",
      title: "Heavy Industry",
      subtitle: "All kind of industry",
      link: "/services/service-details/"
    },
    {
      id: 2,
      icon: "flaticon-artificial-intelligence",
      title: "Transportation",
      subtitle: "All kind of industry",
      link: "/services/service-details/"
    },
    {
      id: 3,
      icon: "flaticon-health",
      title: "Health Care",
      subtitle: "All kind of industry",
      link: "/services/service-details/"
    },
    {
      id: 4,
      icon: "flaticon-automation",
      title: "Manufacturing",
      subtitle: "All kind of industry",
      link: "/services/service-details/"
    }
  ],
  rightIndustries: [
    {
      id: 5,
      icon: "flaticon-choice",
      title: "Logistic",
      subtitle: "All kind of industry",
      link: "/services/service-details/"
    },
    {
      id: 6,
      icon: "flaticon-deep-learning",
      title: "Real Estate",
      subtitle: "All kind of industry",
      link: "/services/service-details/"
    },
    {
      id: 7,
      icon: "flaticon-cyber-security",
      title: "Banking",
      subtitle: "All kind of industry",
      link: "/services/service-details/"
    },
    {
      id: 8,
      icon: "flaticon-blockchain",
      title: "Automobile",
      subtitle: "All kind of industry",
      link: "/services/service-details/"
    }
  ]
};

const ServicesStyleFour: React.FC = () => {
  const { sectionTitle, centerImage, leftIndustries, rightIndustries } = industriesData;

  return (
    <>
      <div className="industries-serve-area pt-100 pb-0">
        <div className="container">
          <div className="section-title">
            <span>{sectionTitle.subtitle}</span>
            <h2>{sectionTitle.title}</h2>
            <p>{sectionTitle.description}</p>
          </div>
          
          <div className="row align-items-center">
            <div className="col-lg-4">
              {/* Left Items */}
              <div className="row">
                {leftIndustries.map((industry) => (
                  <div key={industry.id} className="col-lg-12 col-md-6">
                    <div className="single-industries">
                      <i className={industry.icon}></i>
                      <h3>{industry.title}</h3>
                      <span>{industry.subtitle}</span>
                      <Link href={industry.link} className="right-icon">
                        <span className="bx bx-chevrons-right"></span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-4">
              <div className="industries-img">
                <Image
                  src={centerImage.src}
                  alt={centerImage.alt}
                  width={370}
                  height={390}
                />
              </div> 
            </div>

            <div className="col-lg-4">
              {/* Right Items */}
              <div className="row">
                {rightIndustries.map((industry) => (
                  <div key={industry.id} className="col-lg-12 col-md-6">
                    <div className="single-industries right-item">
                      <i className={industry.icon}></i>
                      <h3>{industry.title}</h3>
                      <span>{industry.subtitle}</span>
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

export default ServicesStyleFour;