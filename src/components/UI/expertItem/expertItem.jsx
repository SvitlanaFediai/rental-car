import React from "react";
import "./expertItem.scss";
import { Link } from "react-router-dom";


const ExpertItem = ({ item }) => {
  return (
    <div className="expert__item" data-aos="flip-up">
      <div className="expert__img">
        <img src={item.imgUrl} alt="portrait" />
        <div className="expert__link">
          <Link to={item.fbUrl} >
            <i className="ri-facebook-line"></i>
          </Link>
          <Link to={item.twitUrl} >
            <i className="ri-twitter-line"></i>
          </Link>
          <Link to={item.linkedinUrl} >
            <i className="ri-linkedin-line"></i>
          </Link>
          <Link to={item.instUrl} >
            <i className="ri-instagram-line"></i>
          </Link>
        </div>
      </div>
      <h6>{item.name}</h6>
      <p className="section__description">{item.experience}</p>
    </div>
  )
}

export default ExpertItem;