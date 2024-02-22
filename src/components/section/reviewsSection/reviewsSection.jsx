import React from "react";
import "./reviewsSection.scss";
import Reviews from "../../UI/reviews/reviews";
import Wrapper from "../../UI/wrapper/wrapper";

const ReviewsSection = () => {

  return (
    <Wrapper className={"review"}>
      <h6 className="section__subtitle" data-aos="zoom-in-right">Our clients says</h6>
      <h2 className="section__title" data-aos="zoom-in-right">Reviews</h2>
      <Reviews />
    </Wrapper>
  )
}

export default ReviewsSection;