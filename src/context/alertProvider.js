import React, { useState, createContext } from "react";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const showAlert = (newMessage) => {
    setMessage(newMessage);
    setOpen(true);
  };

  const hideAlert = () => {
    setOpen(false);
  };

  return (
    <AlertContext.Provider value={{ showAlert, hideAlert, open, message }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
