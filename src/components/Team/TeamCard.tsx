"use client";
import React, { useState } from "react";
import Image from "next/image";

// Data object containing all team members
const teamData = [
  {
    id: 1,
    image: "/images/team/team1.png",
    name: "Karen Peter",
    designation: "CEO & Founder",
    aosDelay: "100",
    socialLinks: [
      { iconName: "bx bxl-facebook", url: "https://facebook.com/" },
      { iconName: "bx bxl-twitter", url: "https://twitter.com/" },
      { iconName: "bx bxl-linkedin", url: "https://linkedin.com/" },
      { iconName: "bx bxl-pinterest-alt", url: "https://pinterest.com/" },
    ],
  },
  {
    id: 2,
    image: "/images/team/team2.png",
    name: "Alex Piter",
    designation: "Executive",
    aosDelay: "200",
    socialLinks: [
      { iconName: "bx bxl-facebook", url: "https://facebook.com/" },
      { iconName: "bx bxl-twitter", url: "https://twitter.com/" },
      { iconName: "bx bxl-linkedin", url: "https://linkedin.com/" },
      { iconName: "bx bxl-pinterest-alt", url: "https://pinterest.com/" },
    ],
  },
  {
    id: 3,
    image: "/images/team/team3.png",
    name: "Alisa Maria",
    designation: "Web Developer",
    aosDelay: "300",
    socialLinks: [
      { iconName: "bx bxl-facebook", url: "https://facebook.com/" },
      { iconName: "bx bxl-twitter", url: "https://twitter.com/" },
      { iconName: "bx bxl-linkedin", url: "https://linkedin.com/" },
      { iconName: "bx bxl-pinterest-alt", url: "https://pinterest.com/" },
    ],
  },
  {
    id: 4,
    image: "/images/team/team4.png",
    name: "Peter Jack",
    designation: "UI/UX Designer",
    aosDelay: "400",
    socialLinks: [
      { iconName: "bx bxl-facebook", url: "https://facebook.com/" },
      { iconName: "bx bxl-twitter", url: "https://twitter.com/" },
      { iconName: "bx bxl-linkedin", url: "https://linkedin.com/" },
      { iconName: "bx bxl-pinterest-alt", url: "https://pinterest.com/" },
    ],
  },
  {
    id: 5,
    image: "/images/team/team5.png",
    name: "Anna Dew",
    designation: "React Developer",
    aosDelay: "500",
    socialLinks: [
      { iconName: "bx bxl-facebook", url: "https://facebook.com/" },
      { iconName: "bx bxl-twitter", url: "https://twitter.com/" },
      { iconName: "bx bxl-linkedin", url: "https://linkedin.com/" },
      { iconName: "bx bxl-pinterest-alt", url: "https://pinterest.com/" },
    ],
  },
  {
    id: 6,
    image: "/images/team/team6.png",
    name: "Zeck Keath",
    designation: "Angular Developer",
    aosDelay: "600",
    socialLinks: [
      { iconName: "bx bxl-facebook", url: "https://facebook.com/" },
      { iconName: "bx bxl-twitter", url: "https://twitter.com/" },
      { iconName: "bx bxl-linkedin", url: "https://linkedin.com/" },
      { iconName: "bx bxl-pinterest-alt", url: "https://pinterest.com/" },
    ],
  },
  {
    id: 7,
    image: "/images/team/team7.png",
    name: "Zeet Pew",
    designation: "Web Developer",
    aosDelay: "700",
    socialLinks: [
      { iconName: "bx bxl-facebook", url: "https://facebook.com/" },
      { iconName: "bx bxl-twitter", url: "https://twitter.com/" },
      { iconName: "bx bxl-linkedin", url: "https://linkedin.com/" },
      { iconName: "bx bxl-pinterest-alt", url: "https://pinterest.com/" },
    ],
  },
  {
    id: 8,
    image: "/images/team/team8.png",
    name: "Peter Jack",
    designation: "Web Developer",
    aosDelay: "800",
    socialLinks: [
      { iconName: "bx bxl-facebook", url: "https://facebook.com/" },
      { iconName: "bx bxl-twitter", url: "https://twitter.com/" },
      { iconName: "bx bxl-linkedin", url: "https://linkedin.com/" },
      { iconName: "bx bxl-pinterest-alt", url: "https://pinterest.com/" },
    ],
  },
  {
    id: 9,
    image: "/images/team/team4.png",
    name: "Peter Jack",
    designation: "UI/UX Designer",
    aosDelay: "400",
    socialLinks: [
      { iconName: "bx bxl-facebook", url: "https://facebook.com/" },
      { iconName: "bx bxl-twitter", url: "https://twitter.com/" },
      { iconName: "bx bxl-linkedin", url: "https://linkedin.com/" },
      { iconName: "bx bxl-pinterest-alt", url: "https://pinterest.com/" },
    ],
  },
  {
    id: 10,
    image: "/images/team/team5.png",
    name: "Anna Dew",
    designation: "React Developer",
    aosDelay: "500",
    socialLinks: [
      { iconName: "bx bxl-facebook", url: "https://facebook.com/" },
      { iconName: "bx bxl-twitter", url: "https://twitter.com/" },
      { iconName: "bx bxl-linkedin", url: "https://linkedin.com/" },
      { iconName: "bx bxl-pinterest-alt", url: "https://pinterest.com/" },
    ],
  },
  {
    id: 11,
    image: "/images/team/team6.png",
    name: "Zeck Keath",
    designation: "Angular Developer",
    aosDelay: "600",
    socialLinks: [
      { iconName: "bx bxl-facebook", url: "https://facebook.com/" },
      { iconName: "bx bxl-twitter", url: "https://twitter.com/" },
      { iconName: "bx bxl-linkedin", url: "https://linkedin.com/" },
      { iconName: "bx bxl-pinterest-alt", url: "https://pinterest.com/" },
    ],
  },
  {
    id: 12,
    image: "/images/team/team7.png",
    name: "Zeet Pew",
    designation: "Web Developer",
    aosDelay: "700",
    socialLinks: [
      { iconName: "bx bxl-facebook", url: "https://facebook.com/" },
      { iconName: "bx bxl-twitter", url: "https://twitter.com/" },
      { iconName: "bx bxl-linkedin", url: "https://linkedin.com/" },
      { iconName: "bx bxl-pinterest-alt", url: "https://pinterest.com/" },
    ],
  },
];

