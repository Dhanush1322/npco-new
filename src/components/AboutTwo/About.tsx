"use client";

import React from "react"; 
import Image from "next/image";

// Data object containing all dynamic content
const aboutData = {
  image: {
    src: "/images/about-img-three.png",
    alt: "About Us Image",
  },
  title: "About Us",
  heading: "We Complete Every Project With Extra Care As Customer Need",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel.",
  features: {
    left: [
      { icon: "flaticon-checked", text: "Advanced caching" },
      { icon: "flaticon-checked", text: "Unlimited applications" },
      { icon: "flaticon-checked", text: "PHP 7 ready transfer" },
    ],
    right: [
      { icon: "flaticon-checked", text: "PHP ready serves" },
      { icon: "flaticon-checked", text: "24/7 Free extra support" },
      { icon: "flaticon-checked", text: "Optimized stack" },
    ],
  }, 
};

const About: React.FC = () => {
  return (
    <>
      <div className="about-area pt-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img">
                <Image
                  src={aboutData.image.src}
                  alt={aboutData.image.alt}
                  width={375}
                  height={440}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-content">
                <span>{aboutData.title}</span>
                <h2>{aboutData.heading}</h2>
                <p>{aboutData.description}</p>
                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <ul>
                      {aboutData.features.left.map((feature, index) => (
                        <li key={index}>
                          <i className={feature.icon}></i>
                          {feature.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <ul>
                      {aboutData.features.right.map((feature, index) => (
                        <li key={index}>
                          <i className={feature.icon}></i>
                          {feature.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
