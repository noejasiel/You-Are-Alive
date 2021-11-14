import React from "react";
import {Link} from 'react-router-dom';
import Card from '../GeneralUI/Card/Card';

const Geolocation = () => {
  const links = [
    {
      link: '/geolocation/1',
      title: 'Mapa'
    },
    {
      link: '/geolocation/2',
      title: 'Brujula'
    }
  ]
  return (
    <div className="flex-col w-full grid justify-items-center mt-14 ">
        {links.map( l => (
          <Card className="survival-card mb-10">
            <Link to={l.link} className=" my-4 w-3/4 flex justify-center content-center h-12">
                <p className="m-auto font-bold text-white">{l.title}</p>
            </Link>
          </Card>
        ))}
    </div>
  );
};
export default Geolocation;
