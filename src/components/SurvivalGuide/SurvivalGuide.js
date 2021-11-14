import React from "react";
import './SurvivalGuide.css';
import Card from "../GeneralUI/Card/Card";
import energy from '../../assets/survival guide/destello.png'

const SurvivalGuide = () => {
  return (
    <div className="main-container">
      <Card className="survival-card">
        <h2>Carga de dispositivos </h2>
        <img className="survival-img" src={energy} alt="icono de rayo" />
      </Card>
    </div>
  );
};
export default SurvivalGuide;
