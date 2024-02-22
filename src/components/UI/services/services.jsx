import React from "react";
import "./services.scss";
import services from "../../../assets/data/services";
import ServiceItem from "../servicesItem/servicesItem";

const ServicesList = () => {

  return (
    <div className="service__list">
      {services.map((item) => (
        <ServiceItem item={item} key={item.id} />
      ))}
    </div>
  )
}

export default ServicesList;