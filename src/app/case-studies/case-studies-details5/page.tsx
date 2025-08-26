import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import CaseStudiesDetailsContent from "../../../components/CaseStudiesDetails/CaseStudiesDetailsContent5";
import CTA from "../../../components/Common/CTA";
import Footer from "../../../components/Layouts/Footer";
import FaqContent from "@/components/Faq/FaqContent4";
export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Aircraft Consumables and Expendables"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Aircraft Consumables and Expendables"
      />

      <CaseStudiesDetailsContent />
<FaqContent />
      <CTA />

      <Footer />
    </>
  );
}
