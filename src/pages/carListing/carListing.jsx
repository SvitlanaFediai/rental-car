import React from "react";
import CommonSection from "../../components/section/commonSection/commonSection";
import SortSection from "../../components/section/sortSection/sortSection";
import ScrollToTop from "../../components/UI/scrollToTop/scrollToTop";

const CarListing = () => {
  return (
    <>
      <ScrollToTop />
      <CommonSection title={"Car Listing"} />
      <SortSection />
    </>
  )
}

export default CarListing;