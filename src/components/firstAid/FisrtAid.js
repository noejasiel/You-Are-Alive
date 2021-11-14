import React from "react";

import {Link} from 'react-router-dom';

const FisrtAid = () => {

  return (

    <div className="flex flex-col w-full grid justify-items-center mt-14 ">
        <div className="block my-4 w-3/4 flex justify-center content-center h-12">
          <Link to="/first-aid/1" className="m-auto">1 numero</Link>
        </div>
        <div className="block my-4 w-3/4 flex justify-center content-center h-12">
          <Link to="/first-aid/2" className="m-auto">2 numero</Link>
        </div>
        <div className="block my-4 w-3/4 flex justify-center content-center h-12">
          <Link to="/first-aid/3" className="m-auto">3 numero</Link>
        </div>
        <div className="block my-4 w-3/4 flex justify-center content-center h-12">
          <h2 className="m-auto">Guia de Plantas</h2>
        </div>
    </div>
  );
};

export default FisrtAid;
