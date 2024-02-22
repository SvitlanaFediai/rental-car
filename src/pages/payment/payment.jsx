import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Wrapper from "../../components/UI/wrapper/wrapper";
import PaymentCard from "../../components/UI/paymentCard/paymentCard";
import Success from "../../components/UI/success/success";

const Payment = () => {
  const location = useLocation();
  const {selectedPaymentOption} = location.state;
  const [success, setSuccess] = useState(false);

  return (
    <Wrapper className={"payment-page"}>
      {!success ?
        <div className="payment__mode">
          {selectedPaymentOption === "card" && <PaymentCard setSuccess={setSuccess}/>}
        </div>
      :
      <Success/>}
    </Wrapper>
  )
}

export default Payment;