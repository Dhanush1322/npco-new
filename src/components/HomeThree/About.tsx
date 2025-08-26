"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const About: React.FC = () => {
  // Dynamic data object
  const aboutData = {
    image: {
      src: "/images/about-img-three.png",
      alt: "Image",
      aosDelay: "300",
    },
    title: "We Complete Every Project With Extra Care As Customer Need",
    subtitle: "About Us",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel.",
    features: [
      [
        { icon: "flaticon-checked", text: "Advanced caching" },
        { icon: "flaticon-checked", text: "Unlimited applications" },
        { icon: "flaticon-checked", text: "PHP 7 ready transfer" },
      ],
      [
        { icon: "flaticon-checked", text: "PHP ready serves" },
        { icon: "flaticon-checked", text: "24/7 free extra support" },
        { icon: "flaticon-checked", text: "Optimized stack" },
      ],
    ],
    learnMoreLink: "/about",
  };

  return (
    <>
      <div className="about-area pt-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="about-img"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={aboutData.image.aosDelay}
              >
                <Image
                  src={aboutData.image.src}
                  alt={aboutData.image.alt}
                  width={375}
                  height={440}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="about-content"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="500"
              >
                <span>{aboutData.subtitle}</span>
                <h2>{aboutData.title}</h2>
                <p>{aboutData.description}</p>

                <div className="row">
                  {aboutData.features.map((column, index) => (
                    <div className="col-lg-6 col-sm-6" key={index}>
                      <ul>
                        {column.map((feature, i) => (
                          <li key={i}>
                            <i className={feature.icon}></i>
                            {feature.text}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <Link href={aboutData.learnMoreLink} className="default-btn">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
