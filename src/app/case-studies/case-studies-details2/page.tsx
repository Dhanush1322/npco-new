import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import CaseStudiesDetailsContent from "../../../components/CaseStudiesDetails/CaseStudiesDetailsContent2";
import CTA from "../../../components/Common/CTA";
import Footer from "../../../components/Layouts/Footer";
import FaqContent from "@/components/Faq/FaqContent2";
export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Navigating Excellence with NPCO"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Navigating Excellence with NPCO"
      />

      <CaseStudiesDetailsContent />
<FaqContent />
      <CTA />

      <Footer />
    </>
  );
}
