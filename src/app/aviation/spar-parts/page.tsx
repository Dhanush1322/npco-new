import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import ContactInfo from "../../../components/Contact/ContactInfo";
import ContactForm from "../../../components/Contact/ContactForm";
import Footer from "../../../components/Layouts/Footer";
import SpareDetails from "@/components/SpareParts/SpareDetails";
import MakeYourBusiness from "@/components/Common/MakeYourBusiness";
import SparePartsItem from "@/components/SpareParts/SparePartsItem";
import SupportBox from "@/components/Common/SupportBox";
import Faq from "@/components/SpareParts/Faq";
export default function Page() {
    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="Spare Parts"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Spare Parts"
            />

            <SpareDetails />
            <SparePartsItem />
            <Faq />
            <SupportBox />
            <Footer />
        </>
    );
}
