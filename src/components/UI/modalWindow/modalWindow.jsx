import React from 'react';
import "./modalWindow.scss";
import Button from '../button/button';
import useAlertContext from '../../../assets/customHooks/useAlertContext';

function ModalWindow() {
  const {open, message, hideAlert} = useAlertContext();

  setTimeout(hideAlert, 5000);

  return (
    <>
      {
        open && (
          <div className="modal">
            <div className="modal__overlay">
              <p>{message}</p>
              <Button className={"modal__btn"} type={"button"} text={"x"} onClick={hideAlert} />
            </div>
          </div>
        )
      }
    </>
  ) 
}

export default ModalWindow;