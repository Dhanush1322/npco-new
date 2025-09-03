import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";

import Footer from "../../components/Layouts/Footer";
import AviationInfo from "@/components/Aviation/AviationInfo";
export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Aviation"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Aviation"
      />
      
      <AviationInfo />

      {/* <ContactForm /> */}

      <Footer />
    </>
  );
}
