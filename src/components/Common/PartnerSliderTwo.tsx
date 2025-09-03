"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

const partnerData = [

  {
    image: "client/5.png",
    url: "#",
  },
  {
    image: "client/2.png",
    url: "#",
  },
  {
    image: "client/honeywell-logo.svg",
    url: "#",
  },
  {
    image: "client/8.png",
    url: "#",
  },
  {
    image: "client/arr.svg",
    url: "#",
  },
  {
    image: "client/7.png",
    url: "#",
  },
  {
    image: "client/4.png",
    url: "#",
  },

];

const PartnerSliderTwo: React.FC = () => {
  return (
    <>
      <div className="brand-area ptb-100">
        <div className="container">
          <div className="section-title home-four-section-title">
            <span>Our Authorized Distributor</span>
            <h2>Trusted Partners & Suppliers</h2>

          </div>
          <Swiper
            autoHeight={true}
            spaceBetween={25}
            navigation={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 5,
              },
            }}
            modules={[Navigation, Autoplay]}
            className="brand-slide text-center"
          >
            {partnerData &&
              partnerData.map((value, i) => (
                <SwiperSlide key={i}>

                  <div className="brand-logo">
                    <Image
                      src={value.image}
                      alt="Image"
                      width={130}
                      height={80}
                    />
                  </div>

                </SwiperSlide>
              ))}

          </Swiper>
        </div>
      </div>
      <style jsx>{`
  .brand-logo {
    background: #ffffff;
    padding: 15px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px; /* keeps all logos same height */
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease-in-out;
  }

  .brand-logo:hover {
    transform: translateY(-5px);
  }
`}</style>

    </>
  );
};

export default PartnerSliderTwo;
