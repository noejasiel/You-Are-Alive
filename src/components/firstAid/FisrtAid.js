import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BasicAids from "./BasicAids";

const FisrtAid = () => {
  return (
    <div class="flex flex-col w-full grid justify-items-center mt-14 ">
      <div className="block my-4 w-3/4 flex justify-center content-center h-20 bg-green-500  rounded-lg">
        <h2 className="m-auto">Primeros auxilios basicos</h2>
      </div>
      <div className="block my-4 w-3/4 flex justify-center content-center h-20 bg-green-500 rounded-lg">
        <h2 className="m-auto"> Medicamentos escenciales y su uso </h2>
      </div>
      <div className="block my-4 w-3/4 flex justify-center content-center h-20 bg-green-500 rounded-lg">
        <h2 className="m-auto">Guia de Plantas</h2>
      </div>
      <BasicAids />
    </div>
  );
};

export default FisrtAid;
