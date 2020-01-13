import React from 'react';

function CommentItem({ data }) {
  return (
    <div className="commentItem">
      <div>
        <img src={data.author.avatar} />
        <p>{data.author.name}</p>
        <p>{data.content}</p>
      </div>
    </div>
  );
}

export default CommentItem;