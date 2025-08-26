"use client";
import React from "react";

const OurTeam = () => {
    return (
        <div className="our-team-section">

            <div className="section-title home-four-section-title">
                <span>Meet Our Team</span>
                <h2>Dedicated Professionals Behind Our Success</h2>

            </div>
            <div className="video-container">
                <video width="100%" controls>
                    <source src="/Team/team.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <style jsx>{`
        .our-team-section {
          text-align: center;
          padding: 40px 20px;
        }
        .team-heading {
          font-size: 28px;
          font-weight: bold;
          margin-bottom: 20px;
        }
        .video-container {
          width: 100%;
          max-width: 90%;
          margin: 0 auto;
        }
        video {
          width: 100%;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }
      `}</style>
        </div>
    );
};

export default OurTeam;
