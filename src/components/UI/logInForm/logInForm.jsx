import React, { useState } from "react";
import "../../../pages/login/login.scss";
import { Link, useNavigate } from "react-router-dom";
import PathConstants from "../../../routers/pathConstans";
import { PasswordInput } from "../passwordInput/passwordInput";
import Button from "../button/button";
import CustomInput from "../customInput/customInput";
import useAlertContext from "../../../assets/customHooks/useAlertContext";

const LogInForm = ({ setIsLoggedIn, showLoader, hideLoader }) => {
  const [input, setInput] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { showAlert} = useAlertContext();

  const handleSubmit = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setError("");

    const loggedUser = JSON.parse(localStorage.getItem("user"));

    if (loggedUser === null) {
      console.log(loggedUser);

      showAlert("You havent account yet. Please create your own account");
      setInput({
        email: '',
        password: '',
      });
      setTimeout(() => {
        navigate('/signup');
      }, 3500);
      return;
    }

    if (input.email === loggedUser.email && input.password === loggedUser.password) {
      showLoader();
      
      setTimeout(() => {
        localStorage.setItem("isLoggedIn", true);
        setIsLoggedIn(true);
        hideLoader();
        navigate(PathConstants.HOME);
        showAlert(`Logged in as ${loggedUser.name}`);
      }, 3500);

    } else {
      setError("Wrong email or password");
    }
  }

  return (
    <div className="login__form-container login__log-in-container">
      <form action="#" className="login__form" onSubmit={handleSubmit}>
        <h1>Log in</h1>
        <CustomInput placeholder={"Email"} type={"email"} value={input.email} name={"email"} onChange={(e) => setInput({...input, [e.target.name]: e.target.value})} />
        <PasswordInput placeholder={"Password"} value={input.password} name={"password"} onChange={(e) => setInput({...input, [e.target.name]: e.target.value})} />
        {error && <span className="login__error">{error}</span>}
        <Link href="#">Forgot your password?</Link>
        <Button className={"btn login__btn"} type={"submit"} text={"Log In"} />
      </form>
    </div>
  )
}

export default LogInForm;