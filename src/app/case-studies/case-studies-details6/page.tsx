import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import CaseStudiesDetailsContent from "../../../components/CaseStudiesDetails/CaseStudiesDetailsContent6";
import CTA from "../../../components/Common/CTA";
import Footer from "../../../components/Layouts/Footer";
import FaqContent from "@/components/Faq/FaqContent6";
export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Boeing Supplier"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Boeing Supplier"
      />

      <CaseStudiesDetailsContent />
<FaqContent/>
      <CTA />

      <Footer />
    </>
  );
}
