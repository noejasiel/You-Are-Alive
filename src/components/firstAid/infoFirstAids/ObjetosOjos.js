import React from "react";
import cosasojos from "../../../assets/firstAids/cosasojos.jpg";

const ObjetosOjos = () => {
  return (
    <div>
      <p className="mt-3 ">
        se define como la apracion de cualquien tipo de objeto en partes
        delicadas del cuerpo, como las orejas, nariz u ojos, representando un
        peligro eminente
      </p>
      <ul>
        <li>Lavarse las manos.</li>
        <li>
          Localizar el cuerpo extraño y extraerlo con ayuda de una gasa estéril
          o a través de lavados abundantes con suero fisiológico o, en su
          defecto, agua.
        </li>
        <li>Cubrir el ojo con gasa estéril y enviar a un centro sanitario.</li>
        <li>
          Si no localizamos el cuerpo extraño, lavarlo y luego proceder como en
          el punto anterior.
        </li>
        <li>Limpiar la herida con agua y jabón.</li>
        <li>
          Secar la herida con gasa desde el centro hacia la periferia de. la
          misma
        </li>
      </ul>
      <img src={cosasojos}></img>
    </div>
  );
};

export default ObjetosOjos;
