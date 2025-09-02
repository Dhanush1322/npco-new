"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

// Data object containing all dynamic content
const aboutData = {
  image: {
    src: "/about/shek.jpg",
    alt: "Vision & Mission Image",
  },
  title: "VISION & MISSION",
  heading: "Driving Innovation & Creating Impactful Projects",
  description: `
    Vision 2030 is Saudi Arabia’s transformation strategy. Our challenging mission & vision 
    for 2030 is to enable economic growth through the innovation of transportation, such as Aviation, 
    Marine, and Railway in the commercial and military sectors. We provide limitless solutions and 
    world-class services to form solid business relationships with our clients and partners. 
    
    Beyond transportation, we are also engaged in creating high-quality projects that bring 
    sustainable development, modern infrastructure, and advanced technology adoption. 
    Our dedicated teams ensure every project is executed with precision, passion, and 
    long-term value creation.`,
  features: {
    left: [
      { icon: "flaticon-checked", text: "Innovative transport solutions" },
      { icon: "flaticon-checked", text: "Sustainable development projects" },
      { icon: "flaticon-checked", text: "World-class client partnerships" },
    ],
    right: [
      { icon: "flaticon-checked", text: "Military & commercial expertise" },
      { icon: "flaticon-checked", text: "Global project execution" },
      { icon: "flaticon-checked", text: "Teamwork & creativity" },
    ],
  },
};

const About: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // ✅ Init AOS
  }, []);

  return (
    <>
      <div className="about-area pt-100 pb-100">
        <div className="container">
          <div className="row align-items-center">
            {/* Image Section */}
            <div className="col-lg-6" data-aos="fade-right">
              <div className="about-img">
                <Image
                  src={aboutData.image.src}
                  alt={aboutData.image.alt}
                  width={500}
                  height={400}
                  className="rounded shadow"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="col-lg-6" data-aos="fade-left">
              <div className="about-content">
                <span className="text-amber-600 font-semibold">
                  {aboutData.title}
                </span>
                <h2 className="mt-2 mb-3">{aboutData.heading}</h2>
                <p className="mb-4">{aboutData.description}</p>
                <div className="row">
                  <div className="col-lg-6 col-sm-6" data-aos="fade-up" data-aos-delay="200">
                    <ul>
                      {aboutData.features.left.map((feature, index) => (
                        <li key={index} className="about flex items-center gap-2 mb-2">
                          <i className={feature.icon}></i>
                          {feature.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-lg-6 col-sm-6" data-aos="fade-up" data-aos-delay="400">
                    <ul>
                      {aboutData.features.right.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 mb-2">
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

      {/* Scoped styles */}
      <style jsx>{`
      .about-area{
      overflow:hidden;
      }
        .about-content {
          color: white !important;
        }

        .about-content h2,
        .about-content span,
        .about-content li {
          color: white !important;
        }

        .about-content p {
          color: #d1d5db !important; /* light gray for description */
        }
      `}</style>
    </>
  );
};

export default About;
