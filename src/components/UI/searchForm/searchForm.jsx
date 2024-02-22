import React from "react";
import "./searchForm.scss";
import CustomInput from "../customInput/customInput";
import Button from "../button/button";
import Wrapper from "../wrapper/wrapper";
import CustomSelect from "../customSelect/customSelect";

const options = [
  {
    id: 1,
    value: "AC Car"
  },
  {
    id: 2,
    value: "Non AC Car"
  },
];

const SearchForm = () => {
  return (
    <Wrapper className={"search"}>

      <div className="search__form" data-aos="fade-down">
        <div className="search__form--left" data-aos="fade-right">
          <h2>Find your best car here</h2>
        </div>
        <div className="search__form--right" data-aos="fade-left">
          <form action="" id="searchForm">
            <div className="search__form-container">
              <div className="search__form-row"><CustomInput type={"text"} placeholder={"From address"} required /></div>
              <div className="search__form-row"><CustomInput type={"text"} placeholder={"To address"} required /></div>
              <div className="search__form-row"><CustomInput type={"date"} placeholder={"Journey date"} required /></div>
              <div className="search__form-row"><CustomInput
                                                    type={"time"}
                                                    placeholder={"Journey time"}
                                                    className={"search__form-time"}
                                                    required
                                                  />
                    </div>
              <div className="search__form-row">
                <CustomSelect name={"condition"} options={options}/>
              </div>
              <div className="search__form-row"><Button className={"btn search-btn"} type={"button"} text={"Find Car"} /></div>
            </div>
          </form>
        </div>
      </div>

    </Wrapper>
  )
}

export default SearchForm;