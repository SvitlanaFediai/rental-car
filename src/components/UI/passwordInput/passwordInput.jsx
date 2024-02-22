import { useState } from "react";

export const PasswordInput = (props) => {
  const [isVisible, setVisible] = useState(false);

  const togglePassword = (e) => {
    e.stopPropagation();
    setVisible(!isVisible);
  };

  return (
    <div className="login__form-password">
      <input type={!isVisible ? "password" : "text"} {...props} required />
      <button className="login__form-password--btn" onClick={togglePassword}>
        {isVisible ? <i className="ri-eye-line"></i> : <i className="ri-eye-off-line"></i>}
      </button>
    </div>
  );
}