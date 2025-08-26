"use client";

import React from "react";
import Image from "next/image";
import { FaTools, FaClock, FaHandshake } from "react-icons/fa";

import teamShape from "../../../public/images/team/team-shape.png";

const impactData = [
  {
    icon: <FaTools size={60} className="text-blue-600" />,
    title: "Reduction",
    description:
      "30% reduction in aircraft turnaround time due to efficient line maintenance protocols.",
    aosDelay: "100",
  },
  {
    icon: <FaClock size={60} className="text-green-600" />,
    title: "On-Time Performance (OTP)",
    description:
      "99.8% On-Time Performance (OTP) consistently achieved at Riyadh and Madinah stations.",
    aosDelay: "200",
  },
  {
    icon: <FaHandshake size={60} className="text-orange-600" />,
    title: "Client Retention Rate",
    description:
      "85% client retention rate through long-term partnerships and service quality.",
    aosDelay: "300",
  },
];

const Team: React.FC = () => {
  return (
    <>
      <div className="team-area pb-70">
        <div className="container">
          <div className="section-title home-four-section-title">
            <span>Our Impact</span>
            <h2>Operational Excellence</h2>
            <p>Where Performance Meets Progress</p>
          </div>

          <div className="row justify-content-center">
            {impactData.map((item, i) => (
              <div
                className="col-lg-4 col-sm-6"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay={item.aosDelay}
                key={i}
              >
                <div className="single-team active text-center">
                  <div className="team-single-img relative flex items-center justify-center">
                    {/* Icon instead of image */}
                    <div className="absolute z-10">{item.icon}</div>

                    {/* Background Shape */}
                    <div className="team-img">
                      <Image
                        src={teamShape}
                        alt="Shape"
                        width={208}
                        height={198}
                      />
                    </div>
                  </div>

                  <div className="team-content mt-3">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .single-team{
          height:300px;
        }
        `}

      </style>
    </>
  );
};

export default Team;
