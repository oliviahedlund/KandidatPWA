import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import CameraPage from "./components/pages/CameraPage";
import Bluetooth from "./components/pages/Bluetooth";

function App() {
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
