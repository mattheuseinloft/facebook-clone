import React from 'react';

import CommentItem from './CommentItem';

function PostItem({ data }) {
  return (
    <div className="postItem">
      <div>
        <img src={data.author.avatar} />
        <p>{data.author.name}</p>
        <p>{data.date}</p>
        <p>{data.content}</p>
      </div>
      
      <div className="commentList">
        {data.comments.map(comment => <CommentItem key={comment.id} data={comment} />)}
      </div>
    </div>
  );
}

export default PostItem;