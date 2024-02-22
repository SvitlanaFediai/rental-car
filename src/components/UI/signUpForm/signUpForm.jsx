import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../pages/login/login.scss";
import { PasswordInput } from "../passwordInput/passwordInput";
import Button from "../button/button";
import CustomInput from "../customInput/customInput";
import useAlertContext from "../../../assets/customHooks/useAlertContext";

const SignUpForm = ({ showLoader, hideLoader }) => {
  const [input, setInput] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const navigate = useNavigate();
  const { showAlert } = useAlertContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let inputError = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };

    const loggedUser = JSON.parse(localStorage.getItem("user"));

    if (loggedUser !== null && input.email === loggedUser.email) {
      setError({
        ...inputError,
        email: `You already have such an account with ${input.email} email`
      });
      return;
    };

    if ("" === input.name || input.name.length < 4) {
      setError({
        ...inputError,
        name: "Please enter your name. Your name must be 4 characters or longer"
      });
      return;
    };
    if ("" === input.email) {
      setError({
        ...inputError,
        email: "Please enter your email"
      });
      return;
    };
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(input.email)) {
      setError({
        ...inputError,
        email:"Please enter a valid email"
      });
      return;
    };
    if ("" === input.password) {
      setError({
        ...inputError,
        password: "Please enter a password"
      });
      return;
    };
    if (input.password.length < 8) {
      setError({
        ...inputError,
        password: "The password must be 8 characters or longer"
      });
      return;
    };
    if (/[a-z]/.test(input.password) < 1) {
      setError({
        ...inputError,
        password: "Your password must contain at least one letter"
      });
      return;
    };
    if (/[0-9]/.test(input.password) < 1) {
      setError({
        ...inputError,
        password: "Your password must contain at least one digit"
      });
      return;
    };

    if (input.confirmPassword !== input.password ) {
      setError({
        ...inputError,
        confirmPassword: "Password and confirm password should be same"
      });
      return;
    };

    showLoader();
    localStorage.setItem("user", JSON.stringify(input));
    setInput({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
    setError({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    });

    setTimeout(() => {
      hideLoader();
      showAlert(`Thanks for signing up ${input.name}. We've sent you an email to ${input.email}.`)
      navigate('/login');
    }, 5000);
  }

  return (
    <div className="login__form-container login__sign-up-container">
      
      <form action="#" className="login__form" onSubmit={handleSubmit}>
        <h1>Create Account</h1>
        <CustomInput placeholder={"Full Name"} type={"text"} value={input.name} name={"name"} onChange={(e) => setInput({...input, [e.target.name]: e.target.value})}/>
        {error.name && <span className="login__error">{error.name}</span>}
          
        <CustomInput placeholder={"Email"} type={"email"} value={input.email} name={"email"} onChange={(e) => setInput({...input, [e.target.name]: e.target.value})}/>
        {error.email && <span className="login__error">{error.email}</span>}
          
        <PasswordInput placeholder={"Password"} value={input.password} name={"password"} onChange={(e) => setInput({...input, [e.target.name]: e.target.value})}/>
        {error.password && <span className="login__error">{error.password}</span>}
          
        <PasswordInput placeholder={"Confirm Password"} value={input.confirmPassword} name={"confirmPassword"} onChange={(e) => setInput({...input, [e.target.name]: e.target.value})}/>
        {error.confirmPassword && <span className="login__error">{error.confirmPassword}</span>}

        <Button className={"btn login__btn"} type={"submit"} text={"Sign Up"} />
      </form>
    </div>
    
  )
}

export default SignUpForm;