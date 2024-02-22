import React, { useState } from "react";
import "./paymentMethod.scss";
import cardImg from "../../../img/master-card.jpg";
import payPalImg from "../../../img/paypal.jpg";
import { useNavigate } from "react-router-dom";
import Button from "../button/button";
import CustomInput from "../customInput/customInput";


const PaymentMethod = ({ carName }) => {
  const [selectedPaymentOption, setSelectedPaymentOption] = useState("card");

  const {bank, card, payPal, mobile} = selectedPaymentOption;
  const navigate = useNavigate();

  function onChangeOption (event) {
    setSelectedPaymentOption(event.target.value);
  }

  return (
    <div className="payment" data-aos="fade-up-left">
      <h5 className="section__title">Payment methods</h5>
      <div className="payment__list">
        <div className="payment__item disabled">
          <label htmlFor="bank">
            <CustomInput type={"radio"} name={"payment"} value={"bank"} onChange={onChangeOption} id="bank" disabled={true} checked={bank} />
            <span class="payment__item--design"></span>
            <span class="payment__item--value">Bank transfer</span>
          </label>
        </div>
        <div className="payment__item">
          <label htmlFor="card">
            <CustomInput type={"radio"} name={"payment"} value={"card"} onChange={onChangeOption} id="card" defaultChecked={true} checked={card}/>
            <span class="payment__item--design"></span>
            <span class="payment__item--value">Credit/Debit Card</span>
          </label>
          <img src={cardImg} alt="card" />
        </div>
        <div className="payment__item disabled">
          <label htmlFor="payPal">
            <CustomInput type={"radio"} name={"payment"} value={"PayPal"} onChange={onChangeOption} id={"payPal"} disabled={true} checked={payPal} />
            <span class="payment__item--design"></span>
            <span class="payment__item--value">PayPal</span>
          </label>
          <img src={payPalImg} alt="payPal" />
        </div>
        <div className="payment__item disabled">
          <label htmlFor="mobile">
            <CustomInput type={"radio"} name={"payment"} value={"Apple/Google Pay"} onChange={onChangeOption} id={"mobile"} disabled={true} checked={mobile}/>
            <span class="payment__item--design"></span>
            <span class="payment__item--value">Apple/Google Pay</span>
          </label>
        </div>
        <p className="section__description">*Sorry, but only payment by Credit/Debit Card is available now. We apologize for any inconvenience caused</p>
        <div className="payment__btn">
          <Button className={"btn"} type={"button"} text={"Finish your booking"} onClick={() => navigate(`/cars/${carName}/payment`, {state: { selectedPaymentOption }})} />
        </div>
      </div>
    </div>
  )
}

export default PaymentMethod;