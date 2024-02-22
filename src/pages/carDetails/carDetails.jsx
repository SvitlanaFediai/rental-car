import React, { useEffect } from "react";
import "./carDetails.scss";
import cars from "../../assets/data/cars";
import BookingForm from "../../components/UI/bookingForm/bookingForm";
import PaymentMethod from "../../components/UI/paymentMethod/paymentMethod";
import { useParams } from "react-router-dom";
import Wrapper from "../../components/UI/wrapper/wrapper";

const CarDetails = () => {
  const {carName} = useParams();
  const findedCar = cars.find((car) => car.carName === carName);
  const widthValue = findedCar.rating / 5 * 100;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [findedCar]);

  return (
    <Wrapper className="car-details">
      <div className="car-details__info">
        <div className="car-details__img" data-aos="fade-right">
          <img src={findedCar.imgUrl} alt="car" />
        </div>
        
        <div className="car-details__desc" data-aos="fade-left">
          <h2 className="section__title">{findedCar.carName}</h2>

          <h6 className="car-details__price">${findedCar.price}.00/Day</h6>
          <div className="car-details__rating">
            <div className="car-details__rating--outer">
              <div className="car-details__rating--inner" style={{ width: `${widthValue}%` }}></div>
            </div>
            <span className="car-details__number-rating">
              ({findedCar.rating})
            </span>
          </div>
          

          <p className="section__description">{findedCar.description}</p>
          <div className="car-details__feature">
            <span className="section__description">
              <i class="ri-settings-2-line"></i>
              {findedCar.model}
            </span>
            <span className="section__description">
              <i class="ri-timer-flash-line"></i>
              {findedCar.automatic}
            </span>
            <span className="section__description">
              <i class="ri-map-pin-line"></i>
              {findedCar.speed}
            </span>
          </div>
          <div className="car-details__feature">
            <span className="section__description">
              <i class="ri-map-pin-line"></i>
              {findedCar.gps}
            </span>
            <span className="section__description">
              <i class="ri-wheelchair-line"></i>
              {findedCar.seatType}
            </span>
            <span className="section__description">
              <i class="ri-building-2-line"></i>
              {findedCar.brand}
            </span>
          </div>
        </div>
      </div>
      <div className="car-details__rent">
        <BookingForm />
        <PaymentMethod carName={carName}/>
      </div>
    </Wrapper>

  )
}

export default CarDetails;