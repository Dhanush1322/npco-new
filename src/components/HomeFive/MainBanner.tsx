"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

const MainBanner: React.FC = () => {
  // Dynamic data object
  const bannerData = {
    slides: [
      {
        backgroundImage: "/images/home-five/slider1.jpg",
        subtitle: "IT & AI Services",
        title: "Secure IT Solutions For A More Secure Environment",
        description:
          "If we drive down the cost of transportation in space, we can do great things.",
      },
      {
        backgroundImage: "/images/home-five/slider2.jpg",
        subtitle: "IT & AI Services",
        title: "Specialized Artificial Intelligence Startup",
        description:
          "If we drive down the cost of transportation in space, we can do great things.",
      },
      {
        backgroundImage: "/images/home-five/slider3.jpg",
        subtitle: "IT & AI Services",
        title: "World’s Leading Machine Learning Company",
        description:
          "If we drive down the cost of transportation in space, we can do great things.",
      },
    ],
    buttons: [
      {
        text: "Our Services",
        link: "/services",
        className: "default-btn active",
      },
      { text: "Contact Us", link: "/contact", className: "default-btn white" },
    ],
  };

  return (
    <>
      <div className="slider-area">
        <Swiper
          autoHeight={true}
          navigation={true}
          autoplay={{
            delay: 6500,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          modules={[Navigation, Autoplay]}
          className="hero-swiper"
        >
          {bannerData.slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="jumpx-slider-item"
                style={{
                  backgroundImage: `url(${slide.backgroundImage})`,
                }}
              >
                <div className="d-table">
                  <div className="d-table-cell">
                    <div className="container">
                      <div className="jumpx-slider-text overflow-hidden">
                        <span className="slide-text-animation">
                          {slide.subtitle}
                        </span>
                        <h1 className="slide-text-animation">{slide.title}</h1>
                        <p className="slide-text-animation">
                          {slide.description}
                        </p>

                        <div className="slider-btn slide-text-animation">
                          {bannerData.buttons.map((button, btnIndex) => (
                            <Link
                              href={button.link}
                              className={button.className}
                              key={btnIndex}
                            >
                              {button.text}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Animation styles */}
      <style jsx global>{`
        .hero-swiper .slide-text-animation {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease;
        }
        .hero-swiper .slide-text-animation:nth-child(1) {
          transition-delay: 0.1s;
        }
        .hero-swiper .slide-text-animation:nth-child(2) {
          transition-delay: 0.3s;
        }
        .hero-swiper .slide-text-animation:nth-child(3) {
          transition-delay: 0.5s;
        }
        .hero-swiper .slide-text-animation:nth-child(4) {
          transition-delay: 0.7s;
        }
        .swiper-slide-active .slide-text-animation {
          opacity: 1;
          transform: translateY(0);
        }
        .swiper-slide:not(.swiper-slide-active) .slide-text-animation {
          transition: none;
          opacity: 0;
          transform: translateY(30px);
        }
      `}</style>
    </>
  );
};

export default MainBanner;
