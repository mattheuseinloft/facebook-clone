import React, { Component } from 'react';

import PostItem from './PostItem';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Rick Sanchez",
          avatar: "https://avatarfiles.alphacoders.com/106/106923.jpg"
        },
        date: "Dec 20 2019",
        content: "To live is to risk it all; otherwise you're just an inert chunk of randomly assembled molecules drifting wherever the universe blows you...",
        comments: [
          {
            id: 1,
            author: {
              name: "Anonymous",
              avatar: "https://www.mnleadership.org/wp-content/uploads/2017/02/Anonymous-Avatar.png" 
            },
            content: "Totally agree!"
          },
          {
            id: 2,
            author: {
              name: "Anonymous 2",
              avatar: "https://www.mnleadership.org/wp-content/uploads/2017/02/Anonymous-Avatar.png" 
            },
            content: "Hell yeah!"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Mr. Poopybutthole",
          avatar: "https://pm1.narvii.com/6422/133d35d8b3d6c3ba640ef8d41df8701a41b328fb_hq.jpg"
        },
        date: "Dec 30 2019",
        content: "Oooweee",
        comments: [
          {
            id: 1,
            author: {
              name: "Anonymous",
              avatar: "https://www.mnleadership.org/wp-content/uploads/2017/02/Anonymous-Avatar.png" 
            },
            content: "OOOOOOOOOOOOOWEEEEEEEEEEEEEEEEEEEE"
          }
        ]
      }
    ]
  }

  render() {
    return (
      <>
        <div className="postList">
          {this.state.posts.map(post => <PostItem key={post.id} data={post} />)}
        </div>
      </>
    );
  }
}

export default PostList;