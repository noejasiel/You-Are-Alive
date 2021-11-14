import React from "react";
import Card from "../GeneralUI/Card/Card";
import CargadorUsb from "./infoSurvival/CargadorUsb";
import Manivela from "./infoSurvival/Manivela";
import PanelSolar from "./infoSurvival/PanelSolar";

const Casos = ({ titulo, numero }) => {
  return (
    <Card className="survival-card p-5 m-auto mt-4 mb-3">
      <h2 className="font-bold text-lg"> {titulo} </h2>
      {/* <img className="survival-img" src={ alt="icono de rayo" /> */}
      {titulo === "CargadorUSB" ? <CargadorUsb /> : null}
      {titulo === "GeneradorManual" ? <Manivela /> : null}
      {titulo === "PanelSolar" ? <PanelSolar /> : null}
    </Card>
  );
};

export default Casos;
