import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import CameraPage from "./components/pages/CameraPage";
import Bluetooth from "./components/pages/Bluetooth";

function App() {
  /* Beräknar värde på --vh baserat på fönstrets inner height och sätter --vh
  till detta värde i :root => kan användas i css-filer */
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/camera" element={<CameraPage />} />
          <Route path="/bluetooth" element={<Bluetooth />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
