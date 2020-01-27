import React from 'react';

import CommentItem from './CommentItem';

function PostItem({ data }) {
  return (
    <div className="postItem">
      <div className="postHeader">
        <img src={data.author.avatar} />
        <div className="details">
          <span>{data.author.name}</span>
          <span>{data.date}</span>
        </div>
      </div>

      <div className="postContent">
        <p>{data.content}</p>
      </div>

      <div className="commentList">
        {data.comments.map(comment => <CommentItem key={comment.id} data={comment} />)}
      </div>
    </div>
  );
}

export default PostItem;