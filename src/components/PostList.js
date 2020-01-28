import React, { Component } from 'react';

import PostItem from './PostItem';

import profile from '../assets/profile.jpeg';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Mattheus Einloft",
          avatar: profile
        },
        date: "27 Jan 2020",
        content: "Desenvolvi essa interface semelhante à do Facebook utilizando React. Alguém poderia fazer um \"code review\" de meu projeto, para que eu possa melhorar cada vez mais? Sugestões de design da interface também são bem-vindas. Obrigado! :)",
        comments: [
          {
            id: 1,
            author: {
              name: "Anônimo",
              avatar: "https://www.mnleadership.org/wp-content/uploads/2017/02/Anonymous-Avatar.png" 
            },
            content: "Ficou muito bom! Parabéns, Mattheus!"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: 'Gabriel Souza',
          avatar: 'https://i.pravatar.cc/150?img=51'
        },
        date: '28 Jan 2020',
        content:
          'Fala galera, beleza?\nEstou fazendo o Bootcamp GoStack e está sendo muito massa! Alguém mais aí fazendo? Comenta aí na publicação para trocarmos uma idéia',
        comments: [
          {
            id: 1,
            author: {
              name: 'Clara Gomes',
              avatar: 'https://i.pravatar.cc/150?img=5'
            },
            date: '04 Jun 2019',
            content:
              'Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios construída!'
          },
          {
            id: 2,
            author: {
              name: 'Tiago Almeida',
              avatar: 'https://i.pravatar.cc/150?img=11'
            },
            date: '04 Jun 2019',
            content:
              'Que maaaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes'
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