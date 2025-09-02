"use client";

import React from "react";
import Image from "next/image";

const CaseStudiesDetailsContent: React.FC = () => {
  return (
    <>
      <div className="service-details-area ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="service-details-wrap">
                {/* ✅ Company Logo */}
                <div className="service-img text-center mb-4">
                  <Image
                    src="/blog/booeing.jpg" // replace with actual NPCO logo path
                    alt="National Pledges Commercial Co. Logo"
                    width={400}
                    height={300}
                  />
                </div>

                <h3>Boeing Supplier</h3>
                <p>
                  In the dynamic world of the aerospace industry, we acknowledge
                  the importance of our responsibility through quality aircraft
                  and maintenance services and other tools and that’s why we aim
                  to be the best Boeing supplier not only in Saudi Arabia but
                  also the whole world.
                </p>

                <h4>Comprehensive Product Range</h4>
                <p>
                  As a premier Boeing supplier across the Saudi Kingdom, NPCO
                  offers a diverse range of products as we understand that every
                  client has their own requirements, and meeting those
                  requirements is what makes us the best name in the industry.
                  From precision machined components to advanced avionics
                  systems, we strive to provide clients with the best possible
                  solutions for their Boeing demands.
                </p>

                <h4>Our Product Range Includes:</h4>
                <ul>
                  <li>
                    <b>Precision Machined Components:</b> We excel in the
                    production of machine parts for Boeing aircraft which shows
                    our machining capabilities. While making ourselves a
                    reliable choice for our clients is our aim, our performance
                    is fueled with patience and excellence.
                  </li>
                  <li>
                    <b>Avionics Systems:</b> The safety of our clients is our
                    priority. NPCO has a large stock of cutting-edge avionics
                    solutions designed to integrate seamlessly with Boeing’s
                    aircraft, focusing on overall functionality.
                  </li>
                  <li>
                    <b>Composite Materials:</b> Customer satisfaction is one of
                    our primary objectives. We focus on providing lightweight,
                    durable materials considering the demands of aerospace
                    applications.
                  </li>
                </ul>

                <h4>Why Choose NPCO as Your Boeing Supplier Partner?</h4>
                <ul>
                  <li>
                    <b>Unrivaled Expertise:</b> NPCO brings years of experience
                    and expertise with our specialized team of industry veterans,
                    supply chain specialists, and procurement professionals who
                    understand the unique challenges and requirements of Boeing
                    suppliers.
                  </li>
                  <li>
                    <b>Comprehensive Solutions:</b> NPCO offers a complete chain
                    from raw materials to finished components. Our services
                    include strategic sourcing, procurement, logistics, and
                    inventory management.
                  </li>
                  <li>
                    <b>Cutting-Edge Technology:</b> In the rapidly evolving
                    industry, staying ahead is the key. We adopt advanced
                    technologies to provide real-time visibility, data
                    analytics, and predictive modeling.
                  </li>
                  <li>
                    <b>Quality Assurance:</b> Quality is non-negotiable at NPCO.
                    All services meet the highest industry standards and Boeing’s
                    requirements, backed by certifications including ISO.
                  </li>
                </ul>

               </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudiesDetailsContent;
