import React from "react";
import "./carItem.scss";
import { Link } from "react-router-dom";

const CarItem = ({ car }) => {

  return (
    <div className="car__item" data-aos="flip-left">
      <div className="car__image">
        <img className="" src={car.imgUrl} alt="car" />
      </div>
      <div className="car__info">
        <h4 className="car__title">{car.carName}</h4>
        <h6 className="car__price">${car.price}.00
          <span>/Day</span>
        </h6>
        <div className="car__desc">
          <p className="car__text">
            <i className="ri-car-line"></i> {car.model}
          </p>
          <p className="car__text">
            <i className="ri-settings-2-line"></i> {car.automatic}
          </p>
          <p className="car__text">
            <i className="ri-timer-flash-line"></i> {car.speed}
          </p>
        </div>
        <div className="car__button-container">
          <button className="btn car__btn car__btn--rent">
            <Link to={`/cars/${car.carName}`}>Rent</Link>
          </button>

          <button className="btn car__btn car__btn--details">
            <Link to={`/cars/${car.carName}`}>Details</Link>
          </button>
        </div>
        
      </div>
    </div>
  )
}

export default CarItem;