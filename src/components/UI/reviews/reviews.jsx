import React from "react";
import Slider from "react-slick";
import "./reviews.scss";
import reviews from "../../../assets/data/reviews";
import ReviewCard from "../reviewCard/reviewCard";

const Reviews = () => {
   
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    //autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="review__list">
      {reviews.map((review) => (
        <ReviewCard review={review} key={review.id} />
      ))}
    </Slider>
  )
}

export default Reviews;