// "use client";

// import React from "react";
// import Image from "next/image";

// const Licenses: React.FC = () => {
//   // ✅ Dynamic data for licenses & certificates
//   const licenseData = {
//     section: {
//       subtitle: "Licenses & Certificates",
//       title: "Our Authorizations",
//     },
//     certificates: [
//       {
//         image: { src: "/licence/l1.PNG", alt: "Certificate 1" },
//         title: "Ground Support Equipment (GSE)",
//         licenseNumber: "License No: NPCO-GSE-001",
//         pdf: "/certificates/c1.pdf",
//       },
//       {
//         image: { src: "/licence/l2.PNG", alt: "Certificate 2" },
//         title: "Navigating Excellence with NPCO",
//         licenseNumber: "License No: NPCO-AVI-002",
//         pdf: "/certificates/c2.pdf",
//       },
//       {
//         image: { src: "/licence/l3.PNG", alt: "Certificate 3" },
//         title: "Ensuring Soaring Safety",
//         licenseNumber: "License No: NPCO-SAF-003",
//         pdf: "/certificates/c3.pdf",
//       },
//       {
//         image: { src: "/licence/l4.PNG", alt: "Certificate 4" },
//         title: "Aircraft Tools – Aircraft",
//         licenseNumber: "License No: NPCO-TOOL-004",
//         pdf: "/certificates/c4.pdf",
//       },
//       {
//         image: { src: "/licence/l5.PNG", alt: "Certificate 5" },
//         title: "Aircraft Consumables and Expendables",
//         licenseNumber: "License No: NPCO-EXP-005",
//         pdf: "/certificates/c5.pdf",
//       },
//       {
//         image: { src: "/licence/duns.png", alt: "Certificate 6" },
//         title: "Aircraft Maintenance License",
//         licenseNumber: "License No: NPCO-MNT-006",
//         pdf: "/certificates/c6.pdf",
//       },
//       {
//         image: { src: "/licence/soudi.jpg", alt: "Certificate 7" },
//         title: "Quality Assurance Certificate",
//         licenseNumber: "License No: NPCO-QA-007",
//         pdf: "/certificates/c7.pdf",
//       },
//       {
//         image: { src: "/licence/jami.png", alt: "Certificate 8" },
//         title: "International Aviation Standard",
//         licenseNumber: "License No: NPCO-INT-008",
//         pdf: "/certificates/c8.pdf",
//       },
//     ],
//   };

//   return (
//     <>
//       <div className="case-area pb-100 bg-gray-100">
//         <div className="container">
//           {/* ✅ Section Title with AOS */}
//           <div
//             className="section-title home-four-section-title"
//             data-aos="fade-up"
//             data-aos-duration="800"
//           >
//             <span>{licenseData.section.subtitle}</span>
//             <h2>{licenseData.section.title}</h2>
//           </div>

//           {/* ✅ 3-column grid with AOS stagger */}
//           <div className="row">
//             {licenseData.certificates.map((cert, index) => (
//               <div
//                 key={index}
//                 className="col-lg-4 col-md-6 mb-4"
//                 data-aos="fade-up"
//                 data-aos-duration="800"
//                 data-aos-delay={index * 200} // stagger animation
//               >
//                 <div className="case-wrap case-style-2">
//                   <div className="single-case">
//                     {/* Fixed Image Size */}
//                     <div className="image-wrapper">
//                       <Image
//                         src={cert.image.src}
//                         alt={cert.image.alt}
//                         fill
//                         className="img-fixed"
//                       />
//                     </div>

//                     {/* ✅ PDF opens in new tab */}
//                     <a
//                       href={cert.pdf}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="link-icon"
//                     >
//                       <i className="bx bx-plus"></i>
//                     </a>
//                   </div>

//                   {/* Title + License Number */}
//                   <h3 className="license-title">{cert.title}</h3>
//                   <p className="license-number">{cert.licenseNumber}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .case-area {
//           background-color: #04063c;
//           padding-top: 150px;
//           padding-bottom: 100px;
//         }

//         .image-wrapper {
//           position: relative;
//           width: 100%;
//           height: 150px; /* ✅ fixed height */
//           overflow: hidden;
//           border-radius: 8px;
//         }

//         .img-fixed {
//           object-fit: cover; /* ✅ ensures all images look uniform */
//         }

//         .license-number {
//           font-size: 14px;
//           color: #bbb;
//           margin-top: 5px;
//         }
//         .license-title {
//           color: white;
//         }
//       `}</style>
//     </>
//   );
// };

// export default Licenses;

"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BASE_URL, TOKEN } from "@/config/apiConfig"; // ✅ import config

interface Licence {
  _id: string;
  image: string;
  title: string;
  sub_title: string; // 👈 License number
  pdf_file: string;
}

const Licenses: React.FC = () => {
  const [licences, setLicences] = useState<Licence[]>([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch licences from API
  useEffect(() => {
    const fetchLicences = async () => {
      try {
        const response = await fetch(`${BASE_URL}/lincence/getAllLicence`, {
          method: "GET",
          headers: {
            ...(TOKEN && { Authorization: `Bearer ${TOKEN}` }),
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          const errorText = await response.text();
          console.error("API Error:", errorText);
          return;
        }

        const result = await response.json();
        console.log("Licence API Response:", result);

        if (result.success && result.data) {
          setLicences(result.data);
        } else {
          console.warn("Unexpected API format:", result);
        }
      } catch (error) {
        console.error("Error fetching licences:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLicences();
  }, []);

  return (
    <div className="case-area pb-100 bg-gray-100">
      <div className="container">
        {/* Section Title */}
        <div
          className="section-title home-four-section-title"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <span>Licenses & Certificates</span>
          <h2>Our Authorizations</h2>
        </div>

        {/* Licences Grid */}
        <div className="row">
          {loading ? (
            <p style={{ color: "white" }}>Loading licences...</p>
          ) : (
            licences.map((cert, index) => (
              <div
                key={cert._id}
                className="col-lg-4 col-md-6 mb-4"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={index * 200}
              >
                <div className="case-wrap case-style-2">
                  <div className="single-case">
                    {/* Fixed Image Size */}
                    <div className="image-wrapper">
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        className="img-fixed"
                        unoptimized
                      />
                    </div>

                    {/* PDF link */}
                    <a
                      href={cert.pdf_file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-icon"
                    >
                      <i className="bx bx-plus"></i>
                    </a>
                  </div>

                  {/* Title + Licence Number */}
                  <h3 className="license-title">{cert.title}</h3>
                  <p className="license-number">Licence No :{cert.sub_title}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <style jsx>{`
        .case-area {
          background-color: #04063c;
          padding-top: 150px;
          padding-bottom: 100px;
        }

        .image-wrapper {
          position: relative;
          width: 100%;
          height: 150px;
          overflow: hidden;
          border-radius: 8px;
        }

        .img-fixed {
          object-fit: cover;
        }

        .license-number {
          font-size: 14px;
          color: #bbb;
          margin-top: 5px;
        }

        .license-title {
          color: white;
        }
      `}</style>
    </div>
  );
};

export default Licenses;
