import axios from "axios"
import Comment from "./CommentLikes"
import ReplyForm from "../Replys/ReplyForm"
const CommentList = (props) =>{





    return(
        <div>
            <h1>
                comment list
            </h1>
            <table>
                <thead>
                <tr>
                <th>user</th>
                <th>video_id</th>
                <th>text</th>

                </tr>
                </thead>
                <tbody>
                    {props.comments.map((entry) => {
                        return(
                            <tr>
                              <td>{entry.user}</td>  
                              <td>{entry.video_id}</td>  
                              <td>{entry.text}</td>  
                                
                              <td><Comment/><ReplyForm/></td> 
                               
                               
                            </tr>

                        )

                    })}

                </tbody>

            </table>
        </div>
    
    
    
    
    
    
    )
}
export default CommentList