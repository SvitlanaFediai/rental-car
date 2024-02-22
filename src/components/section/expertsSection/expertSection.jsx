import React from "react";
import "./expertSection.scss";
import experts from "../../../assets/data/experts";
import ExpertItem from "../../UI/expertItem/expertItem";
import Wrapper from "../../UI/wrapper/wrapper";


const ExpertSection = () => {
  return (
    <Wrapper className={"expert"}>
      <h4 className="section__subtitle" data-aos="zoom-in-right">Meet our experts</h4>
      <h2 className="section__title" data-aos="zoom-in-right">Our experts</h2>
      <div className="expert__list">
        {experts.map((item, index) => (
          <ExpertItem item={item} key={index} />
        ))}
      </div>
    </Wrapper>
  )
}

export default ExpertSection;