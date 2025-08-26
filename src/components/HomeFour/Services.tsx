"use client";

import React from "react";
import Image from "next/image";

import shapeImg1 from "../../../public/images/shape/services-shape/1.png";
import shapeImg2 from "../../../public/images/shape/services-shape/2.png";
import shapeImg3 from "../../../public/images/shape/services-shape/3.png";
import shapeImg4 from "../../../public/images/shape/services-shape/4.png";
import shapeImg5 from "../../../public/images/shape/services-shape/5.png";
import shapeImg6 from "../../../public/images/shape/services-shape/6.png";

const timelineData = [
  {
    year: "2016",
    phase: "Phase 1",
    title: "NPCO Establishment",
    date: "25-05-2016",
    aosDelay: "100",
    img:'/timeline/p1.webp'
    },
  {
    year: "2017",
    phase: "Phase 2",
    title: "Supplies for the Military Doctors",
    aosDelay: "200",
     img:'/timeline/p2.webp'
  },
  {
    year: "2019",
    phase: "Phase 3",
    title: "GSE Service for Military & Civil Sectors",
    aosDelay: "300",
     img:'/timeline/p3.webp'
  },
  {
    year: "2020",
    phase: "Phase 4",
    title: "Supplies for the Railway Sector",
    aosDelay: "400",
     img:'/timeline/p4.webp'
  },
  {
    year: "2021",
    phase: "Phase 5",
    title: "Launching the Marine Sector",
    aosDelay: "500",
     img:'/timeline/p5.webp'
  },
  {
    year: "2022",
    phase: "Phase 6",
    title: "Aircraft Line Maintenance Service",
    aosDelay: "600",
     img:'/timeline/p6.webp'
  },
  {
    year: "2024",
    phase: "Phase 7",
    title: "Opening Madinah Station",
    aosDelay: "700",
     img:'/timeline/p7.webp'
  },
  {
    year: "2025",
    phase: "Phase 8",
    title: "Opening of Al Qassim, Abha, Jeddah and Dammam",
    aosDelay: "800",
     img:'/timeline/p8.webp'
  },
];

const Services: React.FC = () => {
  return (
    <>
      <div className="offer-area offer-area-two offer-area-four pt-100 pb-70">
        <div className="container">
          <div className="section-title home-four-section-title">
            <span>Our Journey</span>
            <h2>NPCO Growth & Expansion Timeline</h2>
            <p>
              From humble beginnings in 2016 to becoming a multi-sector leader
              in aviation, marine, railway, and defense support, NPCO continues
              to grow and empower transportation in the Kingdom of Saudi Arabia.
            </p>
          </div>

          {/* Timeline */}
          <div className="row justify-content-center">
            {timelineData.map((item, i) => (
              <div
                className="col-lg-3 col-sm-6"
                key={i}
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={item.aosDelay}
              >
                <div className="service-card timeline-card">
                  <img src={item.img} alt="" className="w-[20px]"/><br />

                  <span className="phase">{item.phase}</span>
                  <h3>{item.title}</h3>
                  <p>
                    <strong>{item.year}</strong>
                    {item.date ? ` – ${item.date}` : ""}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Shape Images */}
        <div className="offer-shape">
          <Image src={shapeImg1} alt="Shape" width={300} height={375} />
          <Image src={shapeImg2} alt="Shape" width={300} height={375} />
          <Image src={shapeImg3} alt="Shape" width={41} height={36} />
          <Image src={shapeImg4} alt="Shape" width={20} height={20} />
          <Image src={shapeImg5} alt="Shape" width={28} height={30} />
          <Image src={shapeImg6} alt="Shape" width={25} height={25} />
        </div>
      </div>

      <style jsx>{`
        .timeline-card {
          text-align: center;
          border: 1px solid #eee;
          padding: 25px;
          margin-bottom: 30px;
          border-radius: 12px;
          background: #fff;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
          height:300px
        }
         .timeline-card img{
         width:100px;
         } 
        .timeline-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }
        .timeline-card .phase {
          display: inline-block;
          font-weight: bold;
          color: #0070f3;
          margin-bottom: 10px;
        }
      `}</style>
    </>
  );
};

export default Services;
