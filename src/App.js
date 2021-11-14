import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SurvivalGuide from "./components/SurvivalGuide/SurvivalGuide";
import FirstAid from "./components/firstAid/FisrtAid";
import Geolocation from "./components/exampleRouting/Geolocation";
import Home from "./components/Home/Home";
import FirstAidBasic from "./components/firstAid/FirstAidBasic";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survival-guide" element={<SurvivalGuide />} />
        <Route path="/first-aid" element={<FirstAid />} />
        <Route path="/first-aid/:numero" element={<FirstAidBasic/>}/>
        <Route path="/geolocation" element={<Geolocation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
