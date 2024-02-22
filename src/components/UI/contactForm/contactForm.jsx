import React, { useState } from "react";
import "../commentForm/contactForm.scss";
import CustomInput from "../customInput/customInput";
import Button from "../../UI/button/button";
import { useNavigate } from "react-router-dom";
import PathConstants from "../../../routers/pathConstans";
import useAlertContext from "../../../assets/customHooks/useAlertContext";

const ContactForm = () => {
  const [inputValue, setInputValue] = useState({
    fullName: "",
    email: "",
    message: ""
  });

  const {fullName, email, message} = inputValue;
  const isTextareaDisabled = message.length === 0;
  const navigate = useNavigate();
  const { showAlert } = useAlertContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue({
      fullName: "",
      email: "",
      message: ""
    });
    showAlert(`Thanks ${fullName} for your message.We will contact you shortly`);
    setTimeout(() => {
      navigate(PathConstants.HOME);
    }, 5000)
  };
  
  return (
    <form action="#" className="contact__form" onSubmit={handleSubmit}>
      <CustomInput placeholder="Full name" type="text" value={fullName} name="fullName" onChange={handleChange} />
      <CustomInput placeholder="Email" type="email" value={email} name="email" onChange={handleChange} />
      <CustomInput placeholder="Message" type="textarea" value={message} name="message" onChange={handleChange} cols={"30"} rows={"10"} />

      <Button className="btn contact__btn" type="submit" text="Send message" disabled={isTextareaDisabled}/>
    </form>
    
  )
}

export default ContactForm;