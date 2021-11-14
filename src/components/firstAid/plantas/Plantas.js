import React from "react";
import planta from "../../../assets/firstAids/planta.jpg";
import plantaa from "../../../assets/firstAids/plantaa.jpg";
import plantaaa from "../../../assets/firstAids/plantaaa.jpg";
import plantaaaa from "../../../assets/firstAids/plantaaaajpg.jpg";

const Plantas = () => {
  return (
    <div className="box-content">
      <p className="mt-3 ">
        Las plantas medicinales pueden ayudarnos con pequeñas dolencias y además
        nos proporcionan un jardín lleno de aroma que revive a cualquiera. Son
        fáciles de utilizar para curar dolencias comunes en casa, y no requieren
        mucho esfuerzo a la hora de buscarlas, cultivarlas o recolectarlas.
      </p>
      <div className="border-2 p-5 mt-3">
        <h2 className="font-bold text-lg">Lavanda</h2>
        <p>
          La lavanda es más que una planta medicinal que se caracteriza por sus
          propiedades calmantes.
        </p>
        <img className="max-w-xs m-auto" src={plantaa}></img>
      </div>

      <div className="border-2 p-5 mt-3">
        <h2 className="font-bold text-lg">Áloe vera</h2>
        <p>
          Aloe vera es una planta medicinal refrescante y cicatrizante,
          originaria del África tropical, donde se ha utilizado como antídoto
          del veneno en heridas de lanzas emponzoñadas.
        </p>
        <img className="max-w-xs m-auto" src={plantaaa}></img>
      </div>

      <div className="border-2 p-5 mt-3">
        <h2 className="font-bold text-lg">Romero</h2>
        <p>
          El romero es una de las plantas medicinales más versátiles. Por
          ejemplo, tiene propiedades anti-inflamatorias, sirve para combatir la
          caspa y repele los mosquitos entre muchas otras.
        </p>
        <img className="max-w-xs m-auto" src={plantaaaa}></img>
      </div>

      <div className="border-2 p-5 mt-3">
        <h2 className="font-bold text-lg">Manzanilla</h2>
        <p>
          La manzanilla es nativa de Europa, Oriente Próximo y la India y se
          utiliza para desórdenes digestivos o nerviosos y para ungüentos
          antiinflamatorios. Tiene acciones antiinflamatoria, antiespasmódica,
          amarga, sedante, antiemética, carminativa y antialergénica.
        </p>
        <img className="max-w-xs m-auto" src={planta}></img>
      </div>

      <div className="border-2 p-5 mt-3">
        <h2 className="font-bold text-lg">Menta</h2>
        <p>
          La menta piperita es una planta medicinal digestiva, analgésica y
          antiséptica.
        </p>
        <img className="max-w-xs m-auto" src={plantaa}></img>
      </div>

      <div className="border-2 p-5 mt-3">
        <h2 className="font-bold text-lg">Caléndula</h2>
        <p>
          La caléndula es una de las hierbas medicinales más populares y
          versátiles. Se ha dicho tradicionalmente que levanta el ánimo.
        </p>
        <img className="max-w-xs m-auto" src={plantaaa}></img>
      </div>

      <div className="border-2 p-5 mt-3">
        <h2 className="font-bold text-lg">Diente de león</h2>
        <p>
          El diente de león es una planta medicinal de la que se aprovechan
          hojas y raíz en remedios naturales como diurético, suave laxante y
          desintoxicante hepático
        </p>
        <img className="max-w-xs m-auto" src={plantaaaa}></img>
      </div>
    </div>
  );
};

export default Plantas;
