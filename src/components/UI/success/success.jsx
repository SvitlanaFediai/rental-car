import React from "react";
import { useNavigate } from "react-router-dom";
import "./success.scss";
import PathConstants from "../../../routers/pathConstans";
import Button from "../button/button";

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="success__container">
      <div className="success__animation">
        <svg className="success__checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle className="success__checkmark--circle" cx="26" cy="26" r="25" fill="none" /><path className="success__checkmark--check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" /></svg>
      </div>
      <p className="section__description">We received your purchase request;<br/> We'll be in touch shortly!</p>
      <Button className={"btn"} type={"button"} text={"Return to homepage"} onClick={() => navigate(PathConstants.HOME)} />
    </div>
    
  )
}

export default Success;