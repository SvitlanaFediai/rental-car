import React , { useState } from "react";
import BlogList from "../../UI/blogList/blogList";
import blogData from "../../../assets/data/blogItems";
import Wrapper from "../../UI/wrapper/wrapper";
import Button from "../../UI/button/button";

const blogsPerPage = 3;

const BlogSection = () => {
  const [next, setNext] = useState(blogsPerPage);
  const handleMoreBlogs = () => {
    setNext(next + blogsPerPage);
  };

  return (
    <Wrapper className={"blog"}>
      <h6 className="section__subtitle" data-aos="zoom-in-right">Explore our blogs</h6>
      <h2 className="section__title" data-aos="zoom-in-right">Latest blogs</h2>
      <BlogList array={blogData} next={next} />

      {
        next < blogData?.length && (
          <Button className={"btn btn--load-more"} type={"button"} text={"Load More"} onClick={handleMoreBlogs} data-aos="zoom-in-up" />
        )
      }
    </Wrapper>
  )
}

export default BlogSection;