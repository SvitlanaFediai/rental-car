import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import Nav from "../UI/navigation/navigation";
import Logo from "../UI/logo/logo";
import Login from "../UI/login/login";

const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="content">
          <div className="header__top">
            <div className="header__top--left">
                <span>Need Help?</span>
                <span className="header__top--help">
                  <i className="ri-phone-fill"></i> +34 840-220-569
                </span>
            </div>
            <div className="header__top--right">
              <Login />
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="header__info">
          <Logo />
          <div className="header__location">
              <span><i className="ri-earth-line"></i></span>
              <div className="header__location-content">
                <h4>Nave 80, 29660 Marbella, Málaga</h4>
                <h6>Spain</h6>
              </div>
          </div>
          <div className="header__location">
              <span><i className="ri-time-line"></i></span>
              <div className="header__location-content">
                <h4>Sunday to Friday</h4>
                <h6>10am - 7pm</h6>
              </div>
          </div>
          <div>
            <button className="header__btn btn">
              <Link to='/contact'>
                <i className="ri-phone-line"></i> Request a call
              </Link>
            </button>
          </div>
        </div>
      </div>
      <Nav />
    </header>
  )
}

export default Header;