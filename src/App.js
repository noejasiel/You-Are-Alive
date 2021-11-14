import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SurvivalGuide from "./components/SurvivalGuide/SurvivalGuide";
import FirstAid from "./components/firstAid/FisrtAid";
import Geolocation from "./components/exampleRouting/Geolocation";
import Home from "./components/Home/Home";
import FirstAidBasic from "./components/firstAid/FirstAidBasic";
import GeolocationPart from "./components/exampleRouting/GeolocationPart";
import Communication from "./components/Communications/Communication";
import Wellness from "./components/MentalWellness/Wellness";
import WellnessPart from "./components/MentalWellness/WellnessPart";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survival-guide" element={<SurvivalGuide />} />
        <Route path="/first-aid" element={<FirstAid />} />
        <Route path="/first-aid/:numero" element={<FirstAidBasic />} />
        <Route path="/first-aid/:numero/:caso" element={<FirstAidBasic />} />
        <Route path="/geolocation" element={<Geolocation />} />
        <Route path="/geolocation/:part" element={<GeolocationPart />} />
        <Route path="/communications" element={<Communication />} />
        <Route path="/wellness" element={<Wellness />} />
        <Route path="/wellness/:part" element={<WellnessPart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
