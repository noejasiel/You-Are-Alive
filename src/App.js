import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SurvivalGuide from "./components/SurvivalGuide/SurvivalGuide";
import FirstAid from "./components/firstAid/FisrtAid";
import Geolocation from "./components/exampleRouting/Geolocation";
import Home from "./components/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survival-guide" element={<SurvivalGuide />} />
        <Route path="/first-aid" element={<FirstAid />} />
        <Route path="/geolocation" element={<Geolocation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
