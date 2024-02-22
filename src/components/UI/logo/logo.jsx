import React from "react";
import "./logo.scss";
import { Link } from "react-router-dom";


const Logo = () => {
  return (
    <div className="logo">
      <Link to='/home' className="logo__link">
        <div className="logo__img">
          <i className="ri-car-line"></i>
        </div>
        <h1 className="logo__title">
          <span className="logo__subtitle">Rent Car</span>
          <span className="logo__subtitle">Service</span>
        </h1>
      </Link>
    </div>
  )
}

export default Logo;