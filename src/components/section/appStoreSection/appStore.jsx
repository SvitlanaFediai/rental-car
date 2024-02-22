import React from "react";
import "./appStore.scss";
import Wrapper from "../../UI/wrapper/wrapper";
import { Link } from "react-router-dom";
import playStoreImg from "../../../img/play_store.png";
import appStoreImg from "../../../img/app_store.png";

const AppStore = () => {
  return (
    <Wrapper className={"app-store"}>
      <div className="app-store__container">
        <div data-aos="fade-up">
          <h2 className="section__title">Get Started with our app</h2>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique magnam harum accusantium odit?</p>
          <div className="app-store__img-box">
            <Link to="#">
              <img src={playStoreImg} alt="" />
            </Link>
            <Link to="#">
              <img src={appStoreImg} alt="" />
            </Link>
          </div>
        </div>
      </div>
      
    </Wrapper>
  )
}

export default AppStore;