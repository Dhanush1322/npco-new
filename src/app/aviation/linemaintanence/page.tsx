import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";

import Footer from "../../../components/Layouts/Footer";
import AviationInfo from "@/components/Aviation/AviationInfo";
import LineManintanence from "@/components/LineMaintanence/LineManintanence";
export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Line maintenence"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Line maintenence"
      />

      <LineManintanence />

      {/* <ContactForm /> */}

      <Footer />
    </>
  );
}
