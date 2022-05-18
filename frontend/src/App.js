// General Imports
import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import "./App.css";
import React, { useEffect, useState } from 'react';
import axios from 'axios'
// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import Comment from "./components/Comment/CommentLikes";
import CommentForm from "./components/Comment/CommentForm";
import SearchPage from "./components/Search/SearchPage";
// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import CommentList from "./components/Comment/CommentList";
import SearchBar from './components/Search/SearchBar'
import YoutubeEmbed from "./components/Video/VideoPlayer";
import DATA from "./VideoData";
import VideoPage from "./components/Video/VideoPage";
// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  
  const[comments, setComments] = useState([])
  const[selectedVideo, setSelectedVideo]=useState('')
  const[searchedVideos, setSearchedVideos]=useState([])
  const navigate = useNavigate()
  useEffect(() => {
    getComments();
  },[])

  const getComments = async ()=>{
    try{
      let response = await axios.get(`http://127.0.0.1:8000/api/Comment_App/`)
      setComments(response.data)
    }
    catch(ex){
      console.log('error in get all comments request')

    }  

  }

  async function relatedVideos(videoId){
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?&key=AIzaSyCBmNkLT8b2jS2f4swrRkchUhEhhtvHpKI&type=video&part=snippet&fields=items(id,snippet)`)
    setSearchedVideos(response.data.items)

  }

  async function searchVideos(searchTerm){
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=AIzaSyCBmNkLT8b2jS2f4swrRkchUhEhhtvHpKI&type=video&part=snippet&fields=items(id,snippet)&maxResults=10`)
    setSearchedVideos(response.data.items)
  }

  function pickVideo(id) {
    let result = searchedVideos.filter((el) => {
      if(el.id.videoId === id){
        return true;
      }
      else{
        return false;
      }
    })
    setSelectedVideo(result)
    navigate(`/VideoPage/${selectedVideo}`)
  }
 


  return (
    <div>
      
      <Navbar/>
      <SearchBar submitSearch={searchVideos}/>
      <CommentForm />
      <CommentList comments = {comments}/>
   

      
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage videos={searchVideos} getSuggestedVideos={searchVideos}/>
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/VideoPage/:Video/" element={<VideoPage selectedVideo={selectedVideo}  searchedVideos={searchedVideos} getRelatedVideos={relatedVideos} pickVideo={pickVideo}/>} /> 
        <Route path="/results" element={<SearchPage videos={searchedVideos} submitVideoInfo={pickVideo} selectedVideo={selectedVideo}/>} /> 
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
