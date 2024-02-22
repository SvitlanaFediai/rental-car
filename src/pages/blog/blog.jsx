import React from "react";
import CommonSection from "../../components/section/commonSection/commonSection";
import BlogList from "../../components/UI/blogList/blogList";
import blogData from "../../assets/data/blogItems";
import Wrapper from "../../components/UI/wrapper/wrapper";
import ScrollToTop from "../../components/UI/scrollToTop/scrollToTop";

const Blog = () => {
  return (
    <>
      <ScrollToTop />
      <CommonSection title={"Blogs"}/>
      <Wrapper>
        <BlogList array={blogData}/>
      </Wrapper>
    </>
  )
}

export default Blog;