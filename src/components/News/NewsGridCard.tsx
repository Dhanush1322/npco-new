"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image"; 

// Data object containing all blog posts
const blogPostsData = [
  {
    id: 1,
    image: "/images/blog/blog1.png",
    date: "20 February",
    title: "Is Machine Learning Right For You",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga veritatis veniam corrupti perferendis minima in.",
    author: "Admin",
    comments: 2,
    link: "/news/news-details"
  },
  {
    id: 2,
    image: "/images/blog/blog2.png",
    date: "21 February",
    title: "The State Of Artificial Intelligence",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga veritatis veniam corrupti perferendis minima in.",
    author: "Admin",
    comments: 3,
    link: "/news/news-details"
  },
  {
    id: 3,
    image: "/images/blog/blog3.png",
    date: "22 February",
    title: "Our Company Machine Learning",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga veritatis veniam corrupti perferendis minima in.",
    author: "Admin",
    comments: 4,
    link: "/news/news-details"
  },
  {
    id: 4,
    image: "/images/blog/blog4.png",
    date: "23 February",
    title: "The Security Risks Of Changing Package Owners",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga veritatis veniam corrupti perferendis minima in.",
    author: "Admin",
    comments: 2,
    link: "/news/news-details"
  },
  {
    id: 5,
    image: "/images/blog/blog5.png",
    date: "24 February",
    title: "Tips To Protecting Your Business And Family",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga veritatis veniam corrupti perferendis minima in.",
    author: "Admin",
    comments: 2,
    link: "/news/news-details"
  },
  {
    id: 6,
    image: "/images/blog/blog6.png",
    date: "25 February",
    title: "Protect Your Workplace From Cyber Attacks",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga veritatis veniam corrupti perferendis minima in.",
    author: "Admin",
    comments: 2,
    link: "/news/news-details"
  },
  {
    id: 7,
    image: "/images/blog/blog7.png",
    date: "25 February",
    title: "Making Peace With The Feast Or Famine Of Freelancing",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga veritatis veniam corrupti perferendis minima in.",
    author: "Admin",
    comments: 2,
    link: "/news/news-details"
  },
  {
    id: 8,
    image: "/images/blog/blog8.png",
    date: "27 February",
    title: "I Used The Web For A Day On A 50 MB Budget",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga veritatis veniam corrupti perferendis minima in.",
    author: "Admin",
    comments: 2,
    link: "/news/news-details"
  },
  {
    id: 9,
    image: "/images/blog/blog1.png",
    date: "28 February",
    title: "Here Are The 5 Most Telling Signs Of Micromanagement",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga veritatis veniam corrupti perferendis minima in.",
    author: "Admin",
    comments: 2,
    link: "/news/news-details"
  }
];

// Pagination configuration
const paginationConfig = {
  itemsPerPage: 6,
  prevIcon: "bx bx-chevrons-left",
  nextIcon: "bx bx-chevrons-right"
};

const NewsGridCard: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { itemsPerPage, prevIcon, nextIcon } = paginationConfig;
  
  // Calculate pagination values
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = blogPostsData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(blogPostsData.length / itemsPerPage);
  
  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll to top of news section
    document.querySelector('.news-area')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  // Generate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="news-area ptb-100">
        <div className="container">
          <div className="row">
            {currentItems.map((post) => (
              <div key={post.id} className="col-lg-4 col-md-6">
                <div className="single-news">
                  <div className="blog-img">
                    <Link href={post.link}>
                      <Image
                        src={post.image}
                        alt="Image"
                        width={570}
                        height={400}
                      />
                    </Link>
                    <div className="dates">
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <div className="news-content-wrap">
                    <ul>
                      <li>
                        <Link href="#">
                          <i className="flaticon-user"></i> {post.author}
                        </Link>
                      </li>
                      <li>
                        <i className="flaticon-conversation"></i> {post.comments} Comments
                      </li>
                    </ul>
                    <Link href={post.link}>
                      <h3>{post.title}</h3>
                    </Link>
                    <p>{post.description}</p>
                    <Link href={post.link} className="read-more">
                      Read More <i className="bx bx-plus"></i>
                    </Link>
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

export default NewsGridCard;