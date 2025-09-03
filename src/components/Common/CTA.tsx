"use client";

import React from "react";
import Link from "next/link";

const CTA: React.FC = () => {
  return (
    <>
      <div className="cbi-area ptb-100">
        <div className="container">
          <div className="cta-content">
            <span>So What is Next?</span>
            <h3>Are You Ready? Let's get to work!</h3>
          </div>
          <div className="cta-btn-box">
            <Link href="/contact" className="default-btn">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* ✅ Internal Style */}
      <style jsx>{`
        .cbi-area {
          background-color: #3498db; /* Your requested blue */
          text-align: center;
          color: #fff; /* White text */
          padding: 60px 20px;
        }

        .cta-content h3 {
          margin-top: 10px;
          font-size: 28px;
          font-weight: bold;
        }

        .cta-content span {
          font-size: 18px;
          font-weight: 500;
          display: block;
        }

        .cta-btn-box {
          margin-top: 20px;
        }

        .default-btn {
          background: #fff;
          color: #3498db;
          padding: 12px 30px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          transition: 0.3s;
          display: inline-block;
        }

        .default-btn:hover {
          background: #2980b9;
          color: #fff;
        }
      `}</style>
    </>
  );
};

export default CTA;
