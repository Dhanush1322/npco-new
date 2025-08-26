"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import shapeImg1 from "../../../public/images/shape/services-shape/1.png";
import shapeImg2 from "../../../public/images/shape/services-shape/2.png";
import shapeImg3 from "../../../public/images/shape/services-shape/3.png";
import shapeImg4 from "../../../public/images/shape/services-shape/4.png";
import shapeImg5 from "../../../public/images/shape/services-shape/5.png";
import shapeImg6 from "../../../public/images/shape/services-shape/6.png";

// Data object containing all dynamic content
const servicesData = {
  sectionTitle: {
    title: "Our Professionals Services For You",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure architecto quaerat eaque sapiente accusantium ad ut explicabo consequuntur fuga quidem? Sint.",
  },
  services: [
    {
      id: 1,
      icon: "flaticon-chip",
      title: "Robotics & Drones",
      description:
        "Lorem consectetur ipsum dolor sit amet, adipiscing elit, do eiusmod tempor incididunt sed.",
      link: "/services/service-details/",
    },
    {
      id: 2,
      icon: "flaticon-vr",
      title: "Virtually Reality",
      description:
        "Lorem consectetur ipsum dolor sit amet, adipiscing elit, do eiusmod tempor incididunt sed.",
      link: "/services/service-details/",
    },
    {
      id: 3,
      icon: "flaticon-blockchain",
      title: "Blockchain Project",
      description:
        "Lorem consectetur ipsum dolor sit amet, adipiscing elit, do eiusmod tempor incididunt sed.",
      link: "/services/service-details/",
    },
    {
      id: 4,
      icon: "flaticon-target",
      title: "Image Processing",
      description:
        "Lorem consectetur ipsum dolor sit amet, adipiscing elit, do eiusmod tempor incididunt sed.",
      link: "/services/service-details/",
    },
    {
      id: 5,
      icon: "flaticon-choice",
      title: "Order Management",
      description:
        "Lorem consectetur ipsum dolor sit amet, adipiscing elit, do eiusmod tempor incididunt sed.",
      link: "/services/service-details/",
    },
    {
      id: 6,
      icon: "flaticon-deep-learning",
      title: "Machine Learning",
      description:
        "Lorem consectetur ipsum dolor sit amet, adipiscing elit, do eiusmod tempor incididunt sed.",
      link: "/services/service-details/",
    },
  ],
  shapeImages: [
    { src: shapeImg1, alt: "Shape 1", width: 300, height: 375 },
    { src: shapeImg2, alt: "Shape 2", width: 300, height: 375 },
    { src: shapeImg3, alt: "Shape 3", width: 41, height: 36 },
    { src: shapeImg4, alt: "Shape 4", width: 20, height: 20 },
    { src: shapeImg5, alt: "Shape 5", width: 28, height: 30 },
    { src: shapeImg6, alt: "Shape 6", width: 25, height: 25 },
  ],
};

const ServicesStyleTwo: React.FC = () => {
  const { sectionTitle, services, shapeImages } = servicesData;

  return (
    <>
      <div className="offer-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>{sectionTitle.title}</h2>
            <p>{sectionTitle.description}</p>
          </div>
          <div className="row justify-content-center">
            {services.map((service) => (
              <div key={service.id} className="col-lg-4 col-sm-6">
                <div className="single-offer">
                  <i className={service.icon}></i>
                  <h3>
                    <Link href={service.link}>{service.title}</Link>
                  </h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Shape Images */}
        <div className="offer-shape">
          {shapeImages.map((shape, index) => (
            <Image
              key={index}
              src={shape.src}
              alt={shape.alt}
              width={shape.width}
              height={shape.height}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ServicesStyleTwo;
