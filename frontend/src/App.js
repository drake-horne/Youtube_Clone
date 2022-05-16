// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import React, { useEffect, useState } from 'react';
import axios from 'axios'
// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import 

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  const[videos, setVideos] = useState([]);
  const[searchTerm, setSearchTerm] = useState([])
  const[comments, setComments] = useState([])

  const getComments = async ()=>{
    try{
      let getComments = await axios.get('http://127.0.0.1:8000/api/Comment_App/')
      setComments(getComments.data)
    }
    catch(ex){
      console.log('error in get all comments request')

    }

  }

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
