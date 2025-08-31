"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link"; // ✅ Next.js link
import "./AviationInfo.css"; // ✅ External CSS

const AviationInfo = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // ✅ AOS init
  }, []);

  return (
    <section className="aviation-section">
      <div className="aviation-container">
        {/* Text Section */}
        <div
          className="aviation-text"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <h2 className="aviation-title">LINE MAINTENANCE</h2>
          <p className="aviation-description">
            We provide line maintenance services that offer any kind of
            technical assistance, from routine turnaround and overnight checks,
            to rectification of non-routine aircraft log entries.
          </p>
          <Link href="/aviation/linemaintanence"> 
            <button className="aviation-btn">Learn More</button>
          </Link>
        </div>

        {/* Image Section */}
        <div
          className="aviation-image"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <Image
            src="/aviation/aviation.jpg"
            alt="Aviation Maintenance"
            width={500}
            height={350}
          />
        </div>
      </div>
    </section>
  );
};

export default AviationInfo;
