import React, { useState } from "react";
import CarList from "../../UI/carList/carList";
import Wrapper from "../../UI/wrapper/wrapper";
import cars from "../../../assets/data/cars";
import Button from "../../UI/button/button";

const carsPerPage = 3;

const CarSection = () => {
  const [next, setNext] = useState(carsPerPage);
  const handleMoreCars = () => {
    setNext(next + carsPerPage);
  };


  return (
    <Wrapper className={"cars"}>
      <h6 className="section__subtitle" data-aos="zoom-in-right">Come with</h6>
      <h2 className="section__title" data-aos="zoom-in-right">Hot offers</h2>
      <CarList carsArray={cars} next={next} />

      {
        next < cars?.length && (
          <Button className={"btn btn--load-more"} type={"button"} text={"Load More"} onClick={handleMoreCars} data-aos="zoom-in-up" />
        )
      }
    </Wrapper>
  )
}

export default CarSection;