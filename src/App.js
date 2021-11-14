import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstAid from "./components/firstAid/FisrtAid";
import Geolocation from "./components/exampleRouting/Geolocation";
import Home from "./components/Home/Home";
import FirstAidBasic from "./components/firstAid/FirstAidBasic";

import Survival from "./components/SurvivalGuide/Survival";
import SurvivalBasic from "./components/SurvivalGuide/SurvivalBasic";

import GeolocationPart from "./components/exampleRouting/GeolocationPart";
import Communication from "./components/Communications/Communication";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survival-guide" element={<Survival />} />
        <Route path="/survival-guide/:numero" element={<SurvivalBasic />} />
        <Route path="/first-aid" element={<FirstAid />} />
        <Route path="/first-aid/:numero" element={<FirstAidBasic />} />
        <Route path="/first-aid/:numero/:caso" element={<FirstAidBasic />} />
        <Route path="/geolocation" element={<Geolocation />} />
        <Route path="/geolocation/:part" element={<GeolocationPart />} />
        <Route path="/communications" element={<Communication />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
