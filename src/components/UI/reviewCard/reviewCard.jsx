import React from "react";
import "./reviewCard.scss";


const ReviewCard = ({ review }) => {

  return (
    <div className="review__card" data-aos="fade-down-left">
      <p className="section__description">{review.text}</p>
      <div className="review__user-info">
        <img src={review.imgSrc} alt="user-img" />
        <p className="review__name">{review.name}</p>
      </div>
    </div>
  )
}

export default ReviewCard;