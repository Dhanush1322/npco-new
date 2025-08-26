"use client";

import React from "react";
import Link from "next/link";

const Features: React.FC = () => {
  // Dynamic data array
  const featuresData = [
    {
      icon: "flaticon-cloud-computing-1",
      title: "Data Science",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita.",
      link: "/services/service-details/",
    },
    {
      icon: "flaticon-engineer",
      title: "Data Engineer",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita.",
      link: "/services/service-details/",
    },
    {
      icon: "flaticon-success",
      title: "Facing AI Challenges",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita.",
      link: "/services/service-details/",
    },
  ];

  return (
    <>
      <div className="features-area pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            {featuresData.map((feature, index) => (
              <div className="col-lg-4 col-sm-6 p-0" key={index}>
                <div className="single-features">
                  <i className={feature.icon}></i>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>

                  <Link href={feature.link} className="read-more-icon">
                    <span className="flaticon-right-arrow"></span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
