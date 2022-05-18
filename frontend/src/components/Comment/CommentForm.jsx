import React, {useContext, useState} from 'react';
import useAuth from "../../hooks/useAuth"
import axios from 'axios';
import { Navigate, useNavigate } from "react-router-dom"
import useCustomForm from "../../hooks/useCustomForm"



const CommentForm = (props) => {

    const{user, token} = useAuth()
    const[videoId, setVideoId] = useState(props.videoId)
    const[text, setText] = useState('')
    const navigate = useNavigate()

    const postComments = async (newComment)=>{
        try{
          
          let response = await axios.post('http://127.0.0.1:8000/api/Comment_App/ADD', newComment, {headers : {Authorization: 'Bearer ' + token}})
          
          console.log(response)
          navigate("/")
        }
        catch(ex){
          console.log('error in post comments request')
    
        }  
    
      } 
    
    function handleSubmit(event, props) {
        event.preventDefault(props);
        
        let newComment = {
            user: user.id,
            video_id: '',
            text: text,
            likes: 0,
            dislikes: 0

            
        }
        console.log(newComment)
        postComments(newComment)
    }

    return(
        <form onSubmit={handleSubmit}>

            <div>
                <label>Comment</label>
                <input type='text' value={text} onChange={(event) => setText(event.target.value)} />
            </div>

            <button type='submit'>Add New Comment</button>
        </form>
        )
    }



export default CommentForm;