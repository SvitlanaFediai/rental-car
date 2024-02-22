import React from "react";
import "./serviceItem.scss";


const ServiceItem = ({ item }) => {
  return (
    <div className="service__item"  data-aos="flip-left">
      <span><i className={item.icon}></i></span>
      <h6 className="service__title">{item.title}</h6>
      <p className="service__desc">{item.desc}</p>
    </div>
  )
}

export default ServiceItem;