import React from 'react';

function CommentItem({ data }) {
  return (
    <div className="commentItem">
      <img className="avatar" src={data.author.avatar} />
        <p>
          <span>{data.author.name}</span>
          {data.content}
        </p>
    </div>
  );
}

export default CommentItem;