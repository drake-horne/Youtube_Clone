
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import DATA from '../../VideoData';
//import SearchBar from '../../components/SearchBar/SearchBar';
import VideoCard from '../Video/VideoCard';

const SearchPage = (props) => {
    const navigate= useNavigate()
    
    function handleSubmit(videoId){
        
        let newVideoId = videoId
        props.submitVideoInfo(newVideoId)
        //navigate(`/VideoPage/${props.selectedVideo.id.videoId}`)
    }

    console.log('search page vids', props.videos)
    return(
        <div className='container'>
                {props.videos.map((video) => {
                    return(
                        <div className='card' key={video.id.videoId}>
                            <h3>{video.snippet.title}</h3>
                            <h3>{video.id.videoId}</h3>
                            <button><a onClick={()=>{handleSubmit(video.id.videoId)}}>Play Video</a></button>
                            <VideoCard video={video} />
                        </div>
                    )
                })}

        </div>
    )
}
export default SearchPage