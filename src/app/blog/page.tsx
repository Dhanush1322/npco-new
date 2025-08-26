

import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import ContactInfo from "../../components/Contact/ContactInfo";
import ContactForm from "../../components/Contact/ContactForm";
import Footer from "../../components/Layouts/Footer";
import CaseStudies from "@/components/HomeFour/CaseStudies";
export default function Page() {
  return (
    <>
      <Navbar />

     

      <CaseStudies />

      {/* <ContactForm /> */}

      <Footer />
    </>
  );
}
