import React, { useState, useEffect } from "react";
import "./scrollToTop.scss";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {showTopBtn && (
        <div className="scroll-box">
          <button className="scroll-box__btn" onClick={goToTop}> <i className="ri-arrow-up-s-line"></i> </button>
        </div>
      )}
    </>
  )
};
export default ScrollToTop;