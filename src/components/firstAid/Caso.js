import React from "react";
import Card from "../GeneralUI/Card/Card";
import ObjetosOjos from "./infoFirstAids/ObjetosOjos";
import Valoracion from "./infoFirstAids/Valoracion";
import Heridas from "./infoFirstAids/Heridas";
import Hemorragia from "./infoFirstAids/Hemorragia";
import Medicamentos from "./Medicamentos/Medicamentos";
import Plantas from "./plantas/Plantas";

const Caso = ({ titulo, numero }) => {
  const num = [
    {
      numero: "1",
      component: <Valoracion />,
    },
    {
      numero: "2",
      component: <Heridas />,
    },
    {
      numero: "3",
      component: <Hemorragia />,
    },
    {
      numero: "4",
      component: <ObjetosOjos />,
    },
  ];
  return (
    <Card className="survival-card p-5 m-auto mt-4 mb-3">
      <h2 font-bold text-lg>
        {" "}
        {titulo}{" "}
      </h2>
      {/* <img className="survival-img" src={ alt="icono de rayo" /> */}
      {num.map((n) => (numero === n.numero ? n.component : null))}
      {titulo === "Medicinas" ? <Medicamentos /> : null}
      {titulo === "plantas" ? <Plantas /> : null}
    </Card>
  );
};

export default Caso;
