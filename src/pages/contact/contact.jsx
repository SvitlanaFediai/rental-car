import React from "react";
import "./contact.scss";
import { Link } from "react-router-dom";
import Wrapper from "../../components/UI/wrapper/wrapper";
import CommonSection from "../../components/section/commonSection/commonSection";
import ContactForm from "../../components/UI/contactForm/contactForm";

const socialLinks = [
  {
    url: "https://uk-ua.facebook.com/",
    icon: "ri-facebook-box-fill",
  },
  {
    url: "https://www.instagram.com/svitlanka_fd/",
    icon: "ri-instagram-line",
  },
  {
    url: "https://www.linkedin.com/in/svitlana-fediai-a95061210/",
    icon: "ri-linkedin-box-fill",
  },
  {
    url: "https://github.com/SvitlanaFediai/",
    icon: "ri-github-fill",
  },
];


const Contact = () => {
  return (
    <>
      <CommonSection title="Contact" />
      <Wrapper>
        <div className="contact">
          <div className="contact__form-container" data-aos="fade-right">
            <h5>Get in touch</h5>
            <ContactForm />
          </div>
          <div className="contact__info" data-aos="fade-left">
            <div>
              <h5>Contact information</h5>
              <p className="section__description">Nave 80, 29660 Marbella, Málaga, Spain</p>
              <div>
                <h6>Phone:</h6>
                <Link className="section__description" to="tel:+34840220569">+34 840-220-569</Link>
              </div>
              <div>
                <h6>Email:</h6>
                <Link className="section__description" to="mailto:rentCarSpain@gmail.com">rentCarSpain@gmail.com</Link>
              </div>
            </div>
            <div className="contact__links">
              <h5>Follow us</h5>
              <div className="contact__list">
                {socialLinks.map((link, index) => (
                  <p className="contact__item" key={index}>
                    <Link
                      to={link.url}
                      className="contact__link-icon"
                    >
                      <i className={link.icon}></i>
                    </Link>
                  </p>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </Wrapper>
    </>
  )
}

export default Contact;