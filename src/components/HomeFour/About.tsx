"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const About: React.FC = () => {
  // Dynamic data object
  const aboutData = {
    image: {
      src: "/about/shek.jpg",
      alt: "Image",
      aosDelay: "300",
    },
    title: "VISION & MISSION",

    description:
      "Vision 2030 is Saudi Arabia’s transformation strategy. Our challenging mission & vision for 2030 is to enable economic growth through the innovation of transportation, such as Aviation, Marine, and Railway in the commercial and military sectors. And to provide limitless solutions and world-class services, in order to form solid business relationships with our clients and partners through our cadres in creating an atmosphere of optimism, teamwork, and creativity.",


    learnMoreLink: "/about",
  };

  return (
    <>
      <div className="about-area about-area-four pb-100  pt-100">
        <div className="container ">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="about-img"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay={aboutData.image.aosDelay}
              >
                <Image
                  src={aboutData.image.src}
                  alt={aboutData.image.alt}
                  width={650}
                  height={520}   // increased from 420 → 520
                />

              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="about-content"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="500"
              >

                <h2>{aboutData.title}</h2>
                <p>{aboutData.description}</p>


                {/* 
                <Link href={aboutData.learnMoreLink} className="default-btn">
                  Learn More
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
