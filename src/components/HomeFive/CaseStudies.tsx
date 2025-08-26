"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const CaseStudies: React.FC = () => {
  // Dynamic data object
  const caseData = {
    section: {
      subtitle: "Case",
      title: "Our Recent Case Studies",
    },
    cases: [
      {
        image: {
          src: "/images/cases/case1.png",
          alt: "Image",
          width: 385,
          height: 400,
        },
        title: "Cognitive Architectures",
        link: "/case-studies/case-studies-details",
      },
      {
        image: {
          src: "/images/cases/case2.png",
          alt: "Image",
          width: 385,
          height: 400,
        },
        title: "Image Detection",
        link: "/case-studies/case-studies-details",
      },
      {
        image: {
          src: "/images/cases/case3.png",
          alt: "Image",
          width: 385,
          height: 400,
        },
        title: "Software Liabries",
        link: "/case-studies/case-studies-details",
      },
      {
        image: {
          src: "/images/cases/case4.png",
          alt: "Image",
          width: 385,
          height: 400,
        },
        title: "Architectures Liabries",
        link: "/case-studies/case-studies-details",
      },
    ],
  };

  return (
    <>
      <div className="case-area pb-100">
        <div className="container">
          <div className="section-title">
            <span>{caseData.section.subtitle}</span>
            <h2>{caseData.section.title}</h2>
          </div>

          <Swiper
            autoHeight={true}
            spaceBetween={25}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 6500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="case-top-wrap"
          >
            {caseData.cases.map((caseItem, index) => (
              <SwiperSlide key={index}>
                <div className="case-wrap">
                  <div className="single-case">
                    <Image
                      src={caseItem.image.src}
                      alt={caseItem.image.alt}
                      className="w-100"
                      width={caseItem.image.width}
                      height={caseItem.image.height}
                    />

                    <Link href={caseItem.link} className="link-icon">
                      <i className="bx bx-plus"></i>
                    </Link>
                  </div>

                  <h3>
                    <Link href={caseItem.link}>{caseItem.title}</Link>
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default CaseStudies;