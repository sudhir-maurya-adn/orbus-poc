import React from "react";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import Gallery from "./Gallery";

function App() {
  
  return (
    <div className="h-screen flex justify-center items-center bg-slate-200">
      <div className="container flex flex-col m-auto md:w-[350px] md:h-[550px] w-full h-full bg-white rounded-lg shadow-md">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="*"  element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </div>
    </div>
    // <Webcam/>
  );
}

export default App;