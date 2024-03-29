import { useContext } from "react";
import LoginContext from "../../context/loginProvider";

const useLogin = () => {
  return useContext(LoginContext);
};

export default useLogin;
