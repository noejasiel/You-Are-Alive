import React from "react";
import { useParams } from "react-router";
import valoracion from "../../assets/firstAids/valoracion.png";
import Heridas from "../../assets/firstAids/herida.jpg";
import Hemorragias from "../../assets/firstAids/hemorragia.png";
import Cuerpos from "../../assets/firstAids/cosasojos.jpg";
import Caso from "./Caso";

const FirstAidBasic = () => {
  const params = useParams();

  const casos = [
    {
      title: "Valoracion del Paciente",
      numero: "1",
      icono: "cvbdcfv",
    },
    {
      title: "Heridas",
      numero: "2",
      icono: "cvbdcfv",
    },
    {
      title: "hemorragias",
      numero: "3",
      icono: "cvbdcfv",
    },
    {
      title: "Cuerpos extraños en ojo, oido, nariz",
      numero: "4",
      icono: "cvbdcfv",
    },
  ];
  if (params.numero === "1") {
    return casos.map((c, i) => (
      <Caso numero={c.numero} titulo={c.title} key={i} />
    ));
  } else if (params.numero === "2") {
    return <Caso titulo="Medicinas" />;
  } else if (params.numero === "3") {
    return <Caso titulo="plantas" />;
  }
  return <section></section>;
};

export default FirstAidBasic;
