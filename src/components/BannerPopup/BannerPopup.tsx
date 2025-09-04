"use client"

import React, { useState, useEffect } from 'react';
import { IoMdClose } from "react-icons/io"; 
import "./BannerPopup.css";

const BannerPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Show popup when website opens
  useEffect(() => {
    setIsOpen(true);
  }, []);

  const handleClose = () => {
    const popup = document.querySelector(".banner-box");
    if (popup) {
      popup.classList.add("closing");
      setTimeout(() => setIsOpen(false), 300);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="Banner-popup">
      <div className="banner-box">
        <button 
          type="button" 
          className="close-btn" 
          onClick={handleClose}
        >
          <IoMdClose />
        </button>

        <video 
          src="video/popup.mp4" 
          autoPlay 
          muted 
          playsInline 
          controls 
        />
      </div>
    </div>
  );
};

export default BannerPopup;
