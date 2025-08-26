"use client";

import React, { useState } from "react";
import Link from "next/link";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

import bannerImg from "../../../public/images/home-four/main-img4.png";

// Animate Shape Images
import animateShape1 from "../../../public/images/home-one/shape/animate1.png";
import animateShape2 from "../../../public/images/home-one/shape/animate2.png";
import animateShape3 from "../../../public/images/home-one/shape/animate3.png";

const MainBanner: React.FC = () => {
  // if toggler is updated when lightbox is closed it will open it
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div className="main-banner-area main-banner-area-four">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="banner-text">
                <h1
                  data-aos="fade-in"
                  data-aos-duration="800"
                  data-aos-delay="300"
                >
                  NPCO – Driving Aviation, Marine & Railway Excellence in Saudi Arabia
                </h1>

                <p
                  data-aos="fade-in"
                  data-aos-duration="800"
                  data-aos-delay="500"
                >
                  NPCO — National Pledges Commercial Company — is transforming Saudi Arabia’s Aviation, Marine, and Railway industries with world-class aircraft line maintenance, ground support equipment rental, and supply chain management solutions. With locations across Riyadh, Jeddah, Jazan, and Madinah, we deliver unmatched reliability, safety, and efficiency. By 2030, we're committed to fueling Vision 2030 with innovation, teamwork, and honest, client-first service.
                </p>

                <div
                  className="banner-btn"
                  data-aos="fade-in"
                  data-aos-duration="800"
                  data-aos-delay="700"
                >
                  <Link href="/about" className="default-btn">
                    Learn More About NPCO
                  </Link>

                  <div
                    onClick={() => setToggler(!toggler)}
                    className="default-btn active popup-youtube"
                  >
                    <i className="bx bx-play"></i> How It Works
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 pr-0">
              <div className="banner-four-main-img">
                <Image
                  className="animate__animated animate__fadeInRight animate__fast"
                  src="/banner/banner.png"
                  alt="Image"
                  width={1021}
                  height={592}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="over-shape">
          <Image src={animateShape1} alt="Image" width={68} height={74} />
          <Image src={animateShape1} alt="Image" width={68} height={74} />
          <Image src={animateShape2} alt="Image" width={32} height={27} />
          <Image src={animateShape2} alt="Image" width={32} height={27} />
          <Image src={animateShape3} alt="Image" width={150} height={119} />
        </div>
      </div>
    </>
  );
};

export default MainBanner;
