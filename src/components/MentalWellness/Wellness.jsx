import React from 'react';
import Card from '../GeneralUI/Card/Card';
import {Link} from 'react-router-dom';

const Wellness = ()=>{

    const links = [
        {
          Link: "/wellness/1",
          icon: "icon-url",
          title: "Habla con alguien",
        },
        {
          Link: "/wellness/2",
          icon: "icon-url",
          title: "Tips de salud mental",
        },
        {
          Link: "/wellness/3",
          icon: "icon-url",
          title: "Inventario",
        },
    ];

    return(
        <div className="flex flex-col w-full grid justify-items-center mt-14 ">
            <h1 className="text-gray-800 text-center my-10 font-bold text-6xl">Wellness</h1>
            {links.map( (w,i) =>(
                <div
                key={i}
                className="block my-4 w-3/4 flex justify-center content-center h-12"
              >
                <Card className="survival-card cursor-pointer">
                  <Link to={w.Link} className="m-auto text-white font-bold">
                    {w.title}
                  </Link>
                </Card>
              </div>
            ))}
        </div>
    )
};

export default Wellness;