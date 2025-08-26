"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import shapeImg1 from "../../../public/images/shape/services-shape/1.png";
import shapeImg2 from "../../../public/images/shape/services-shape/2.png";
import shapeImg3 from "../../../public/images/shape/services-shape/3.png";
import shapeImg4 from "../../../public/images/shape/services-shape/4.png";
import shapeImg5 from "../../../public/images/shape/services-shape/5.png";
import shapeImg6 from "../../../public/images/shape/services-shape/6.png";

// Data object containing all dynamic content
const servicesData = {
  services: [
    {
      id: 1,
      icon: "flaticon-chip",
      title: "Robotics & Drones",
      description: "Lorem consectetur ipsum dolor sit amet, adipiscing elit, do eiusmod tempor incididunt sed.",
      link: "/services/service-details/"
    },
    {
      id: 2,
      icon: "flaticon-vr",
      title: "Virtually Reality",
      description: "Lorem consectetur ipsum dolor sit amet, adipiscing elit, do eiusmod tempor incididunt sed.",
      link: "/services/service-details/"
    },
    {
      id: 3,
      icon: "flaticon-blockchain",
      title: "Blockchain Project",
      description: "Lorem consectetur ipsum dolor sit amet, adipiscing elit, do eiusmod tempor incididunt sed.",
      link: "/services/service-details/"
    },
    {
      id: 4,
      icon: "flaticon-target",
      title: "Image Processing",
      description: "Lorem consectetur ipsum dolor sit amet, adipiscing elit, do eiusmod tempor incididunt sed.",
      link: "/services/service-details/"
    },
    {
      id: 5,
      icon: "flaticon-choice",
      title: "Order Management",
      description: "Lorem consectetur ipsum dolor sit amet, adipiscing elit, do eiusmod tempor incididunt sed.",
      link: "/services/service-details/"
    },
    {
      id: 6,
      icon: "flaticon-deep-learning",
      title: "Machine Learning",
      description: "Lorem consectetur ipsum dolor sit amet, adipiscing elit, do eiusmod tempor incididunt sed.",
      link: "/services/service-details/"
    },
    {
      id: 7,
      icon: "flaticon-cloud-computing-1",
      title: "Data Science",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita.",
      link: "/services/service-details/"
    },
    {
      id: 8,
      icon: "flaticon-engineer",
      title: "Data Engineer",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita.",
      link: "/services/service-details/"
    },
    {
      id: 9,
      icon: "flaticon-success",
      title: "Facing AI Challenges",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita.",
      link: "/services/service-details/"
    },
    // Additional services to demonstrate pagination
    {
      id: 10,
      icon: "flaticon-technical-support",
      title: "Safe Security",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita.",
      link: "/services/service-details/"
    },
    {
      id: 11,
      icon: "flaticon-shield",
      title: "Technical Support",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita.",
      link: "/services/service-details/"
    },
    {
      id: 12,
      icon: "flaticon-support",
      title: "Live Support",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita.",
      link: "/services/service-details/"
    }
  ],
  pagination: {
    itemsPerPage: 9,
    prevIcon: "bx bx-chevrons-left",
    nextIcon: "bx bx-chevrons-right"
  },
  shapeImages: [
    { src: shapeImg1, alt: "Shape 1", width: 300, height: 375 },
    { src: shapeImg2, alt: "Shape 2", width: 300, height: 375 },
    { src: shapeImg3, alt: "Shape 3", width: 41, height: 36 },
    { src: shapeImg4, alt: "Shape 4", width: 20, height: 20 },
    { src: shapeImg5, alt: "Shape 5", width: 28, height: 30 },
    { src: shapeImg6, alt: "Shape 6", width: 25, height: 25 }
  ]
};

const ServicesStyleThree: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { services, pagination, shapeImages } = servicesData;
  const { itemsPerPage, prevIcon, nextIcon } = pagination;
  
  // Calculate pagination values
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = services.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(services.length / itemsPerPage);
  
  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll to top of services section
    document.querySelector('.offer-area')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  // Generate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="offer-area gray-bg ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            {currentItems.map((service) => (
              <div key={service.id} className="col-lg-4 col-sm-6">
                <div className="service-card">
                  <i className={service.icon}></i>
                  <h3>
                    <Link href={service.link}>
                      {service.title}
                    </Link>
                  </h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
            
            {/* Pagination */}
            <div className="col-lg-12">
              <div className="page-navigation-area">
                <nav aria-label="Page navigation example text-center">
                  <ul className="pagination">
                    <li className="page-item">
                      <button 
                        type="button" 
                        className="page-link page-links"
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                      >
                        <i className={prevIcon}></i>
                      </button>
                    </li>
                    {pageNumbers.map((number) => (
                      <li 
                        key={number} 
                        className={`page-item ${currentPage === number ? 'active' : ''}`}
                      >
                        <button 
                          type="button" 
                          className="page-link"
                          onClick={() => handlePageChange(number)}
                        >
                          {number}
                        </button>
                      </li>
                    ))}
                    <li className="page-item">
                      <button 
                        type="button" 
                        className="page-link"
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                      >
                        <i className={nextIcon}></i>
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        
        {/* Shape Images */}
        <div className="offer-shape">
          {shapeImages.map((shape, index) => (
            <Image 
              key={index}
              src={shape.src} 
              alt={shape.alt} 
              width={shape.width} 
              height={shape.height} 
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ServicesStyleThree;