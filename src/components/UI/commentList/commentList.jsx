import React from "react";
import CommentItem from "../commentItem/commentItem";

const CommentList = ({ comments, addReplay }) => {
  return (
    <div className="comment__list">

      {comments.map((item) => (
        <CommentItem item={item} key={item.id} addReplay={addReplay}/>
      ))}
    </div>
  )
}

export default CommentList;