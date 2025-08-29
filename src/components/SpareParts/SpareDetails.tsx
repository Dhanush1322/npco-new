"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

// React Icons
import {
  FaPlane,
  FaShippingFast,
  FaTools,
  FaCheckCircle,
  FaWarehouse,
} from "react-icons/fa";

// Shape Images
import shapeImg1 from "../../../public/images/shape/services-shape/1.png";
import shapeImg2 from "../../../public/images/shape/services-shape/2.png";
import shapeImg3 from "../../../public/images/shape/services-shape/3.png";
import shapeImg4 from "../../../public/images/shape/services-shape/4.png";
import shapeImg5 from "../../../public/images/shape/services-shape/5.png";
import shapeImg6 from "../../../public/images/shape/services-shape/6.png";

// Data object containing all dynamic content
const businessData = {
  title: "NPCO - Aircraft Spare Parts",
  businessItems: [
    {
      icon: <FaPlane size={28} className="text-primary me-2" />,
      title: "Specialized Aircraft Spare Parts Supply",
      description:
        "NPCO specializes in supplying aircraft spare parts to airlines and MROs across the Middle East and beyond.",
    },
    {
      icon: <FaShippingFast size={28} className="text-primary me-2" />,
      title: "Global Inventory & Fast Logistics",
      description:
        "With a strong inventory based in the U.S. and fast logistics worldwide, we ensure timely support for both scheduled and AOG needs.",
    },
    {
      icon: <FaTools size={28} className="text-primary me-2" />,
      title: "Hard-to-Find Parts & Reliable Solutions",
      description:
        "Our team sources hard-to-find parts and provides reliable solutions tailored to each client's requirements.",
    },
    {
      icon: <FaCheckCircle size={28} className="text-primary me-2" />,
      title: "Quality, Compliance & Speed",
      description:
        "We prioritize quality, compliance, and speed in every transaction. Trust NPCO for efficient, responsive, and expert spare parts support.",
    },
    {
      icon: <FaWarehouse size={28} className="text-primary me-2" />,
      title: "Our U.S. Warehouse & Support",
      description: (
        <>
          Taraf Ltd. | Premium Aircraft Services <br />
          📞 +1 929 578 2545 <br />
          📍 CA, USA
        </>
      ),
    },
  ],
  button: {
    text: "Know More",
    link: "/about-2",
  },
  shapeImages: [
    { src: shapeImg1, alt: "Shape 1", width: 300, height: 375 },
    { src: shapeImg2, alt: "Shape 2", width: 300, height: 375 },
    { src: shapeImg3, alt: "Shape 3", width: 41, height: 36 },
    { src: shapeImg4, alt: "Shape 4", width: 20, height: 20 },
    { src: shapeImg5, alt: "Shape 5", width: 28, height: 30 },
    { src: shapeImg6, alt: "Shape 6", width: 25, height: 25 },
  ],
};

const SpareDetails: React.FC = () => {
  const { title, businessItems, button, shapeImages } = businessData;

  return (
    <section className="offer-area pt-100 pb-70">
      <div className="container">
        <div className="row align-items-center">
          {/* Content Section */}
          <div className="col-lg-12">
            <div className="business-content">
              <h2>{title}</h2>
            </div>

            {businessItems.map((item, index) => (
              <div
                className="single-business mb-4 d-flex align-items-start"
                key={index}
              >
                {item.icon}
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
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
      <style jsx>{`
      .single-business{
      margin-left:-70px;
      }
      `}

      </style>
    </section>
  );
};

export default SpareDetails;
