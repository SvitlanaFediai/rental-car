import React, { useState } from "react";
import "./contactForm.scss";
import CustomInput from "../customInput/customInput";
import Button from "../../UI/button/button";

const CommentForm = ({ handleSubmit }) => {
  const [inputValue, setInputValue] = useState({
    fullName: "",
    email: "",
    commentText: ""
  });

  const {fullName, email, commentText} = inputValue;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(commentText, inputValue.fullName);
    setInputValue({
      fullName: "",
      email: "",
      commentText: ""
    });
  };

  return (
    <form action="#" className="contact__form" onSubmit={onSubmit}>
      <CustomInput placeholder="Full name" type="text" value={fullName} name="fullName" onChange={handleChange} />
      <CustomInput placeholder="Email" type="email" value={email} name="email" onChange={handleChange} />
      <CustomInput placeholder="Write comment" type="textarea" value={commentText} name="commentText" onChange={handleChange} cols={"30"} rows={"10"} />

      <Button className="btn contact__btn" type="submit" text="Post comment" disabled={commentText === ""}/>
    </form>
  )
}

export default CommentForm;