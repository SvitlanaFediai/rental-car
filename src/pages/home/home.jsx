import React from "react";
import "./home.scss";
import CarSlider from "../../components/UI/slider/slider";
import SearchForm from "../../components/UI/searchForm/searchForm";
import AboutSection from "../../components/section/aboutSection/aboutSection";
import ServicesSection from "../../components/section/servicesSection/service";
import CarSection from "../../components/section/carsSection/carsSection";
import ReviewsSection from "../../components/section/reviewsSection/reviewsSection";
import BlogSection from "../../components/section/blogSection/blog";
import ScrollToTop from "../../components/UI/scrollToTop/scrollToTop";

const Home = () => {
  return (
    <>
      <ScrollToTop />
      <section className="slider__section">
        <CarSlider />
        <SearchForm></SearchForm>
      </section>
      <AboutSection />
      <ServicesSection />
      <CarSection />
      <ReviewsSection />
      <BlogSection />
    </>
  )
}

export default Home;