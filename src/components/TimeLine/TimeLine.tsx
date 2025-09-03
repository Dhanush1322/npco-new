"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css"; // 👈 Import AOS styles

// Data object containing all dynamic content
const industriesData = {
  sectionTitle: {
    subtitle: "Our Journey",
    title: "NPCO Growth & Expansion Timeline",
    description:
      "From humble beginnings in 2016 to becoming a multi-sector leader in aviation, marine, railway, and defense support, NPCO continues to grow and empower transportation in the Kingdom of Saudi Arabia.",
  },
  centerImage: {
    src: "/images/offer1.png",
    alt: "Industries We Serve",
  },
  leftIndustries: [
    {
      id: 1,
      img: "/timeline/p1.webp",
      title: "Phase 1",
      subtitle: "NPCO Establishment",
      date: "2016 – 25-05-2016",
      link: "/services/service-details/",
    },
    {
      id: 2,
      img: "/timeline/p2.webp",
      title: "Phase 2",
      subtitle: "Supplies for the Military Doctors",
      date: "2017",
      link: "/services/service-details/",
    },
    {
      id: 3,
      img: "/timeline/p3.webp",
      title: "Phase 3",
      subtitle: "GSE Service for Military & Civil Sectors",
      date: "2019",
      link: "/services/service-details/",
    },
    {
      id: 4,
      img: "/timeline/p4.webp",
      title: "Phase 4",
      subtitle: "Supplies for the Railway Sector",
      date: "2020",
      link: "/services/service-details/",
    },
  ],
  rightIndustries: [
    {
      id: 5,
      img: "/timeline/p5.webp",
      title: "Phase 5",
      subtitle: "Launching the Marine Sector",
      date: "2021",
      link: "/services/service-details/",
    },
    {
      id: 6,
      img: "/timeline/p6.webp",
      title: "Phase 6",
      subtitle: "Aircraft Line Maintenance Service",
      date: "2022",
      link: "/services/service-details/",
    },
    {
      id: 7,
      img: "/timeline/p7.webp",
      title: "Phase 7",
      subtitle: "Opening Madinah Station",
      date: "2024",
      link: "/services/service-details/",
    },
    {
      id: 8,
      img: "/timeline/p8.webp",
      title: "Phase 8",
      subtitle: "Opening of Al Qassim, Abha, Jeddah and Dammam",
      date: "2025",
      link: "/services/service-details/",
    },
  ],
};

const TimeLine: React.FC = () => {
  const { sectionTitle, centerImage, leftIndustries, rightIndustries } =
    industriesData;

  // ✅ Init AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true, // run only once
    });
  }, []);

  return (
    <>
      <div className="industries-serve-area pt-100 pb-0">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <span>{sectionTitle.subtitle}</span>
            <h2>{sectionTitle.title}</h2>
            <p>{sectionTitle.description}</p>
          </div>

          <div className="row align-items-center">
            {/* Left Column */}
            <div className="col-lg-4">
              <div className="row">
                {leftIndustries.map((industry, index) => (
                  <div
                    key={industry.id}
                    className="col-lg-12 col-md-6"
                    data-aos="fade-right"
                    data-aos-delay={index * 200} // stagger animation
                  >
                    <div className="single-industries d-flex align-items-center gap-3 p-3 bg-white  shadow-sm">
                      <Image
                        src={industry.img}
                        alt={industry.title}
                        width={70}
                        height={70}
                        className="rounded"
                      />
                      <div className="text-start">
                        <h3 className="mb-1">{industry.title}</h3>
                        <span className="d-block">{industry.subtitle}</span>
                        <p className="text-muted small mb-1">{industry.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Center Image */}
            <div className="col-lg-4" data-aos="zoom-in">
              <div className="industries-img text-center">
                <Image
                  src="/line/time.jpeg"
                  alt={centerImage.alt}
                  width={370}
                  height={390}
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="col-lg-4">
              <div className="row">
                {rightIndustries.map((industry, index) => (
                  <div
                    key={industry.id}
                    className="col-lg-12 col-md-6"
                    data-aos="fade-left"
                    data-aos-delay={index * 200}
                  >
                    <div className="right-box single-industries d-flex align-items-center gap-3 p-3 bg-white shadow-sm">
                      <Image
                        src={industry.img}
                        alt={industry.title}
                        width={70}
                        height={70}
                        className="rounded"
                      />
                      <div className="text-start">
                        <h3 className="mb-1">{industry.title}</h3>
                        <span className="d-block">{industry.subtitle}</span>
                        <p className="text-muted small mb-1">{industry.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
      .industries-serve-area{
      overflow:hidden;
      }
        .left-box {
          border-radius: 40px !important;
        }
        .section-title,
        h2 {
          color: white !important;
        }
        .section-title p {
          color: #d1d5db;
        }
      `}</style>
    </>
  );
};

export default TimeLine;
