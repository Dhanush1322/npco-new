"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "../../../public/images/white-logo.png";
import shape1 from "../../../public/images/shape/footer-shape-one.png";
import shape2 from "../../../public/images/shape/footer-shape-two.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-top-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div
                className="single-widget"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                <Link href="/" className="logo">
                  <Image src="/logo/logo.webp" alt="logo" width={150} height={37} />
                </Link>

                <p>
                  NPCO is transforming Saudi Arabia’s Aviation, Marine, and Railway industries
                  with world-class maintenance, ground support, and supply chain solutions.
                  By 2030, we’re committed to fueling Vision 2030 with innovation and
                  client-first service.
                </p>


                <ul className="social-icon">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/" target="_blank">
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.pinterest.com/" target="_blank">
                      <i className="bx bxl-pinterest-alt"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="single-widget"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                <h3>Services</h3>
                <ul>
                  <li>
                    <Link href="/services/service-details/">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      Aviation
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/service-details/">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      Railway
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/service-details/">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      Marine
                    </Link>


                  </li>
                  <li>
                    <Link href="/services/service-details/">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      Line Maintenance
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/service-details/">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      GSE
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/service-details/">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      Spare Parts
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
<div className="col-lg-3 col-md-6">
  <div
    className="single-widget"
    data-aos="fade-in"
    data-aos-duration="800"
    data-aos-delay="400"
  >
    <h3>Privacy & Legal</h3>

    <ul>
      <li>
        <Link href="/privacy-policy">
          <i className="right-icon bx bx-chevrons-right"></i>
          Privacy Policy
        </Link>
      </li>
      <li>
        <Link href="/terms-and-conditions">
          <i className="right-icon bx bx-chevrons-right"></i>
          Terms & Conditions
        </Link>
      </li>
      <li>
        <Link href="/refund-policy">
          <i className="right-icon bx bx-chevrons-right"></i>
          Refund Policy
        </Link>
      </li>
      <li>
        <Link href="/cookie-policy">
          <i className="right-icon bx bx-chevrons-right"></i>
          Cookie Policy
        </Link>
      </li>
    </ul>
  </div>
</div>

            <div className="col-lg-3 col-md-6">
              <div
                className="single-widget"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="500"
              >
                <h3>Information</h3>

                <ul className="information">
                  <li className="address">
                    <i className="flaticon-call"></i>
                    <span>Phone</span>
                   +966 11 211 3333
                  </li>

                  <li className="address">
                    <i className="flaticon-envelope"></i>
                    <span>Email</span>
                   info@npco.sa
                  </li>

                  <li className="address">
                    <i className="flaticon-maps-and-flags"></i>
                    <span>Address</span>
                    123, Western Road, Melbourne Australia
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-shape">
          <Image src={shape1} alt="Image" width={270} height={235} />
          <Image src={shape2} alt="Image" width={270} height={235} />
        </div>
      </footer>

      {/* Footer Bottom Area   */}
      <footer className="footer-bottom-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="copy-right">
                <p>Copyright &copy; {currentYear} NPCO. All Rights Reserved</p>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="privacy">
                <ul>
                  <li>
                    <Link href="/terms-conditions">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="designed">
                <p>
                  Designed By <i className="bx bx-heart"></i>{" "}
                  <a href="https://bloomitsolutions.com/" target="_blank">
                   Bloom It Solutions
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
