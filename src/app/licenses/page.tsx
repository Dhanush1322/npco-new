import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";

import Footer from "../../components/Layouts/Footer";
import AviationInfo from "@/components/Aviation/AviationInfo";
import Railway from "@/components/Railway/Railway";
import Licenses from "@/components/Licenses/Licenses";
export default function Page() {
  return (
    <>
      <Navbar />

     

      <Licenses />

      {/* <ContactForm /> */}

      <Footer />
    </>
  );
}
