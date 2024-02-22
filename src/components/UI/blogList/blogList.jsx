import React from "react";
import "./blogList.scss";
import BlogItem from "../blogItem/blogItem";

const BlogList = ({ array, next }) => {

  return (
    <div className="blog__list">
      {array.slice(0, next).map((item) => (
        <BlogItem item={item} key={item.id} />
      ))}
    </div>
  )
}

export default BlogList;