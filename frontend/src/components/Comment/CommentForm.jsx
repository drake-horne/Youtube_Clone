import React, {useContext, useState} from 'react';
import AuthContext from '../../context/AuthContext';
import axios from 'axios';


const CommentForm = (props) => {

    const{user, token} = useContext(AuthContext)
    const[video_id, setVideo_id] = useState('')
    const[text, setText] = useState('')

    const postComments = async (newComment)=>{
        try{
          let response = await axios.post(`http://127.0.0.1:8000/api/Comment_App/ADD`, newComment, {headers : {Authorization : `Bearer ${token}`}})
          
          console.log(response)
          
        }
        catch(ex){
          console.log('error in get all comments request')
    
        }  
    
      } 
    
    function handleSubmit(event, props) {
        event.preventDefault(props);
        let newComment = {
            user: user.id,
            video_id: 1,
            text: text,
            likes: 0,
            dislikes: 0,
            
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