import React from "react";
import CargadorAuto from "../../../assets/survival guide/CargadorAuto.png";
import manivela from "../../../assets/survival guide/manivela.jpg";

const Manivela = () => {
  return (
    <div className="box-content">
      <div className="border-2 p-5 mt-3">
        <h2 className="font-bold text-lg">Cargador de Manual</h2>
        <p className="mt-3 ">
          Cargador USB manual diseñado para activar cualquier teléfono o
          dispositivo USB compatible en caso de emergencia o falta de energía.
          Transforma la energía mecánica en energía eléctrica. El cargador de
          dínamo USB recarga la batería de dispositivos USB, simplemente se gira
          la manivela de forma relajada y constante para comenzar a cargar,
          ideal para lugares en los que no se puede tener acceso a una toma de
          corriente para un cargador tradicional.
        </p>
        <img className="max-w-xs m-auto" src={manivela}></img>
      </div>
    </div>
  );
};

export default Manivela;
