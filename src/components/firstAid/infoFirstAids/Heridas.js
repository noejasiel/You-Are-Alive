import React from "react";
import heridas from "../../../assets/firstAids/herida.jpg";

const Heridas = () => {
  return (
    <div>
      <p className="mt-3 ">
        Una herida es la pérdida de continuidad de la piel o de las mucosas a
        consecuencia de un traumatismo, provocanto la comunicación del interior
        con el exterior del cuerpo.
      </p>
      <ul>
        <li>Lavarse las manos.</li>
        <li>Colocarse unos guantes.</li>
        <li>Limpiar la herida con agua y jabón.</li>
        <li>
          Secar la herida con gasa desde el centro hacia la periferia de. la
          misma
        </li>
        <li>
          Secar la herida con gasa desde el centro hacia la periferia de. la
          misma
        </li>
        <li>
          Desinfectar la herida con un antiséptico. Cubrirla con gasa y
          esparadrapo.
        </li>
      </ul>
      <img src={heridas}></img>
    </div>
  );
};

export default Heridas;
