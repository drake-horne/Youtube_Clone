import React, { useEffect } from "react";
import { useState } from 'react';


import YoutubeEmbed from "./VideoPlayer";
import CommentList from "../Comment/CommentList";
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos"

import { useParams } from "react-router-dom";


const VideoPage = (props) => {

    const videoId = useParams();

    useEffect(()=>{
        console.log('whole object:', props.selectedVideo)
    },[])

    useEffect(() => {
        
        props.getRelatedVideos(videoId)
    },[props.selectedVideos])

    return ( 
        <div>
            <selectedVideo />
            
            <YoutubeEmbed videoId={props.selectedVideo.videoId} />
            <CommentList videoId={props.selectedVideo.videoId} />
            <RelatedVideos relatedVideos={props.searchedVideos} getRelatedVideos={props.getRelatedVideos} pickVideo={props.pickVideo} />

        </div>
     );
}
 
export default VideoPage;
  

