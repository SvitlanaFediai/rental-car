import React from "react";
import "./login.scss";
import { Link, NavLink } from "react-router-dom";
import useLogin from "../../../assets/customHooks/useLogin";
import useAlertContext from "../../../assets/customHooks/useAlertContext";
import useLoader from "../../../assets/customHooks/useLoader";


const Login = () => {
  const { isLoggedIn, setIsLoggedIn } = useLogin();
  const { showAlert} = useAlertContext();
  const [loader, showLoader, hideLoader] = useLoader();

  const logout = () => {
    showLoader();
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    setTimeout(() => {
      hideLoader();
      showAlert("You left the account");
    }, 3500)

  }

  return (
    <>
      {isLoggedIn ?
        ( <div className="login-link">
            <NavLink onClick={logout}><i className="ri-logout-box-r-line"></i>Logout</NavLink>
          </div>)
          : 
          (<div className="login-link">
            <Link to='/login'><i className="ri-login-circle-line"></i> Login</Link>
            <Link to='/signup'><i className="ri-user-line"></i> Register</Link>
          </div>)
      }
      {loader}
    </>
  )
}

export default Login;