import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import CaseStudiesDetailsContent from "../../../components/CaseStudiesDetails/CaseStudiesDetailsContent3";
import CTA from "../../../components/Common/CTA";
import Footer from "../../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Ensuring Soaring Safety"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Ensuring Soaring Safety"
      />

      <CaseStudiesDetailsContent />

      <CTA />

      <Footer />
    </>
  );
}
