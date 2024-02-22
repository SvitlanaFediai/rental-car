import React from "react";
import "./servicesSection.scss";
import ServicesList from "../../UI/services/services";
import Wrapper from "../../UI/wrapper/wrapper";

const ServicesSection = () => {

  return (
    <Wrapper className={"services"}>
      <h6 className="section__subtitle" data-aos="zoom-in-right">See our</h6>
      <h2 className="section__title" data-aos="zoom-in-right">Popular Services</h2>
      <ServicesList />
    </Wrapper>
  )
}

export default ServicesSection;