// Pagination configuration
const paginationConfig = {
  itemsPerPage: 8,
  prevIcon: "bx bx-chevrons-left",
  nextIcon: "bx bx-chevrons-right",
};

const TeamCard: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { itemsPerPage, prevIcon, nextIcon } = paginationConfig;

  // Calculate pagination values
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = teamData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(teamData.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll to top of team section
    document
      .querySelector(".team-area")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  // Generate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="team-area ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            {currentItems.map((member) => (
              <div
                key={member.id}
                className="col-lg-3 col-sm-6"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay={member.aosDelay}
              >
                <div className="single-team active">
                  <div className="team-single-img">
                    <Image
                      src={member.image}
                      alt="Image"
                      width={140}
                      height={140}
                    />
                    <div className="team-img">
                      <Image
                        src="/images/team/team-shape.png"
                        alt="Image"
                        width={208}
                        height={198}
                      />
                    </div>
                  </div>
                  
                  <div className="team-content">
                    <h3>{member.name}</h3>
                    <span>{member.designation}</span>
                    <ul>
                      {member.socialLinks.map((social, index) => (
                        <li key={index}>
                          <a
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className={social.iconName}></i>
                          </a>
                        </li>
                      ))}
                    </ul>
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
                        className={`page-item ${
                          currentPage === number ? "active" : ""
                        }`}
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

export default TeamCard;
