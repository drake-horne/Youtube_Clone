import React, { useState } from 'react'
import getComments from '../../App'
import CommentForm from './CommentForm'
import CommentList from './CommentList'

const Comment =(props)=>{

    const [commentLikes, setCommentLikes] = useState('');
    const [commentDislikes, setCommentDisLikes] = useState('');


    function addLike(likes, dislikes){
        if
    }
    
    function handleSubmit(event, props) {
        event.preventDefault(props);
        let newCommentLikes = {

            likes: commentLikes,
            dislikes: commentDislikes,
            
        }
        Comment(newCommentLikes)
    }
        


    
    return(
        <form onSubmit={handleSubmit}>
            <label>Like</label>
            <input type='submit' onChange={(event) => setCommentLikes(event.target.value)} value={commentLikes} />
            <button type='submit'>Like</button>
            <label>Dislike</label>
            <input type='submit' onChange={(event) => setCommentDislikes(event.target.value)} value={commentDislikes} />
            <button type='submit'>Dislike</button>
        </form>
    );

    
}   

export default Comment