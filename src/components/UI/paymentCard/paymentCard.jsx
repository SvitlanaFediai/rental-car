import React, { useState } from "react";
import "./paymentCard.scss";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import CustomInput from "../customInput/customInput";
import Button from "../button/button";


const PaymentCard = ({ setSuccess }) => {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");
  const [error, setError] = useState({
    number: "",
    name: "",
    cvc: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let inputError = {
      number: "",
      name: "",
      expiryDate: "",
      cvc: "",
    }

    const currentYear = new Date().getFullYear() % 100;
    const currentMonth = new Date().getMonth() + 1;
    const enteredYear = parseInt(date.slice(2), 10);
    const enteredMonth = parseInt(date.slice(0, 2), 10);

    if(number === "" || number.length < 16 || !/^[0-9]+$/.test(number)) {
      setError({
        ...inputError,
        number: "Enter a valid Card number"
      });
      return;
    }

    if(name === "" || /^[a-zA-Z]*$/i.test(name)) {
      setError({
        ...inputError,
        name: "Please enter valid name of card owner"
      });
      return;
    }

    if (enteredYear < currentYear || (enteredYear === currentYear && enteredMonth < currentMonth) || enteredMonth < 1 || enteredMonth > 12) {
      setError({
        ...inputError,
        expiryDate: "Invalid expiry date"
      });
      return;
    }

    if(cvc === "" || cvc.length < 3) {
      setError({
        ...inputError,
        cvc: "Must be 3 characters"
      });
      return;
    }

    setSuccess(true);
  }

  return (
    <div className="payment-card">
      <div className="payment-card__card" data-aos="fade-down-right">
        <h5>Enter Your Card Details</h5>
        <Cards
          number={number}
          name={name}
          expiry={date}
          cvc={cvc}
          focused={focus}
        />
      </div>
      
      <form action="#" onSubmit={handleSubmit} className="payment-card__form" data-aos="fade-down-left">
        <div className="payment-card__container">
          <CustomInput
            type={"number"}
            name={"number"}
            placeholder={"Card Number"}
            value={number}
            onChange={(e) => {
              setNumber(e.target.value);
            }}
            onFocus={(e) => setFocus(e.target.name)}
            className={"form-control"}
            required
          />
          {error.number && <span className="login__error">{error.number}</span>}

          <CustomInput
            type={"text"}
            name={"name"}
            placeholder={"Name"}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            onFocus={(e) => setFocus(e.target.name)}
            className={"form-control"}
            required
          />
          {error.name && <span className="login__error">{error.name}</span>}

          <CustomInput
            type={"number"}
            name={"expiry"}
            placeholder={"Expiration Date"}
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
            onFocus={(e) => setFocus(e.target.name)}
            className={"form-control"}
            pattern={"\d\d/\d\d"}
            required
          />
          {error.expiryDate && <span className="login__error">{error.expiryDate}</span>}

          <CustomInput
            type={"number"}
            name={"cvc"}
            placeholder={"CVC"}
            value={cvc}
            onChange={(e) => {
              setCvc(e.target.value);
            }}
            onFocus={(e) => setFocus(e.target.name)}
            className={"form-control"}
            pattern={"\d{3,4}"}
            required
          />
          {error.cvc && <span className="login__error">{error.cvc}</span>}
        </div>
        
        <Button className={"btn"} type={"button"} text={"Confirm"} onClick={handleSubmit} />
      </form>
    </div>
  )
}
export default PaymentCard;