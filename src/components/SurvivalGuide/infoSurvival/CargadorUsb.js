import React from "react";
import CargadorAuto from "../../../assets/survival guide/CargadorAuto.png";
import CargadorBici from "../../../assets/survival guide/CargadorBici.png";
import Pilas from "../../../assets/survival guide/pilas.jpg";

const CargadorUsb = () => {
  return (
    <div className="box-content">
      <p className="mt-3 ">
        También puede ocurrir que un corte de energía eléctrica te impida cargar
        la batería de tu móvil.
      </p>
      <div className="border-2 p-5 mt-3">
        <h2 className="font-bold text-lg">Cargador de Auto</h2>
        <p>
          La mayoría de las personas que utilizan automóvil tienen un cargador
          para el celular que se conecta al encendedor del auto, así que si hay
          corte de luz pero tienes tu coche cerca, esta es una buena opción para
          recargar la batería de tu móvil y seguir comunicado.
        </p>
        <img className="max-w-xs m-auto" src={CargadorAuto}></img>
      </div>

      <div className="border-2 p-5 mt-3">
        <h2 className="font-bold text-lg">Cargador de Bicicleta</h2>
        <p>
          Existen unos cargadores ecológicos que se cargan con la energía que se
          genera al andar en bicicleta, estos son conocidos como Siva Cycle. Es
          un generador de bicicleta ligero y altamente eficiente. Diseñado para
          alimentar cualquier dispositivo electrónico o móvil a través de USB.
        </p>
        <img className="max-w-xs m-auto" src={CargadorBici}></img>
      </div>

      <div className="border-2 p-5 mt-3">
        <h2 className="font-bold text-lg">Pilas</h2>
        <p>
          Elementos necesarios: Un adaptador de USB, puede ser el que utilizas
          en tu automóvil tu cargador de celular una pila de 9 voltios un clip
          metálico
        </p>
        <br />
        <p>
          Abrir el clip metálico y sujetarlo al polo negativo de la batería de
          9V. Esto servirá como conductor de la energía. Colocar el adaptador
          USB del automóvil sobre el otro polo de la batería, es decir, el polo
          positivo. Esto generará el movimiento que los electrones necesitan
          para poder producir energía. El tercer paso es mover el extremo del
          clip hacia el adaptador del auto para que ambos entren en contacto y
          se produzca la energía. Por último, conecta tu celular al adaptador
          USB y así cargarás la batería de tu móvil sin ningún problema.
        </p>
        <img className="max-w-xs m-auto" src={Pilas}></img>
      </div>
    </div>
  );
};

export default CargadorUsb;
