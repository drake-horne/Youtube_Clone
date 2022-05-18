import React, {useContext, useState} from 'react';
import AuthContext from '../../context/AuthContext';
import axios from 'axios';



const ReplyForm = (props) => {

    const{user, token} = useContext(AuthContext)
    const[comment, setComment] = useState('')
    const[text, setText] = useState('')

    const postReplys = async (newReply)=>{
        try{
          let response = await axios.post(`http://127.0.0.1:8000/api/Reply_App/1`, newReply, {headers : {Authorization : `Bearer ${token}`}})
          
          console.log(response)
          
        }
        catch(ex){
          console.log('error in get all Replys request')
    
        }  
    
      } 
    
    function handleSubmit(event, props) {
        event.preventDefault(props);
        let newReply = {
            reply_user: user.id,
            comment: comment,
            text: text,

            
        }
        console.log(newReply)
        postReplys(newReply)
    }

    return(
        <form onSubmit={handleSubmit}>

            <div>
                <label>Reply</label>
                <input type='text' value={text} onChange={(event) => setText(event.target.value)} />
            </div>

            <button type='submit'>Add New Reply</button>
        </form>
        )
    }

export default ReplyForm