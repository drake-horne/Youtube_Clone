import React from "react";


const YoutubeEmbed = (props) => {
  return(
  <div>
    <iframe 

      src={`https://www.youtube.com/embed/${props.videoId}`} 

    >
    </iframe>
  </div>
)};



export default YoutubeEmbed;