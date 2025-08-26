"use client";

import React from "react";
import Link from "next/link";

const MakeYourBusiness: React.FC = () => {
  // Dynamic data object
  const businessData = {
    title: "Make Your Business More Competitive And Enduring",
    businessItems: [
      {
        icon: "flaticon-chip",
        title: "AI Will Automate Cybersecurity Improve",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Quis ipsum suspendisse ultrices gravida suspendisse.",
      },
      {
        icon: "flaticon-blockchain",
        title: "A Community With A Unique Mission",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Quis ipsum suspendisse ultrices gravida suspendisse.",
      },
    ],
    counters: [
      {
        value: "95%",
        label: "Project Completed",
        aosDelay: "100",
      },
      {
        value: "90%",
        label: "Design",
        aosDelay: "200",
      },
      {
        value: "85%",
        label: "Happy Clients",
        aosDelay: "300",
      },
      {
        value: "80",
        label: "Award Win",
        aosDelay: "400",
      },
    ],
    button: {
      text: "Know Details",
      link: "/about-2",
    },
  };

  return (
    <>
      <div className="business-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="business-content">
                <h2>{businessData.title}</h2>
              </div>

              {businessData.businessItems.map((item, index) => (
                <div className="single-business" key={index}>
                  <i className={item.icon}></i>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}

              <div className="business-btn">
                <Link href={businessData.button.link} className="default-btn">
                  {businessData.button.text}
                </Link>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="row">
                {businessData.counters.map((counter, index) => (
                  <div
                    className="col-lg-6 col-sm-6 counter-nth"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay={counter.aosDelay}
                    key={index}
                  >
                    <div className="single-counter">
                      <h2>
                        <span className="target">{counter.value}</span>
                      </h2>
                      <p>{counter.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MakeYourBusiness;
