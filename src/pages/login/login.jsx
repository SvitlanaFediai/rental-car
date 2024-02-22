import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./login.scss";
import Wrapper from "../../components/UI/wrapper/wrapper";
import LogInForm from "../../components/UI/logInForm/logInForm";
import SignUpForm from "../../components/UI/signUpForm/signUpForm";
import useLogin from "../../assets/customHooks/useLogin";
import Button from "../../components/UI/button/button";
import useLoader from "../../assets/customHooks/useLoader";

const Login = () => {
  const { isLoggedIn, setIsLoggedIn } = useLogin();
  const {type} = useParams();
  const navigate = useNavigate();
  const [loader, showLoader, hideLoader] = useLoader();

  const containerClass = "login__wrapper" + " " + (type === "signup" ? "right-panel-active" : "");

  return (
    <Wrapper className={"login"}>
      <div className={containerClass} >
        <LogInForm setIsLoggedIn={setIsLoggedIn} showLoader={showLoader} hideLoader={hideLoader} />
        <SignUpForm showLoader={showLoader} hideLoader={hideLoader} />
        <div className="login__overlay-container">
          <div className="login__overlay">
            <div className="login__overlay-panel login__overlay-left">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <Button className={"btn login__btn login__btn--overlay"} type={"button"} text={"Log In Instead"} id="logIn" onClick={() => navigate("/login")} />
            </div>
            <div className="login__overlay-panel login__overlay-right">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <Button className={"btn login__btn login__btn--overlay"} type={"button"} text={"Sign Up Instead"} id="signUp" onClick={() => navigate("/signup")} />
            </div>
          </div>
        </div>
      </div>

      { loader }
    </Wrapper>
  )
}

export default Login;