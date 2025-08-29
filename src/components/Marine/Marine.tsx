// Marine.jsx
import React from "react";
import "./Marine.css"; // external CSS file

const Marine = () => {
  return (
    <div className="marine-container">
      <h1 className="marine-title">Marine Maintenance and Services</h1>
      <p className="marine-description">
        We provide professional, reliable services and solutions in the marine
        maintenance for the military and civil sectors. We offer the experience
        and credibility of our staff and our best practices, which are developed
        with international administrative and technical services to build stable
        and reputable clients. We always strive to find ways to take good care
        of them.
      </p>

      <h2 className="marine-subtitle">Maintenance and Services</h2>
      <ul className="marine-list">
        <li>⚙️ Engine Services</li>
        <li>🔌 Electrical System</li>
        <li>🛠️ Body and Hull</li>
        <li>🚤 Propulsion System</li>
        <li>📡 Communication & Navigation</li>
      </ul>

      <div className="marine-images">
        <img src="/marine/marin.jpg" alt="Marine Service 1" />
        <img src="/marine/marin1.jpg" alt="Marine Service 2" />
        <img src="/marine/marin2.jpg" alt="Marine Service 3" />
      </div>
    </div>
  );
};

export default Marine;
