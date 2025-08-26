"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const News: React.FC = () => {
  // Dynamic data object
  const newsData = {
    section: {
      subtitle: "Latest News",
      title: "Our Recent News",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut ipsum fugit temporibus possimus itaque accusamus voluptatibus dignissimos nobis eaque.",
    },
    articles: [
      {
        image: {
          src: "/images/blog/blog1.png",
          alt: "Image",
        },
        date: "20 February",
        author: {
          name: "Admin",
          link: "#",
        },
        comments: "2 Comments",
        title: "Is Machine Learning Right For You",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga veritatis veniam corrupti perferendis minima in.",
        link: "/news/news-details",
        aosDelay: "200",
      },
      {
        image: {
          src: "/images/blog/blog1.png",
          alt: "Image",
        },
        date: "21 February",
        author: {
          name: "Admin",
          link: "#",
        },
        comments: "3 Comments",
        title: "The State Of Artificial Intelligence",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga veritatis veniam corrupti perferendis minima in.",
        link: "/news/news-details",
        aosDelay: "300",
      },
      {
        image: {
          src: "/images/blog/blog1.png",
          alt: "Image",
        },
        date: "22 February",
        author: {
          name: "Admin",
          link: "#",
        },
        comments: "4 Comments",
        title: "Our Company Machine Learning",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga veritatis veniam corrupti perferendis minima in.",
        link: "/news/news-details",
        aosDelay: "400",
      },
    ],
  };

  return (
    <>
      <div className="news-area pt-100 pb-70">
        <div className="container">
          <div className="section-title home-four-section-title">
            <span>{newsData.section.subtitle}</span>
            <h2>{newsData.section.title}</h2>
            <p>{newsData.section.description}</p>
          </div>

          <div className="row justify-content-center">
            {newsData.articles.map((article, index) => (
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay={article.aosDelay}
                key={index}
              >
                <div className="single-news">
                  <div className="blog-img">
                    <Link href={article.link}>
                      <Image
                        src={article.image.src}
                        alt={article.image.alt}
                        width={570}
                        height={400}
                      />
                    </Link>

                    <div className="dates">
                      <span>{article.date}</span>
                    </div>
                  </div>

                  <div className="news-content-wrap">
                    <ul>
                      <li>
                        <Link href={article.author.link}>
                          <i className="flaticon-user"></i>{" "}
                          {article.author.name}
                        </Link>
                      </li>
                      <li>
                        <i className="flaticon-conversation"></i>{" "}
                        {article.comments}
                      </li>
                    </ul>

                    <Link href={article.link}>
                      <h3>{article.title}</h3>
                    </Link>

                    <p>{article.description}</p>

                    <Link href={article.link} className="read-more">
                      Read More <i className="bx bx-plus"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
