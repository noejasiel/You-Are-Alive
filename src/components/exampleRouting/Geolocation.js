import React from "react";
import {Link} from 'react-router-dom';
import Card from '../GeneralUI/Card/Card';

const Geolocation = () => {
  return (
    <div className="flex-col w-full grid justify-items-center mt-14 ">
          <Link to="/geolocation/1" className=" my-4 w-3/4 flex justify-center content-center h-12">
            <Card className="survival-card">
              <p className="m-auto font-bold text-white">Mapa</p>
            </Card>
          </Link>
          <Link to="/geolocation/2" className=" my-4 w-3/4 flex justify-center content-center h-12">
            <Card className="card survival-card">
              <p className="m-auto font-bold text-white">Brujula</p>
            </Card>
          </Link>
    </div>
  );
};
export default Geolocation;
