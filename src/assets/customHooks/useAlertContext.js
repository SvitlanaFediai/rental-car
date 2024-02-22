import { useContext } from "react";
import AlertContext from "../../context/alertProvider";

const useAlertContext = () => {
  return useContext(AlertContext);
};

export default useAlertContext;
