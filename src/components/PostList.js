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
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        comments: [
          {
            id: 1,
            author: {
              name: "Anonymous",
              avatar: "https://www.mnleadership.org/wp-content/uploads/2017/02/Anonymous-Avatar.png" 
            },
            content: "\"Neque porro quisquam est sadsadsadsadsadsadkbsa ouincusaondosa pndopasndopsandosandipsandipnsaid;nsa; nsa isanipdnaspidnmaspcqui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...\""
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "Mr. Poopybutthole",
          avatar: "https://pm1.narvii.com/6422/133d35d8b3d6c3ba640ef8d41df8701a41b328fb_hq.jpg"
        },
        date: "Dec 30 2019",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        comments: [
          {
            id: 1,
            author: {
              name: "Anonymous",
              avatar: "https://www.mnleadership.org/wp-content/uploads/2017/02/Anonymous-Avatar.png" 
            },
            content: "\"Neque porro quisquam est sadsa dsadsa dsadsadkbsa ouincus aondosa pndopa sndops andosandip sandipnsaid;nsa; nsa isanipdnaspidnmaspcqui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Lorem ipsum lorem isaidsai asdaisds asdaiq iasd asidas sadasidsac asidas asdsaicda sadsa...\""
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