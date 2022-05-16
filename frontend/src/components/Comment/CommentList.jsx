import axios from "axios"

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
                <th>likes</th>
                <th>dislikes</th>
                </tr>
                </thead>
                <tbody>
                    {props.comments.map((entry) => {
                        return(
                            <tr>
                              <td>{entry.user}</td>  
                              <td>{entry.video_id}</td>  
                              <td>{entry.text}</td>  
                              <td>{entry.likes}</td>  
                              <td>{entry.dislikes}</td>  
                               
                            </tr>

                        )

                    })}

                </tbody>

            </table>
        </div>
    
    
    
    
    
    
    )
}
export default CommentList