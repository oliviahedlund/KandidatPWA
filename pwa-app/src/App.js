import React, {useEffect}  from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import CameraPage from "./components/pages/CameraPage";
import "./App.css";

function App() {
  useEffect(() => {
    const updateWindowDimensions = () => {
      const vh = window.innerHeight * 0.01;
      // Set the value in the --vh custom property to the root of the document
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions) 
  }, []);
  
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/camera" element={<CameraPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
