import React,{useState} from "react";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import Gallery from "./Gallery";
import Webcam from "react-webcam";

function App() {
  const [imgGallery, setImgGallery] = useState([]);
  const handleGalleryImg = (imgData) => {
    setImgGallery([...imgGallery,imgData]);
  }
  console.log(imgGallery)
  return (
    <div className="h-screen flex justify-center items-center bg-slate-200">
      <div className="container flex flex-col m-auto md:w-[330px] md:h-[550px] w-full h-full bg-white rounded-lg shadow-md">
        <Router>
          <Routes>
            <Route path="/" element={<Home handleGalleryImg = {handleGalleryImg} imgGallery={imgGallery} />} />
            <Route path="/gallery" element={<Gallery imgGallery={imgGallery} />} />
            <Route path="*"  element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;