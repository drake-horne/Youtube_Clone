import React, { useState } from 'react'
import getComments from '../../App'
import CommentForm from './CommentForm'
import CommentList from './CommentList'

import  {render} from "react-dom";
import c from "classnames";
// const Comment =(props)=>{

//     const [commentLikes, setCommentLikes] = useState('');
//     const [commentDislikes, setCommentDisLikes] = useState('');


//     function addLike(likes, dislikes){
//         if
//     }
    
//     function handleSubmit(event, props) {
//         event.preventDefault(props);
//         let newCommentLikes = {

//             likes: commentLikes,
//             dislikes: commentDislikes,
            
//         }
//         Comment(newCommentLikes)
//     }
        


    
//     return(
//         <form onSubmit={handleSubmit}>
//             <label>Like</label>
//             <input type='submit' onChange={(event) => setCommentLikes(event.target.value)} value={commentLikes} />
//             <button type='submit'>Like</button>
//             <label>Dislike</label>
//             <input type='submit' onChange={(event) => setCommentDislikes(event.target.value)} value={commentDislikes} />
//             <button type='submit'>Dislike</button>
//         </form>
//     );

    
// } 



class Comment extends React.Component {
    state = {
      like: 0,
      dislike: 0,
      likeActive: false,
      dislikeActive: false
    };
    
  
    setDislike() {
      this.setState({
        dislikeActive: !this.state.dislikeActive,
        dislike: this.state.dislikeActive
          ? this.state.dislike - 1
          : this.state.dislike + 1
      });
    }
    setLike() {
      this.setState({
        likeActive: !this.state.likeActive,
        like: this.state.likeActive ? this.state.like - 1 : this.state.like + 1
      });
    }
  
    handleLike() {
      if (this.state.dislikeActive) {
        this.setLike();
        this.setDislike();
      }
      this.setLike();
    }
  
    handleDislike() {
      if (this.state.likeActive) {
        this.setDislike();
        this.setLike();
      }
      this.setDislike();
    }
  
    render() {
      return (
        <>
          <button 
            onClick={() => this.handleLike()}
            className={c({ ["active"]: this.state.likeActive })}
          >Likes
            {this.state.like}
          </button>
          <button
            className={c({ ["active"]: this.state.dislikeActive })}
            onClick={() => this.handleDislike()}
          >Dislikes
            {this.state.dislike}
          </button>
        </>
      );
    }}

export default Comment