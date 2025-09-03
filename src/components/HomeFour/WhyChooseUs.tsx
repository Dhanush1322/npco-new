"use client";

import React from "react";
import Image from "next/image";

const WhyChooseUs: React.FC = () => {
  return (
    <>
      <div className="choose-ue-area pt-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="choose-title home-four-section-title">
                <span>Who We Are</span>
                <h2>Delivering Excellence in Aviation & Ground Support</h2>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            {/* Left Side Text */}
            <div className="col-lg-6">
              <div
                className="choose-content"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                <p className="text-white">
                  At <strong>NPCO</strong>, we specialize in aircraft line
                  maintenance and ground support equipment maintenance and
                  rental in the Kingdom of Saudi Arabia. Our commitment to
                  excellence is evident in the cutting-edge technologies and
                  services we offer, setting us apart as a premier provider in
                  the region.
                </p>
                <p className="text-white" >
                  Currently, we offer aircraft line maintenance services at{" "}
                  <strong>Riyadh</strong> and <strong>Madinah</strong> stations,
                  ensuring that our clients receive top-notch support and
                  maintenance solutions. We are also excited to announce that
                  more stations will be opening soon, allowing us to further
                  expand our reach and serve a wider clientele.
                </p>
                <p className="text-white">
                  One of our key areas of expertise lies in{" "}
                  <strong>supply chain management</strong>, catering to the
                  needs of the military, aviation, marine, and railway
                  industries. By leveraging our extensive experience and
                  industry knowledge, we are able to provide comprehensive
                  solutions that meet the unique requirements of our clients.
                </p>
              </div>
            </div>

            {/* Right Side Image */}
            <div className="col-lg-6">
              <div
                className="choose-img"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="500"
              >
                <Image
                  src="/aviation/NPCOO@2x.png"
                  alt="NPCO Aviation & Ground Support"
                  width={807}
                  height={704}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
