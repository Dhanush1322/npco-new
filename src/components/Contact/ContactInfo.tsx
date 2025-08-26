"use client";

import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { IoTimeOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
const ContactInfo: React.FC = () => {
  return (
    <>
      <div className="contact-info-area pt-100 pb-70">
        <div className="container">
          <div className="section-title text-center mb-5">
            <h2>Get in Touch – Your Journey with NPC Starts Here</h2>
          </div>
          <div className="row">
            {/* Headquarter */}
            <div className="location col-lg-4 col-sm-6 h-30">
              <div className="single-contact-info">
                <i className="bx bx-building-house"></i>
                <h3>Headquarter</h3>
                <p>
                  <span>
                    <CiLocationOn style={{ color: "#e74c3c", fontSize: "20px" }} /> {/* Red for Location */}
                  </span>
                  6th floor, Bahrain Tower, King Fahd Rd, Al Olaya, Riyadh 12214
                </p>

                <p>
                  <span>
                    <IoCallOutline style={{ color: "#2ecc71", fontSize: "20px" }} /> {/* Green for Call */}
                  </span>
                  +966 11 211 3333
                </p>

                <p>
                  <span>
                    <TfiEmail style={{ color: "#3498db", fontSize: "20px" }} /> {/* Blue for Email */}
                  </span>
                  info@npco.sa, sales@npco.sa
                </p>

                <p>
                  <span>
                    <IoTimeOutline style={{ color: "#f39c12", fontSize: "20px" }} /> {/* Orange for Time */}
                  </span>
                  Sunday - Thursday GMT+3 (8:00 AM -16:30 PM)
                </p>
              </div>
            </div>

            {/* Riyadh Station */}
            <div className="location col-lg-4 col-sm-6">
              <div className="single-contact-info">
                <i className="bx bx-train"></i>
                <h3>Riyadh Station – Aviation & Railway Sector</h3>
                <p>
                  <span>
                    <CiLocationOn style={{ color: "#e74c3c", fontSize: "20px" }} /> {/* Red for Location */}
                  </span>

                  KKIA FM2 Building #7 Riyadh, KSA</p>
                <p>
                  <span>
                    <IoCallOutline style={{ color: "#2ecc71", fontSize: "20px" }} /> {/* Green for Call */}
                  </span>

                  +966 11 211 3333</p>
                <p>

                  <span>
                    <TfiEmail style={{ color: "#3498db", fontSize: "20px" }} /> {/* Blue for Email */}
                  </span>

                  sales@npco.sa</p>
                <p>
                  <span>
                    <IoTimeOutline style={{ color: "#f39c12", fontSize: "20px" }} /> {/* Orange for Time */}
                  </span>

                  24/7</p>
              </div>
            </div>

            {/* Jeddah Station */}
            <div className="location col-lg-4 col-sm-6">
              <div className="single-contact-info">
                <i className="bx bx-anchor"></i>
                <h3>Jeddah Station – Marine Sector</h3>
                <p>
                  <span>
                    <CiLocationOn style={{ color: "#e74c3c", fontSize: "20px" }} /> {/* Red for Location */}
                  </span>
                  Abhur Ash Shamaliyah D.C. Abdulrahman Bin Dawood Str. Jeddah 23814 4043</p>
                <p> <span>
                  <IoCallOutline style={{ color: "#2ecc71", fontSize: "20px" }} /> {/* Green for Call */}
                </span>

                  +966 11 211 3333</p>
                <p>
                  <span>
                    <TfiEmail style={{ color: "#3498db", fontSize: "20px" }} /> {/* Blue for Email */}
                  </span>
                  sales@npco.sa</p>
                <p> <span>
                  <IoTimeOutline style={{ color: "#f39c12", fontSize: "20px" }} /> {/* Orange for Time */}
                </span>
                  Sunday - Thursday GMT+3 (8:00 AM -18:00 PM)</p>
              </div>
            </div>

            {/* Al Qassim */}
            <div className="location col-lg-4 col-sm-6">
              <div className="single-contact-info">
                <i className="bx bx-map"></i>
                <h3>Al Qassim</h3>
                <p> <span>
                  <CiLocationOn style={{ color: "#e74c3c", fontSize: "20px" }} /> {/* Red for Location */}
                </span>
                  6th floor, Bahrain Tower, King Fahd Rd, Al Olaya, Riyadh 12214</p>
                <p> <span>
                  <IoCallOutline style={{ color: "#2ecc71", fontSize: "20px" }} /> {/* Green for Call */}
                </span>
                  +966 11 211 3333</p>
                <p>  <span>
                  <TfiEmail style={{ color: "#3498db", fontSize: "20px" }} /> {/* Blue for Email */}
                </span>
                  info@npco.sa, sales@npco.sa</p>
                <p> <span>
                  <IoTimeOutline style={{ color: "#f39c12", fontSize: "20px" }} /> {/* Orange for Time */}
                </span>

                  Sunday - Thursday GMT+3 (8:00 AM -16:30 PM)</p>
              </div>
            </div>

            {/* Jeddah */}
            <div className="location col-lg-4 col-sm-6">
              <div className="single-contact-info">
                <i className="bx bx-map-pin"></i>
                <h3>Jeddah</h3>
                <p> <span>
                  <CiLocationOn style={{ color: "#e74c3c", fontSize: "20px" }} /> {/* Red for Location */}
                </span>
                  KKIA FM2 Building #7 Riyadh, KSA</p>
                <p><span>
                  <IoCallOutline style={{ color: "#2ecc71", fontSize: "20px" }} /> {/* Green for Call */}
                </span> +966 11 211 3333</p>
                <p><span>
                  <TfiEmail style={{ color: "#3498db", fontSize: "20px" }} /> {/* Blue for Email */}
                </span> sales@npco.sa</p>
                <p><span>
                  <IoTimeOutline style={{ color: "#f39c12", fontSize: "20px" }} /> {/* Orange for Time */}
                </span> 24/7</p>
              </div>
            </div>

            {/* Dammam */}
            <div className="location col-lg-4 col-sm-6">
              <div className="single-contact-info">
                <i className="bx bx-current-location"></i>
                <h3>Dammam</h3>
                <p><span>
                  <CiLocationOn style={{ color: "#e74c3c", fontSize: "20px" }} /> {/* Red for Location */}
                </span>Abhur Ash Shamaliyah D.C. Abdulrahman Bin Dawood Str. Jeddah 23814 4043</p>
                <p><span>
                  <IoCallOutline style={{ color: "#2ecc71", fontSize: "20px" }} /> {/* Green for Call */}
                </span>  +966 11 211 3333</p>
                <p><span>
                  <TfiEmail style={{ color: "#3498db", fontSize: "20px" }} /> {/* Blue for Email */}
                </span> sales@npco.sa</p>
                <p><span>
                  <IoTimeOutline style={{ color: "#f39c12", fontSize: "20px" }} /> {/* Orange for Time */}
                </span>Sunday - Thursday GMT+3 (8:00 AM -18:00 PM)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .single-contact-info {
          height: 360px;
          text-align: left;   /* ✅ this aligns all <p> to the left */
        }
.single-contact-info i {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;         /* circle size */
  height: 60px;
  border-radius: 50%;  /* makes it a circle */
  background: #0072a0; /* circle background color */
  color: #fff;         /* icon color */
  font-size: 28px;     /* icon size */
  margin-bottom: 15px; /* space below circle */
}

        .single-contact-info p {
          margin: 5px 0;
        }
      `}</style>
    </>
  );
};

export default ContactInfo;
