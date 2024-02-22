import React from "react";
import "./commonSection.scss";
import Wrapper from "../../UI/wrapper/wrapper";


const CommonSection = ({ title }) => {
  return (
    <Wrapper className={"common"}>
      <h1 data-aos="zoom-in">{ title }</h1>
    </Wrapper>
  )
}

export default CommonSection;