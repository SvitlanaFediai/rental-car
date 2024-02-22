import React from "react";
import "./carList.scss";
import CarItem from "../carItem/carItem";

const CarList = ({ carsArray, next }) => {

  return (
    <div className="cars__list">
      {carsArray?.slice(0, next).map((car) => (
        <CarItem car={car} key={car.id} />
      ))}
    </div>
  )
}

export default CarList;