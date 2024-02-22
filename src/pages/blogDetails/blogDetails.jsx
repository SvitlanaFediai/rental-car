import React, { useEffect, useState } from "react";
import "./blogDetails.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
import Wrapper from "../../components/UI/wrapper/wrapper";
import CommentList from "../../components/UI/commentList/commentList";
import CommentForm from "../../components/UI/commentForm/commentForm";
import blogData from "../../assets/data/blogItems";
import useLogin from "../../assets/customHooks/useLogin";
import useAlertContext from "../../assets/customHooks/useAlertContext";
import ScrollToTop from "../../components/UI/scrollToTop/scrollToTop";
import { newComment, insertComment } from "../../assets/utils/utils";

const BlogDetails = () => {
  const { title } = useParams();
  const findedBlog = blogData.find((blog) => blog.title === title);
  const { isLoggedIn, setIsLoggedIn } = useLogin();
  const navigate = useNavigate();
  const { showAlert } = useAlertContext();
  const [comments, setComments] = useState(findedBlog.comments);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [findedBlog]);

  const addComment = (text, author) => {
    if(!isLoggedIn) {
      showAlert('You are not logged in. Please, log in and leave comment');
      navigate("/login");
    }
    setComments([newComment(text, author), ...comments]);
  }

  const addReplay = (text, author, id) => {
    if(!isLoggedIn) {
      showAlert('You are not logged in. Please, log in and leave comment');
      navigate("/login");
    };

    let commentsWithNewReply = [...comments];
    insertComment(commentsWithNewReply, text, author, id);
    setComments(commentsWithNewReply);
  }

  return (
    <>
      <ScrollToTop />
      <Wrapper className={"details"}>
        <div className="blog__wrapper">
          <div className="blog__current-post">
            <div className="blog__details" data-aos="fade-up-right">
              <img src={findedBlog.imgUrl} alt="" />
              <h2 className="section__title">{findedBlog.title}</h2>
              <div className="blog__desc">
                <p className="section__description">
                  <i className="ri-user-line"></i> {findedBlog.author}
                </p>
                <p className="section__description">
                  <i className="ri-calendar-line"></i> {findedBlog.date}
                </p>
                <p className="section__description">
                  <i className="ri-time-line"></i> {findedBlog.time}
                </p>
              </div>
              <h6>
                <blockquote>{findedBlog.quote}</blockquote>
              </h6>
              <p className="section__description">{findedBlog.description}</p>
            </div>

            <h4>{comments.length} Comments</h4>
            {comments.length > 0
            ? <CommentList comments={comments} addReplay={addReplay}/>
            : <h4>No comments yet. Be the fist to add comment!</h4>}
            
            <div className="comment__form-container" data-aos="fade-up-left">
              <h4>Leave a comment</h4>
              <p className="section__description">You must sign-in to make or comment a post</p>
              <CommentForm handleSubmit={addComment} />
            </div>
          </div>
        
          <div className="blog__recent-post" data-aos="fade-up-left">
            <h5>Recent Posts</h5>
            <div className="blog__post-list">
              {blogData.map((item) => (
                <div className="blog__post-item" key={item.id}>
                  <img src={item.imgUrl} alt="" />
                  <h6>
                    <Link to={`/blogs/${item.title}`}>{item.title}</Link>
                  </h6>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  )
}

export default BlogDetails;