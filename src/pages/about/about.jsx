import React from "react";
import CommonSection from "../../components/section/commonSection/commonSection";
import AboutSection from "../../components/section/aboutSection/aboutSection";
import RideSection from "../../components/section/rideSection/rideSection";
import ExpertSection from "../../components/section/expertsSection/expertSection";
import AppStore from "../../components/section/appStoreSection/appStore";
import ScrollToTop from "../../components/UI/scrollToTop/scrollToTop";

const About = () => {
  return (
    <>
      <ScrollToTop />
      <CommonSection title={"About"}/>
      <AboutSection />
      <RideSection />
      <AppStore />
      <ExpertSection />
    </>
  )
}

export default About;