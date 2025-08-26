"use client";

import React, { useState } from "react";
import Image from "next/image";

// Data object containing all testimonials
const testimonialsData = [
  {
    id: 1,
    image: "/images/clients/client1.jpg",
    name: "Alen Meair",
    designation: "Web Developer",
    feedbackText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,do eiusmod tempor incididunt ut labore et dolore.",
    rating: [
      { iconName: "bx bxs-star" },
      { iconName: "bx bxs-star" },
      { iconName: "bx bxs-star" },
      { iconName: "bx bxs-star" },
      { iconName: "bx bxs-star" }
    ]
  },
  {
    id: 2,
    image: "/images/clients/client2.jpg",
    name: "Axon Detos",
    designation: "CEO of ET",
    feedbackText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,do eiusmod tempor incididunt ut labore et dolore.",
    rating: [
      { iconName: "bx bxs-star" },
      { iconName: "bx bxs-star" },
      { iconName: "bx bxs-star" },
      { iconName: "bx bxs-star" },
      { iconName: "bx bxs-star" }
    ]
  },
  {
    id: 3,
    image: "/images/clients/client3.jpg",
    name: "John Dona",
    designation: "UI/UX Designer",
    feedbackText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,do eiusmod tempor incididunt ut labore et dolore.",
    rating: [
      { iconName: "bx bxs-star" },
      { iconName: "bx bxs-star" },
      { iconName: "bx bxs-star" },
      { iconName: "bx bxs-star" },
      { iconName: "bx bxs-star" }
    ]
  },
  {
    id: 4,
    image: "/images/clients/client4.jpg",
    name: "Jon Smith",
    designation: "ReactJS Developer",
    feedbackText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,do eiusmod tempor incididunt ut labore et dolore.",
    rating: [
      { iconName: "bx bxs-star" },
      { iconName: "bx bxs-star" },
      { iconName: "bx bxs-star" },
      { iconName: "bx bxs-star" },
      { iconName: "bx bxs-star" }
    ]
  },
  {
    id: 5,
    image: "/images/clients/client5.jpg",
    name: "Dew Smith",
    designation: "UI/UX Designer",
    feedbackText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,do eiusmod tempor incididunt ut labore et dolore.",
    rating: [
      { iconName: "bx bxs-star" },
      { iconName: "bx bxs-star" },
      { iconName: "bx bxs-star" },
      { iconName: "bx bxs-star" },
      { iconName: "bx bxs-star" }
    ]
  },
  {
    id: 6,
    image: "/images/clients/client6.jpg",
    name: "Jeath Smith",
    designation: "SEO Developer",
    feedbackText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,do eiusmod tempor incididunt ut labore et dolore.",
    rating: [
      { iconName: "bx bxs-star" },
      { iconName: "bx bxs-star" },
      { iconName: "bx bxs-star" },
      { iconName: "bx bxs-star" },
      { iconName: "bx bxs-star" }
    ]
  },
  {
    id: 7,
    image: "/images/clients/client7.jpg",
    name: "Kilkaz Dew",
    designation: "UI/UX Designer",
    feedbackText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,do eiusmod tempor incididunt ut labore et dolore.",
    rating: [
      { iconName: "bx bxs-star" },
      { iconName: "bx bxs-star" },
      { iconName: "bx bxs-star" },
      { iconName: "bx bxs-star" },
      { iconName: "bx bxs-star" }
    ]
  },
  {
    id: 8,
    image: "/images/clients/client8.jpg",
    name: "Ana Deth",
    designation: "PHP Developer",
    feedbackText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,do eiusmod tempor incididunt ut labore et dolore.",
    rating: [
      { iconName: "bx bxs-star" },
      { iconName: "bx bxs-star" },
      { iconName: "bx bxs-star" },
      { iconName: "bx bxs-star" },
      { iconName: "bx bxs-star" }
    ]
  },
  {
    id: 9,
    image: "/images/clients/client9.jpg",
    name: "Zeck Smith",
    designation: "Founder CEO",
    feedbackText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,do eiusmod tempor incididunt ut labore et dolore.",
    rating: [
      { iconName: "bx bxs-star" },
      { iconName: "bx bxs-star" },
      { iconName: "bx bxs-star" },
      { iconName: "bx bxs-star" },
      { iconName: "bx bxs-star" }
    ]
  }
];

// Pagination configuration
const paginationConfig = {
  itemsPerPage: 6,
  prevIcon: "bx bx-chevrons-left",
  nextIcon: "bx bx-chevrons-right"
};

const TestimonialsContent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { itemsPerPage, prevIcon, nextIcon } = paginationConfig;
  
  // Calculate pagination values
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = testimonialsData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(testimonialsData.length / itemsPerPage);
  
  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll to top of testimonials section
    document.querySelector('.client-area')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  // Generate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="client-area inner-client-page ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            {currentItems.map((testimonial) => (
              <div className="col-lg-4 col-sm-6" key={testimonial.id}>
                <div className="single-client">
                  <i className="quotes flaticon-left-quotes-sign"></i>
                  <p>{testimonial.feedbackText}</p>
                  <ul>
                    {testimonial.rating.map((star, index) => (
                      <li key={index}>
                        <i className={star.iconName}></i>
                      </li>
                    ))}
                  </ul>
                  <div className="client-img">
                    <Image
                      src={testimonial.image}
                      alt="Image"
                      width={70}
                      height={70}
                    />
                    <h3>{testimonial.name}</h3>
                    <span>{testimonial.designation}</span>
                  </div>
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
      </div>
    </>
  );
};

export default TestimonialsContent;