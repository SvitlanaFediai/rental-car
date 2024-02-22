import React from "react";
import "./footer.scss"
import Logo from "../UI/logo/logo";
import CustomInput from "../UI/customInput/customInput";
import PathConstants from "../../routers/pathConstans";
import { Link } from "react-router-dom";

const quickLinks = [
  {
    path: PathConstants.ABOUT,
    display: "About",
  },
  {
    path: "#",
    display: "Privacy Policy",
  },
  {
    path: PathConstants.CAR_LISTING,
    display: "Cars",
  },
  {
    path: PathConstants.CONTACT,
    display: "Contact",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="content">
        <div className="footer__container">
          <div className="footer__logo">
            <Logo />
            <p className="footer__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et quod sequi quidem aperiam expedita magni quaerat, modi sit quia maxime consequatur sed sunt eveniet excepturi. Dicta veniam suscipit incidunt dolores.</p>
          </div>
          <div>
            <h5 className="footer__title">Quick Links</h5>
            <div className="footer__links">
              {
                quickLinks.map((link, index) => (
                  <Link to={link.path} key={index}>{link.display}</Link>
                ))
              }
            </div>
          </div>
          <div className="footer__info">
            <h5 className="footer__title">Head office</h5>
            <p className="footer__info-text">C. de Buenavista, 45, 28012 Madrid, Spain</p>
            <p className="footer__info-text">Phone: +34 840-220-568</p>
            <p className="footer__info-text">Email: rentCarSpain@gmail.com</p>
            <p className="footer__info-text">Office Time: 10am - 7pm</p>
          </div>
          <div className="footer__newsletter">
            <h5 className="footer__title">Newsletter</h5>
            <p className="footer__description">Subscribe our newsletter</p>
            <div className="footer__newsletter-form">
              <CustomInput type={"email"} placeholder={"Email"} />
              <span><i className="ri-send-plane-line"></i></span>
            </div>
          </div>
        </div>
        
        <div className="footer__copyright">
          <p>
          <i className="ri-copyright-line"></i>
          Copyright {year}, developed by Svitlana Fediai. All right reserved.
          </p>
        </div>
      </div>
    </footer>
    
  )
}

export default Footer;