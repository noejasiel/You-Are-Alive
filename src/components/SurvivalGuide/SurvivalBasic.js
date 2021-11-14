import React from "react";
import { useParams } from "react-router";
import Casos from "./Casos";

const SurvivalBasic = () => {
  const params = useParams();
  if (params.numero === "1") {
    return <Casos titulo="CargadorUSB" />;
  } else if (params.numero === "2") {
    return <Casos titulo="GeneradorManual" />;
  } else if (params.numero === "3") {
    return <Casos titulo="PanelSolar" />;
  }
};

export default SurvivalBasic;
