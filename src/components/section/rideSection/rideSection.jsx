import React from "react";
import "./rideSection.scss";
import { Link } from "react-router-dom";
import ride from "../../../img/ride.jpg";
import Wrapper from "../../UI/wrapper/wrapper";


const RideSection = () => {
  return (
    <Wrapper className={"ride"}>
      <div className="ride__container">
        <div className="ride__img" data-aos="fade-right">
          <img src={ride} alt="ride" />
        </div>
        <div className="ride__info" data-aos="fade-left">
          <h2 className="section__title">We Are Committed To Provide Safe Ride Solutions</h2>
          <p className="section__description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet veniam assumenda aperiam accusantium ex autem perferendis repellendus nostrum delectus. Nemo et dolore est tempore rem minima adipisci magni dolorum ipsam.</p>
          <p className="section__description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet veniam assumenda aperiam accusantium ex autem perferendis repellendus nostrum delectus. Nemo et dolore est tempore rem minima adipisci magni dolorum ipsam. Nemo et dolore est tempore rem minima adipisci magni dolorum ipsam.</p>
          <div className="ride__contact">
            <span>
              <i className="ri-phone-line"></i>
            </span>
            <div className="ride__phone">
              <h6 className="section__subtitle">Need Any Help?</h6>
              <Link to="tel:+34840220569">+34 840-220-569</Link>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default RideSection;