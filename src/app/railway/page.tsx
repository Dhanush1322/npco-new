import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";

import Footer from "../../components/Layouts/Footer";
import AviationInfo from "@/components/Aviation/AviationInfo";
import Railway from "@/components/Railway/Railway";
export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Railway"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Railway"
      />

      <Railway />

      {/* <ContactForm /> */}

      <Footer />
    </>
  );
}
