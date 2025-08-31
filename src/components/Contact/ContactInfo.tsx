"use client";

import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { IoTimeOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";

const ContactInfo: React.FC = () => {
  // ✅ Array of contact locations (instead of repeating JSX)
  const locations = [
    {
      id: 1,
      icon: "bx bx-building-house",
      title: "Headquarter",
      address:
        "6th floor, Bahrain Tower, King Fahd Rd, Al Olaya, Riyadh 12214",
      phone: "+966 11 211 3333",
      email: "info@npco.sa, sales@npco.sa",
      time: "Sunday - Thursday GMT+3 (8:00 AM -16:30 PM)",
    },
    {
      id: 2,
      icon: "bx bx-train",
      title: "Riyadh Station – Aviation & Railway Sector",
      address: "KKIA FM2 Building #7 Riyadh, KSA",
      phone: "+966 11 211 3333",
      email: "sales@npco.sa",
      time: "24/7",
    },
    {
      id: 3,
      icon: "bx bx-anchor",
      title: "Jeddah Station – Marine Sector",
      address:
        "Abhur Ash Shamaliyah D.C. Abdulrahman Bin Dawood Str. Jeddah 23814 4043",
      phone: "+966 11 211 3333",
      email: "sales@npco.sa",
      time: "Sunday - Thursday GMT+3 (8:00 AM -18:00 PM)",
    },
    {
      id: 4,
      icon: "bx bx-map",
      title: "Al Qassim",
      address:
        "6th floor, Bahrain Tower, King Fahd Rd, Al Olaya, Riyadh 12214",
      phone: "+966 11 211 3333",
      email: "info@npco.sa, sales@npco.sa",
      time: "Sunday - Thursday GMT+3 (8:00 AM -16:30 PM)",
    },
    {
      id: 5,
      icon: "bx bx-map-pin",
      title: "Jeddah",
      address: "KKIA FM2 Building #7 Riyadh, KSA",
      phone: "+966 11 211 3333",
      email: "sales@npco.sa",
      time: "24/7",
    },
    {
      id: 6,
      icon: "bx bx-current-location",
      title: "Dammam",
      address:
        "Abhur Ash Shamaliyah D.C. Abdulrahman Bin Dawood Str. Jeddah 23814 4043",
      phone: "+966 11 211 3333",
      email: "sales@npco.sa",
      time: "Sunday - Thursday GMT+3 (8:00 AM -18:00 PM)",
    },
  ];

  return (
    <>
      <div className="contact-info-area pt-100 pb-70">
        <div className="container">
          <div
            className="section-title text-center mb-5"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h2>Get in Touch – Your Journey with NPC Starts Here</h2>
          </div>

          <div className="row">
            {locations.map((loc, index) => (
              <div
                className="location col-lg-4 col-sm-6 mb-4"
                key={loc.id}
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay={index * 200} // ✅ stagger effect
              >
                <div className="single-contact-info">
                  <i className={loc.icon}></i>
                  <h3>{loc.title}</h3>
                  <p>
                    <span>
                      <CiLocationOn
                        style={{ color: "#e74c3c", fontSize: "20px" }}
                      />
                    </span>{" "}
                    {loc.address}
                  </p>
                  <p>
                    <span>
                      <IoCallOutline
                        style={{ color: "#2ecc71", fontSize: "20px" }}
                      />
                    </span>{" "}
                    {loc.phone}
                  </p>
                  <p>
                    <span>
                      <TfiEmail
                        style={{ color: "#3498db", fontSize: "20px" }}
                      />
                    </span>{" "}
                    {loc.email}
                  </p>
                  <p>
                    <span>
                      <IoTimeOutline
                        style={{ color: "#f39c12", fontSize: "20px" }}
                      />
                    </span>{" "}
                    {loc.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ✅ Scoped Styling */}
      <style jsx>{`
      .contact-info-area{
      overflow:hidden;
      
      }
        .single-contact-info {
          height: 360px;
          text-align: left;
          padding: 20px;
          border-radius: 12px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .single-contact-info:hover {
          transform: translateY(-8px);
          box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.1);
        }
        .single-contact-info i {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: #0072a0;
          color: #fff;
          font-size: 28px;
          margin-bottom: 15px;
        }
        .single-contact-info p {
          margin: 5px 0;
        }
          
      `}</style>
    </>
  );
};

export default ContactInfo;
