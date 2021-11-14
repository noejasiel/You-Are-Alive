import React from "react";
import valoracion from "../../../assets/firstAids/valoracion.png";

const Valoracion = () => {
  return (
    <div>
      <p className="mt-3 ">
        En la Valoración inicial de un accidentado nos debemos marcar como
        objetivo prioritario el reconocimiento de lesiones o situaciones que
        sean potencialmente peligrosas para la vida del paciente
      </p>
      <img src={valoracion}></img>
    </div>
  );
};

export default Valoracion;
