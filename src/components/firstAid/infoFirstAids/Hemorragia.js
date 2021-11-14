import React from "react";
import hemorragia from "../../../assets/firstAids/hemorragia.png";

const Hemorragia = () => {
  return (
    <div>
      <p className="mt-3 ">
        es la pérdida de sangre. Puede ser externo o dentro del cuerpo. Usted
        puede sangrar al hacerse un corte o una herida. También puede ocurrir
        cuando sufre una lesión en un órgano interno
      </p>
      <ul>
        <li>Lavarse las manos.</li>
        <li>
          Comprimir directamente la zona que sangra, con gasas o pañuelos
          limpios.
        </li>
        <li>
          Mantener la compresión entre 5 y 10 minutos, sin retirar nunca el
          apósito.
        </li>
        <li>Si sigue sangrando, añadir más gasas.</li>
        <li>Mantener siempre el miembro elevado</li>
        <li>
          Secar la herida con gasa desde el centro hacia la periferia de. la
          misma
        </li>
        <li>Sujetar las gasas con vendaje compresivo.</li>
      </ul>
      <img src={hemorragia}></img>
    </div>
  );
};

export default Hemorragia;
