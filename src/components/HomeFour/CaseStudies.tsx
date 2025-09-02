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
        image: { src: "/blog/booeing.jpg", alt: "Image" },
        title: "Boeing Supplier",
        link: "/case-studies/case-studies-details6",
      },
      {
        image: { src: "/blog/b1.webp", alt: "Image" },
        title: "Ground Support Equipment (GSE)",
        link: "/case-studies/case-studies-details",
      },
      {
        image: { src: "/blog/b2.webp", alt: "Image" },
        title: "Navigating Excellence with NPCO",
        link: "/case-studies/case-studies-details2",
      },
      {
        image: { src: "/blog/b3.webp", alt: "Image" },
        title: "Ensuring Soaring Safety",
        link: "/case-studies/case-studies-details3",
      },
      {
        image: { src: "/blog/b4.webp", alt: "Image" },
        title: "Aircraft Tools – Aircraft",
        link: "/case-studies/case-studies-details4",
      },
      {
        image: { src: "/blog/b5.webp", alt: "Image" },
        title: "Aircraft Consumables and Expendables",
        link: "/case-studies/case-studies-details5",
      },
    ],
  };

  return (
    <>
      <div className="case-area pb-100 bg-gray-100">
        <div className="container">
          <div
            className="section-title home-four-section-title"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <span>{caseData.section.subtitle}</span>
            <h2>{caseData.section.title}</h2>
          </div>

          {/* ✅ 3-column grid with AOS stagger */}
          <div className="row">
            {caseData.cases.map((caseItem, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6 mb-4"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={index * 200} // stagger effect
              >
                <div className="case-wrap case-style-2">
                  <div className="single-case">
                   <div className="image-wrapper">
  <Image
    src={caseItem.image.src}
    alt={caseItem.image.alt}
    fill
    className="image"
  />
</div>


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
      .image-wrapper {
  position: relative;
  width: 100%;
  height: 400px; /* fixed height you want */
  overflow: hidden;
}

.image {
  object-fit: cover; /* makes sure it doesn’t stretch */
}

      .single-case {
      }
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
