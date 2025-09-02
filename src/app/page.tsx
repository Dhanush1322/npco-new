// import Navbar from "../components/Layouts/Navbar";
// import MainBanner from "../components/HomeOne/MainBanner";
// import Features from "../components/HomeOne/Features";
// import About from "../components/HomeOne/About";
// import WhyChooseUs from "../components/HomeOne/WhyChooseUs";
// import Services from "../components/HomeOne/Services";
// import MakeYourBusiness from "../components/Common/MakeYourBusiness";
// import WhatWeOffer from "../components/HomeOne/WhatWeOffer";
// import Testimonials from "../components/Common/Testimonials";
// import News from "../components/Common/News";
// import Footer from "../components/Layouts/Footer";

// export default function Home() {
//   return (
//     <>
//       <Navbar />

//       <MainBanner />

//       <Features />

//       <About />

//       <WhyChooseUs />

//       <Services />

//       <MakeYourBusiness />

//       <WhatWeOffer />

//       <Testimonials />

//       <News />

//       <Footer />
//     </>
//   );
// }

import React from "react";
import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/HomeFour/MainBanner";
import PartnerSliderTwo from "../components/Common/PartnerSliderTwo";

import Services from "../components/HomeFour/Services";
import WhyChooseUs from "../components/HomeFour/WhyChooseUs";
import MakeYourBusiness from "../components/HomeFour/MakeYourBusiness";
import WhatWeOffer from "../components/HomeFour/WhatWeOffer";
import Team from "../components/Common/Team";
import CaseStudies from "../components/HomeFour/CaseStudies";
import Testimonials from "../components/Common/Testimonials";
import Faq from "../components/HomeFour/Faq";
import Newsletter from "../components/Common/Newsletter";
import News from "../components/HomeFour/News";
import Footer from "../components/Layouts/Footer";
import WeSupply from "@/components/HomeFour/WeSupply";
import OurTeam from "@/components/HomeFour/OurTeam";
import Partner from "@/components/Common/Partner";
import Location from "@/components/Location/Location";
import About from "@/components/About/About";
import TimeLine from "@/components/TimeLine/TimeLine";
export default function Home() {
  return (
    <>
      <div className="body-bg-color">
        <Navbar />

        <MainBanner />


        <About />
        <WhyChooseUs />
        <TimeLine />
        {/* <Services /> */}

        <WeSupply />
        <Team />
        <OurTeam />

        {/* <MakeYourBusiness /> */}

        {/* <WhatWeOffer /> */}

        {/* <CaseStudies /> */}


        {/* 
        <Testimonials /> */}

        {/* <Faq /> */}
        <Partner />

        <PartnerSliderTwo />
        <Location />

        {/* <News /> */}

        <Footer />
      </div>
    </>
  );
}
