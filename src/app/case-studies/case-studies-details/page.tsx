import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import CaseStudiesDetailsContent from "../../../components/CaseStudiesDetails/CaseStudiesDetailsContent";
import CTA from "../../../components/Common/CTA";
import Footer from "../../../components/Layouts/Footer";
import Faq from "@/components/Faq/FaqContent";
export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Ground Support Equipment (GSE)"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Ground Support Equipment (GSE)"
      />

      <CaseStudiesDetailsContent />
 <Faq />

      <CTA />

      <Footer />
    </>
  );
}
