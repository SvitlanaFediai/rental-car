import React, { useState } from "react";
import "./commentItem.scss";
import noImg from "../../../img//no-image.png";
import CommentForm from "../commentForm/commentForm";
import LikeButton from "../likeButton/likeButton";

const CommentItem = ({ item, addReplay }) => {
  const [isReplaying, setIsReplaying] = useState(false);

  return (
    <div className="comment__item" data-aos="fade-right">
      <img src={item.ava ? item.ava : noImg} alt="user image" />
      <div className="comment__content">
        <h6 className="">{item.name}</h6>
        <p className="section__description">{item.date}</p>
        <p className="section__description">{item.comment}</p>

        <div className="comment__btn-container">
          <LikeButton className={"comment__like"} />
            
          {isReplaying ?
            <button className="comment__replay" onClick={() => setIsReplaying(false)}>
              <i className="ri-mail-close-line"></i> Cancel
            </button>
            :
            <button className="comment__replay" onClick={() => setIsReplaying(true)}>
              <i className="ri-reply-line"></i> Replay
            </button>
          }
        </div>

        {isReplaying && <CommentForm handleSubmit={(text, author) => {
                                                   addReplay(text, author, item.id);
                                                   setIsReplaying(false)}} /> }
        
        {item.childrenComments && (
          item.childrenComments.map((reply) => (
            <CommentItem key={reply.id} item={reply} addReplay={addReplay} />
          ))
        )}
      </div>
    </div>
  )
}

export default CommentItem;