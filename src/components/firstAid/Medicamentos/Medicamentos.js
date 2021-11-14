import React from "react";
import medicinas from "../../../assets/firstAids/Medicinas.jpg";
import m1 from "../../../assets/firstAids/m1.jpg";
import m2 from "../../../assets/firstAids/m2.jpg";
import m3 from "../../../assets/firstAids/m3.jpg";
import m4 from "../../../assets/firstAids/m4.jpg";
import m5 from "../../../assets/firstAids/m5.jpg";

const Medicamentos = () => {
  return (
    <div>
      <p className="mt-3 ">
        La primera reacción habitual ante una dolencia de cualquier tipo suele
        ser buscar en la caja de medicamentos que nos quiten la dolencia en
        cuestión de minutos. Los hay de todo tipo y formatos, pero hay algunos
        que destacan y se convierten en los más recetados por los profesionales.
      </p>
      <div className="border-2 p-5 mt-3">
        <h2 className="font-bold text-lg">
          Simvastatina - Para controlar el colesterol
        </h2>
        <p>
          Se emplea para reducir el colesterol y los triglicéridos (tipo de
          grasa) en la sangre.
        </p>
        <img className="max-w-xs m-auto" src={m1}></img>
      </div>

      <div className="border-2 p-5 mt-3">
        <h2 className="font-bold text-lg">Aspirina - Casi para todo</h2>
        <p>
          También conocida como ácido acetil-salicílico (ASA), reduce las
          sustancias en el cuerpo que producen dolor, fiebre e inflamación.
        </p>
        <img className="max-w-xs m-auto" src={m2}></img>
      </div>

      <div className="border-2 p-5 mt-3">
        <h2 className="font-bold text-lg">
          Omeprazol - Para la acidez de estómago
        </h2>
        <p>
          inhibe la bomba de protones (IBPS)y disminuye la producción de ácido
          al bloquear la enzima de la pared del estómago que se encarga de
          producir esta sustancia
        </p>
        <img className="max-w-xs m-auto" src={m3}></img>
      </div>

      <div className="border-2 p-5 mt-3">
        <h2 className="font-bold text-lg">
          Lexotiroxina sódica - Para reemplazar la tiroxina
        </h2>
        <p>
          Se encarga de sustituir una hormona que se suele producir en nuestra
          glándula tiroidea para regular la energía y el metabolismo del cuerpo.
        </p>
        <img className="max-w-xs m-auto" src={m4}></img>
      </div>

      <div className="border-2 p-5 mt-3">
        <h2 className="font-bold text-lg">Ramipril - Para la hipertensión</h2>
        <p>
          No forma parte de la lista de la OMS pero trata la presión arterial
          alta (hipertensión) o la insuficiencia cardíaca congestiva.
        </p>
        <img className="max-w-xs m-auto" src={m5}></img>
      </div>

      <div className="border-2 p-5 mt-3">
        <h2 className="font-bold text-lg">
          Paracetamol - Para aliviar el dolor
        </h2>
        <p>
          Es un medicamento ampliamente empleado para reducir la fiebre, aunque
          a día de hoy aún se desconoce su mecanismo de acción exacto
        </p>
        <img className="max-w-xs m-auto" src={m2}></img>
      </div>

      <div className="border-2 p-5 mt-3">
        <h2 className="font-bold text-lg">
          Atorvastatina - Para controlar el colesterol
        </h2>
        <p>Disminuye la cantidad de colesterol que fabrica el hígado</p>
        <img className="max-w-xs m-auto" src={m1}></img>
      </div>
    </div>
  );
};

export default Medicamentos;
