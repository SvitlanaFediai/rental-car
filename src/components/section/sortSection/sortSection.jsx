import React, { useState } from "react";
import "./sortSection.scss";
import cars from "../../../assets/data/cars";
import CarList from "../../UI/carList/carList";
import Wrapper from "../../UI/wrapper/wrapper";
import CustomSelect from "../../UI/customSelect/customSelect";

const sortOptions = [
  {
    id: 1,
    value: "Select",
  },
  {
    id: 2,
    value: "Low to high",
  },
  {
    id: 3,
    value: "High to low",
  },
];

const SortSection = () => {
  const [sortedCars, setSortedCars] = useState([...cars]);
  
  const handleChange = (e) => {
    const sortValue = e.target.value;

    switch(sortValue) {
      case 'Low to high':
        setSortedCars([...sortedCars.sort((a, b) => a.price - b.price)]);
        break;
      case 'High to low':
        setSortedCars([...sortedCars.sort((a, b) => b.price - a.price)]);
        break;
      case 'Select':
      default:
        setSortedCars([...cars]);
    }
  }

  return (
    <Wrapper>
      <div className="sort">
        <p className="sort__title" data-aos="zoom-in-right">
          <i className="ri-sort-asc"></i> Sort By
        </p>
        <CustomSelect name={"sort"} options={sortOptions} onChange={(e) => handleChange(e)} />
        <CarList carsArray={sortedCars}/>
      </div>
    </Wrapper>
  )
}

export default SortSection;