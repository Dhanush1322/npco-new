import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";

import Footer from "../../../components/Layouts/Footer";
import Gse from "@/components/Gse/Gse";
export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="GSE Services"
        homePageUrl="/"
        homePageText="Home"
        activePageText="GSE Services"
      />

      <Gse />

      {/* <ContactForm /> */}

      <Footer />
    </>
  );
}
