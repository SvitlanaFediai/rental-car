import React from "react";
import "./blogItem.scss";
import { Link } from "react-router-dom";

const BlogItem = ({ item }) => {

  return (
    <div className="blog__item" data-aos="fade-down-right">
      <div className="blog__image-container">
        <img className="blog__image" src={item.imgUrl} alt="" />
      </div>
      <div className="blog__info">
        <Link className="blog__title" to={`/blogs/${item.title}`}>{item.title}</Link>
        <p className="section__description">
          {item.description.length > 100
            ? item.description.substr(0, 100)
            : item.description}
        </p>
        <Link className="blog__read-more" to={`/blogs/${item.title}`}>Read More</Link>
        <div className="blog__detail">
          <p className="blog__author">
            <i className="ri-user-line"></i> {item.author}
          </p>
          <div className="blog__date">
            <p className="section__description">
              <i className="ri-calendar-line"></i> {item.date}
            </p>
            <p className="section__description">
              <i className="ri-time-line"></i> {item.time}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogItem;