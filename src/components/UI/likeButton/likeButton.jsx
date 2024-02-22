import React, { useState } from 'react'

function LikeButton({ className }) {
  const[liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
  };
  
  return (
    <button className={`${className} ${liked ? 'liked' : ''}`} onClick={handleClick} type='button'>
      {liked ? <i className="ri-thumb-up-fill"></i> : <i className="ri-thumb-up-line"></i>}
    </button>
  )  
}

export default LikeButton;