import React from "react";
import "./about.scss";
import aboutImg from "../../../img/cars/bmw-offer.png";
import Wrapper from "../../UI/wrapper/wrapper";


const AboutSection = () => {
  return (
    <Wrapper className={"about"}>
      <h4 className="section__subtitle" data-aos="zoom-in-right">About Us</h4>
      <h2 className="section__title" data-aos="zoom-in-right">Welcome to car rent service</h2>
      <div className="about__container">
        <div className="about__left" data-aos="fade-right">
          <p className="about__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores doloribus debitis at delectus tenetur quod, qui quas consequatur suscipit error dolor aut vero dolores harum illum sapiente enim ipsam! Eum.Temporibus laboriosam, impedit assumenda laborum voluptatum exercitationem a optio mollitia dolore quisquam corporis excepturi saepe nisi possimus libero ex perspiciatis unde, voluptas explicabo eaque odit ipsum! Sunt voluptas quae ab.</p>
          <div className="about__items">
            <p className="about__text"><i className="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet.</p>
            <p className="about__text"><i className="ri-checkbox-circle-line"></i> Maxime aliquam eius doloribus ipsam.</p>
            <p className="about__text"><i className="ri-checkbox-circle-line"></i> Maiores doloribus debitis.</p>
            <p className="about__text"><i className="ri-checkbox-circle-line"></i> Laborum voluptatum exercitationem a optio mollitia.</p>
          </div>
        </div>
        <div className="about__right" data-aos="fade-left">
          <img src={aboutImg} alt="" className="about__img" />
        </div>
      </div>
    </Wrapper>
  )
}

export default AboutSection;