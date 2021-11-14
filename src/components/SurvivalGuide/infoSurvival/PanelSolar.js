import React from "react";
import solar from "../../../assets/survival guide/solar.jpg";
import solar2 from "../../../assets/survival guide/solar2.png";
import solar3 from "../../../assets/survival guide/solar3.jpg";
import solar4 from "../../../assets/survival guide/solar4.jpg";
import solar5 from "../../../assets/survival guide/pilas.jpg";

const PanelSolar = () => {
  return (
    <div className="box-content">
      <p className="mt-3 ">
        Los cargadores solares obtienen energía directamente del Sol,
        convirtiéndola en energía eléctrica. Son aparatos modernos que utilizan
        energía limpia, mediante paneles solares captan la energía solar y la
        almacenan en una batería incorporada a cada cargador solar, para poderla
        consumir cuando se requiere.
      </p>
      <div className="border-2 p-5 mt-3">
        <h2 className="font-bold text-lg">Cargadores Solares para moviles</h2>
        <p>
          utilizamos de manera gratuita la energía del Sol para cargar nuestros
          equipos móviles como teléfonos celulares, computadoras, GPS, tabletas,
          reproductores MP3, cámaras fotográficas, entre otros, mientras estamos
          fuera de la ciudad, en el campo, en la playa, en el bosque y en el
          mar.
        </p>
        <img className="max-w-xs m-auto" src={solar}></img>
      </div>

      <div className="border-2 p-5 mt-3">
        <h2 className="font-bold text-lg">
          ¿Cómo seleccionar un cargador solar portátil?
        </h2>
        <p>
          Capacidad de la batería: Que ésta tenga la capacidad de cargar el 100%
          del dispositivo de interés. La capacidad de la batería de cada
          cargador solar indica la cantidad de energía que se requiere para la
          carga de un dispositivo. La carga se mide en miliamperios-hora (mAh),
          cuyo valor nos indica la duración de la batería, cuanto más mAh, mayor
          sea la duración de la batería. Por ejemplos, hay smartphones de 2,000
          mAh, los que requieren un cargador con una batería de un mínimo de
          2,000 mAh para que se cargue al 100%. Los cargadores solares para
          computadoras portátiles suelen tener unos 8,000 mAh.
        </p>
        <img className="max-w-xs m-auto" src={solar2}></img>
      </div>

      <div className="border-2 p-5 mt-3">
        <h2 className="font-bold text-lg">
          ¿Qué tipos de cargadores solares podemos encontrar?
        </h2>
        <p>
          La mayoría de cargadores portátiles en el mercado están hechos de
          metal o plástico, planos, cilíndricos, con uno o más puertos USB y un
          Micro USB. Tienen una pequeña pantalla con luces LED que indican
          cuanta carga tienen. Hay incluso, cargadores que transmiten diferente
          voltaje en cada uno de los puertos. En fin, podemos seleccionar el
          mejor diseño, pero sin olvidar los requerimientos del o los
          dispositivos que vamos a cargar.
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
        <img className="max-w-xs m-auto" src={solar3}></img>
      </div>
    </div>
  );
};

export default PanelSolar;
