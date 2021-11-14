import React from "react";

const BasicAids = () => {
  return (
    <div class="flex flex-col w-full grid justify-items-center mt-14 ">
      <div className="block my-4 w-3/4 flex justify-center content-center h-20 bg-green-500  rounded-lg">
        <h2 className="m-auto">valoracion del paciente y RCP basica</h2>
      </div>
      <div className="block my-4 w-3/4 flex justify-center content-center h-20 bg-green-500 rounded-lg">
        <h2 className="m-auto"> Heridas y Hemorregias </h2>
      </div>
      <div className="block my-4 w-3/4 flex justify-center content-center h-20 bg-green-500 rounded-lg">
        <h2 className="m-auto">Cuerpos extraños en ojo, oidos y nariz</h2>
      </div>
      <div className="block my-4 w-3/4 flex justify-center content-center h-20 bg-green-500 rounded-lg">
        <h2 className="m-auto">Picaduras y Mordeduras</h2>
      </div>
      <div className="block my-4 w-3/4 flex justify-center content-center h-20 bg-green-500 rounded-lg ">
        <h2 className="m-auto ml-3">Quemaduras, Congelaciones, Insolaciones</h2>
      </div>
      <div className="block my-4 w-3/4 flex justify-center content-center h-20 bg-green-500 rounded-lg">
        <h2 className="m-auto">Fracturas y Convulciones</h2>
      </div>
    </div>
  );
};

export default BasicAids;
