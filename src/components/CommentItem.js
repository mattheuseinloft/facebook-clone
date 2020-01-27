import React from 'react';

function CommentItem({ data }) {
  return (
    <div className="commentItem">
      <img src={data.author.avatar} />
      <div className="commentBox">
        <p id="authorName">{data.author.name}</p>
        <p id="commentContent">{data.content}</p>
      </div>
    </div>
  );
}

export default CommentItem;