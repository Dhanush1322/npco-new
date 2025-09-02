// Marine.jsx
"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Marine.css";

// ✅ React Icons
import {
  FaCogs,
  FaBolt,
  FaTools,
  FaShip,
  FaSatelliteDish,
  FaWater,
  FaShieldAlt,
  FaLifeRing,
  FaExchangeAlt,
  FaWrench,
  
} from "react-icons/fa";
import { GiSpeedBoat, } from "react-icons/gi";

const Marine = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div className="marine-container" data-aos="fade-up">
      {/* Intro Section */}
      <h2 className="marine-title" data-aos="zoom-in">
        Marine Maintenance & Services
      </h2>

      <p className="marine-description" data-aos="fade-right">
        We provide professional, reliable services and solutions in marine
        maintenance for the <strong>military</strong> and <strong>civil</strong>{" "}
        sectors. Our staff brings experience, credibility, and best practices
        developed with international standards. We deliver a wide range of
        administrative and technical services to build stable, reputable client
        partnerships, always striving to provide outstanding care and quality.
      </p>

      {/* Services Section */}
      <h3 className="marine-subtitle" data-aos="fade-left">
        Our Specialized Services
      </h3>

      <div className="marine-services-grid">
        <div className="service-card" data-aos="fade-up" data-aos-delay="100">
          <FaCogs className="service-icon" />
          <h4>Engine Services</h4>
          <p>
            Inspection, repair, and overhaul of marine engines to ensure optimal
            performance and safety.
          </p>
        </div>
        <div className="service-card" data-aos="fade-up" data-aos-delay="200">
          <FaBolt className="service-icon" />
          <h4>Electrical System Services</h4>
          <p>
            Maintenance and troubleshooting of onboard electrical systems and
            power supply networks.
          </p>
        </div>
        <div className="service-card" data-aos="fade-up" data-aos-delay="300">
          <FaTools className="service-icon" />
          <h4>Body & Hull Services</h4>
          <p>
            Comprehensive repairs and upgrades to the structure and hull to
            maintain durability and reliability.
          </p>
        </div>
        <div className="service-card" data-aos="fade-up" data-aos-delay="400">
          <FaShip className="service-icon" />
          <h4>Propulsion System Services</h4>
          <p>
            Specialized servicing of propulsion systems to ensure maximum
            efficiency at sea.
          </p>
        </div>
        <div className="service-card" data-aos="fade-up" data-aos-delay="500">
          <FaSatelliteDish className="service-icon" />
          <h4>Communication & Navigation</h4>
          <p>
            Installation and servicing of advanced navigation and communication
            systems for safety at sea.
          </p>
        </div>
        <div className="service-card" data-aos="fade-up" data-aos-delay="600">
          <FaWater className="service-icon" />
          <h4>Pumps & Hydraulics</h4>
          <p>
            Repair and maintenance of hydraulic systems and pumps essential for
            vessel operation.
          </p>
        </div>
        <div className="service-card" data-aos="fade-up" data-aos-delay="700">
          <GiSpeedBoat className="service-icon" />
          <h4>Patrol Boat Customization</h4>
          <p>
            Special customization and modifications for patrol boats and
            interceptors to meet mission needs.
          </p>
        </div>
        <div className="service-card" data-aos="fade-up" data-aos-delay="800">
          <FaShip className="service-icon" />
          <h4>Patrol Boats Services</h4>
          <p>
            Maintenance and full servicing of patrol boats to extend operational
            life and readiness.
          </p>
        </div>
        <div className="service-card" data-aos="fade-up" data-aos-delay="900">
          <FaShip className="service-icon" />
          <h4>Inflatable Units Services</h4>
          <p>
            Inspection, repairs, and replacement of inflatable units for safety
            and emergency use.
          </p>
        </div>
        <div className="service-card" data-aos="fade-up" data-aos-delay="1000">
          <FaLifeRing className="service-icon" />
          <h4>Safety & Rescue</h4>
          <p>
            Comprehensive safety checks and rescue equipment servicing for
            maritime security.
          </p>
        </div>
        <div className="service-card" data-aos="fade-up" data-aos-delay="1100">
          <FaExchangeAlt className="service-icon" />
          <h4>Boat & Ship Transfers</h4>
          <p>
            Professional transferring of boats, military ships, and other
            watercraft with full safety compliance.
          </p>
        </div>
        <div className="service-card" data-aos="fade-up" data-aos-delay="1200">
          <FaWrench className="service-icon" />
          <h4>Spare Parts Supply</h4>
          <p>
            Providing genuine spare parts for boats, military ships, and other
            marine vessels.
          </p>
        </div>
      </div>

      {/* Images Section */}
      <div className="marine-images" data-aos="zoom-in-up">
        <img src="/marine/marin.jpg" alt="Marine Service 1" />
        <img src="/marine/marin1.jpg" alt="Marine Service 2" />
        <img src="/marine/marin2.jpg" alt="Marine Service 3" />
      </div>
    </div>
  );
};

export default Marine;
