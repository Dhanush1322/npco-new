"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const CaseStudies: React.FC = () => {
  // Dynamic data object
  const caseData = {
    section: {
      subtitle: "Blogs",
      title: "Latest News",
    },
    cases: [
      {
        image: {
          src: "/blog/b1.webp",
          alt: "Image",
        },
        title: "Ground Support Equipment (GSE)",
        link: "/case-studies/case-studies-details",
      },
      {
        image: {
            src: "/blog/b2.webp",
          alt: "Image",
        },
        title: "Navigating Excellence with NPCO",
        link: "/case-studies/case-studies-details2",
      },
      {
        image: {
           src: "/blog/b3.webp",
          alt: "Image",
        },
        title: "Ensuring Soaring Safety",
        link: "/case-studies/case-studies-details3",
      },
      {
        image: {
           src: "/blog/b4.webp",
          alt: "Image",
        },
        title: "Aircraft Tools – Aircraft",
        link: "/case-studies/case-studies-details4",
      },
       {
        image: {
           src: "/blog/b5.webp",
          alt: "Image",
        },
        title: "Aircraft Consumables and Expendables",
        link: "/case-studies/case-studies-details5",
      },
    ],
  };

  return (
    <>
      <div className="case-area pb-100 bg-gray-100">
        <div className="container">
          <div className="section-title home-four-section-title">
            <span>{caseData.section.subtitle}</span>
            <h2>{caseData.section.title}</h2>
          </div>

          {/* ✅ 3-column grid instead of Swiper */}
          <div className="row">
            {caseData.cases.map((caseItem, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-4">
                <div className="case-wrap case-style-2">
                  <div className="single-case">
                    <Image
                      src={caseItem.image.src}
                      alt={caseItem.image.alt}
                      className="w-100"
                      width={385}
                      height={400}
                    />
                    <Link href={caseItem.link} className="link-icon">
                      <i className="bx bx-plus"></i>
                    </Link>
                  </div>

                  <h3>
                    <Link href={caseItem.link}>{caseItem.title}</Link>
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .case-area {
          background-color: #04063c; /* same bg color */
          padding-top: 200px;
          padding-bottom: 100px;
        }
      `}</style>
    </>
  );
};

export default CaseStudies;
