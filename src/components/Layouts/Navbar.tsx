"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import MenuItem from "./MenuItem"; 
import { menus } from "../../../libs/menus";
import "./Navbar.css";



const Navbar: React.FC = () => {
  const [menu, setMenu] = useState<boolean>(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId?.classList.add("is-sticky");
      } else {
        elementId?.classList.remove("is-sticky");
      }
    });
  }, []);

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area fixed-top">
        <nav className="navbar navbar-expand-md navbar-light">
          <div className="container">
            <Link href="/" className="navbar-brand">
              <Image src="/logo/logo.webp" alt="logo" width={150} height={37} />
            </Link>

            {/* Toggle navigation */}
            <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>

            <div className={classOne} id="navbarSupportedContent">
              <ul className="navbar-nav m-auto">
                {menus.map((menuItem) => (
                  <MenuItem key={menuItem.label} {...menuItem} />
                ))}
              </ul>

              <div className="others-options">
                <Link href="/contact" className="default-btn">
                 Contact Us <i className="bx bx-log-in-circle"></i>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
