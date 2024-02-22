import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LoginProvider } from "./context/loginProvider";
import { AlertProvider } from "./context/alertProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LoginProvider>
      <AlertProvider>
        <App />
      </AlertProvider>
    </LoginProvider>
  </React.StrictMode>
);
