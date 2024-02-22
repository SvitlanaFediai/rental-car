import React from "react";
import "./error.scss";
import { useNavigate } from "react-router-dom";
import PathConstants from "../../routers/pathConstans";

const Error = () => {
  const navigate = useNavigate();

  return (
    <section className="error">
      <div class="error__circles">
        <p>PAGE NOT FOUND</p>
        <span class="error__circles--big"></span>
        <span class="error__circles--med"></span>
        <span class="error__circles--small"></span>
      </div>
      <button type="button" className="error__btn btn" onClick={() => navigate(PathConstants.HOME)}>Go to home page</button>
    </section>
  )
}

export default Error;