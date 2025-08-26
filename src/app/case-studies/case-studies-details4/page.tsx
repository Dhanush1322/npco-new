import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import CaseStudiesDetailsContent from "../../../components/CaseStudiesDetails/CaseStudiesDetailsContent4";
import CTA from "../../../components/Common/CTA";
import Footer from "../../../components/Layouts/Footer";
import FaqContent from "@/components/Faq/FaqContent3";
export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Aircraft Tools – Aircraft"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Aircraft Tools – Aircraft"
      />

      <CaseStudiesDetailsContent />
<FaqContent/>
      <CTA />

      <Footer />
    </>
  );
}
