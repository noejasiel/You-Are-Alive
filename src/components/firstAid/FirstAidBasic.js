import React from "react";
import { useParams } from "react-router";
import valoracion from "../../assets/firstAids/valoracion.png";
import Heridas from "../../assets/firstAids/herida.jpg";
import Hemorragias from "../../assets/firstAids/hemorragia.png";
import Cuerpos from "../../assets/firstAids/cosasojos.jpg";
import Caso from "./Caso";

const FirstAidBasic = () => {
  const params = useParams();
  //   const aid = [
  //     {
  //       numero: "1",
  //       nombre: "Valoracion del Paciente",
  //       instruccion:
  //         "En la Valoración inicial de un accidentado nos debemos marcar como objetivo prioritario el reconocimiento de lesiones o situaciones que sean potencialmente peligrosas para la vida del paciente",
  //       urlImg: valoracion,
  //       casos: [
  //         {
  //           numero: "2",
  //           nombre: "HERIDAS",
  //           instruccion:
  //             "Lavarse las manos " +
  //             "Colocarse unos guantes" +
  //             "Limpiar la herida con agua y jabón" +
  //             "Secar la herida con gasa desde el centro hacia la periferia de la misma" +
  //             "Desinfectar la herida con un antiséptico" +
  //             "Cubrirla con gasa y esparadrapo",
  //           urlImg: Heridas,
  //         },
  //         {
  //           numero: "3",
  //           nombre: "HEMORRAGIAS",
  //           instruccion:
  //             "Lavarse las manos" +
  //             "Detener la hemorragia " +
  //             "Colocarse los guantes",
  //           urlImg: Hemorragias,
  //         },
  //       ],
  //     },
  //     // {
  //     //   numero: "2",
  //     //   nombre: "HERIDAS",
  //     //   instruccion:
  //     //     "Lavarse las manos " +
  //     //     "Colocarse unos guantes" +
  //     //     "Limpiar la herida con agua y jabón" +
  //     //     "Secar la herida con gasa desde el centro hacia la periferia de la misma" +
  //     //     "Desinfectar la herida con un antiséptico" +
  //     //     "Cubrirla con gasa y esparadrapo",
  //     //   urlImg: Heridas,
  //     // },
  //     {
  //       numero: "3",
  //       nombre: "HEMORRAGIAS",
  //       instruccion:
  //         "Lavarse las manos" +
  //         "Detener la hemorragia " +
  //         "Colocarse los guantes",
  //       urlImg: Hemorragias,
  //     },
  //     {
  //       numero: "4",
  //       nombre: "CUERPOS EXTRAÑOS EN OJOS , OIDOS y NARIZ",
  //       instruccion:
  //         "Lavarse las manos." +
  //         "Colocarse los guantes." +
  //         "Localizar el cuerpo extraño y extraerlo",
  //       urlImg: Cuerpos,
  //     },
  //   ];
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
  }
  return (
    <section>
      {/* <p>
        {aid.map((a) =>
          a.numero === params.numero ? (
            <div className="w-full flex content-center justify-center mt-6 mb-6">
              <div className="w-3/4 border-2 p-6 flex  flex-col justify-center content-center shadow-lg">
                <h1 className="font-bold text-3xl text-center" key={a.numero}>
                  {a.nombre}
                </h1>
                <img
                  className="max-w-xs text-center m-auto "
                  src={a.urlImg}
                ></img>
                <p>
                  {a.instruccion} {a.casos.nombre}
                </p>
              </div>
              
            </div>
          ) : null
        )}
      </p> */}
    </section>
  );
};

export default FirstAidBasic;
