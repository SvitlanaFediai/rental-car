import React from "react";
import "./bookingForm.scss";
import CustomInput from "../customInput/customInput";
import CustomSelect from "../customSelect/customSelect";

const personOptions = [
  {
    id: 1,
    value: "1 person",
  },
  {
    id: 2,
    value: "2 persons",
  },
  {
    id: 3,
    value: "3 persons",
  },
  {
    id: 4,
    value: "4 persons",
  },
  {
    id: 5,
    value: "5+ persons",
  },
];

const luggageOptions = [
  {
    id: 1,
    value: "1 luggage",
  },
  {
    id: 2,
    value: "2 luggages",
  },
  {
    id: 3,
    value: "3 luggages",
  },
  {
    id: 4,
    value: "4 luggages",
  },
  {
    id: 5,
    value: "5+ luggages",
  },
]

const BookingForm = () => {
  return (
    <div className="booking" data-aos="fade-up-right">
      <h5 className="section__title">Booking Information</h5>
      <form action="#" className="booking__form">
        <div className="booking__form--item">
          <CustomInput type={"text"} placeholder={"First Name"} />
        </div>
        <div className="booking__form--item">
          <CustomInput type={"text"} placeholder={"Last Name"} />
        </div>
        <div className="booking__form--item">
          <CustomInput type={"email"} placeholder={"Email"} />
        </div>
        <div className="booking__form--item">
          <CustomInput type={"tel"} placeholder={"Phone Number"} />
        </div>
        <div className="booking__form--item">
          <CustomInput type={"text"} placeholder={"From Address"} />
        </div>
        <div className="booking__form--item">
          <CustomInput type={"text"} placeholder={"To Address"} />
        </div>
        <div className="booking__form--item">
          <CustomSelect name={"person"} options={personOptions} />
        </div>
        <div className="booking__form--item">
          <CustomSelect name={"luggage"} options={luggageOptions} />
        </div>
        <div className="booking__form--item">
          <CustomInput type={"date"} placeholder={"Journey Date"} />
        </div>
        <div className="booking__form--item">
          <CustomInput
            type={"time"}
            placeholder={"Journey Time"}
          />
        </div>
        <div className="booking__form--item booking__form--msg">
          <CustomInput
            type={"textarea"}
            placeholder={"Give us additional information"}
          />
        </div>
      </form>
    </div>
  )
}

export default BookingForm;