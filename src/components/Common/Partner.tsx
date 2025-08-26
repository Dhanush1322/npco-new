"use client";

import React from "react";
import Image from "next/image";

const partnerData = [
  {
    image: "/LogoNPCO/1.png",
    url: "#",
    aosDelay: "100",
  },
  {
    image: "/LogoNPCO/2.png",
    url: "#",
    aosDelay: "200",
  },
  {
    image: "/LogoNPCO/3.png",
    url: "#",
    aosDelay: "300",
  },
  {
    image: "/LogoNPCO/4.png",
    url: "#",
    aosDelay: "400",
  },
  {
    image: "/LogoNPCO/5.png",
    url: "#",
    aosDelay: "500",
  },
  {
    image: "/LogoNPCO/6.png",
    url: "#",
    aosDelay: "600",
  },
  {
    image: "/LogoNPCO/7.png",
    url: "#",
    aosDelay: "700",
  },
  {
    image: "/LogoNPCO/8.png",
    url: "#",
    aosDelay: "800",
  },
  {
    image: "/LogoNPCO/9.png",
    url: "#",
    aosDelay: "900",
  },
  {
    image: "/LogoNPCO/10.png",
    url: "#",
    aosDelay: "1000",
  },
  {
    image: "/LogoNPCO/11.png",
    url: "#",
    aosDelay: "1000",
  },
  {
    image: "/LogoNPCO/12.png",
    url: "#",
    aosDelay: "1000",
  },
  {
    image: "/LogoNPCO/13.png",
    url: "#",
    aosDelay: "1000",
  },
  {
    image: "/LogoNPCO/14.png",
    url: "#",
    aosDelay: "1000",
  },
  {
    image: "/LogoNPCO/15.png",
    url: "#",
    aosDelay: "1000",
  },
  {
    image: "/LogoNPCO/16.png",
    url: "#",
    aosDelay: "1000",
  },
  {
    image: "/LogoNPCO/17.png",
    url: "#",
    aosDelay: "1000",
  },
  {
    image: "/LogoNPCO/18.png",
    url: "#",
    aosDelay: "1000",
  },
  {
    image: "/LogoNPCO/19.png",
    url: "#",
    aosDelay: "1000",
  },
  {
    image: "/LogoNPCO/20.png",
    url: "#",
    aosDelay: "1000",
  },
  {
    image: "/LogoNPCO/21.png",
    url: "#",
    aosDelay: "1000",
  },
  {
    image: "/LogoNPCO/22.png",
    url: "#",
    aosDelay: "1000",
  },
  {
    image: "/LogoNPCO/23.png",
    url: "#",
    aosDelay: "1000",
  },
  {
    image: "/LogoNPCO/24.png",
    url: "#",
    aosDelay: "1000",
  },
  {
    image: "/LogoNPCO/25.png",
    url: "#",
    aosDelay: "1000",
  },
  {
    image: "/LogoNPCO/26.png",
    url: "#",
    aosDelay: "1000",
  },
  {
    image: "/LogoNPCO/27.png",
    url: "#",
    aosDelay: "1000",
  },
  {
    image: "/LogoNPCO/28.png",
    url: "#",
    aosDelay: "1000",
  },
  {
    image: "/LogoNPCO/29.png",
    url: "#",
    aosDelay: "1000",
  },
  {
    image: "/LogoNPCO/30.png",
    url: "#",
    aosDelay: "1000",
  },
  {
    image: "/LogoNPCO/31.png",
    url: "#",
    aosDelay: "1000",
  },
  {
    image: "/LogoNPCO/32.png",
    url: "#",
    aosDelay: "1000",
  },

];

const Partner: React.FC = () => {
  return (
    <>
      <div className="brand-area">
        <div className="container">
          <div className="section-title home-four-section-title">
            <span>Trusted By</span>
            <h2>Our Clients</h2>
          </div>


          <div className="brand-list">
            {partnerData &&
              partnerData.map((value, i) => (
                <div
                  className="single-brand"
                  data-aos="fade-in"
                  data-aos-duration="800"
                  data-aos-delay={value.aosDelay}
                  key={i}
                >
                  <a href={value.url} target="_blank">
                    <Image
                      src={value.image}
                      alt="Image"
                      width={200}
                      height={80}
                    />
                  </a>
                </div>
              ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .brand-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px; /* 👈 gap between brand divs */
        }

        .single-brand {
          background-color: white;
          padding: 10px;
          border-radius: 8px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </>
  );
};


export default Partner;
