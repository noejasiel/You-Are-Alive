import React from "react";
import { Link } from "react-router-dom";
import Card from "../GeneralUI/Card/Card";

const FisrtAid = () => {
  const links = [
    {
      Link: "/first-aid/1",
      icon: "icon-url",
      title: "Primeros auxilios basicos",
    },
    {
      Link: "/first-aid/2",
      icon: "icon-url",
      title: "medicamentos y cuando usarlos",
    },
    {
      Link: "/first-aid/3",
      icon: "icon-url",
      title: "Plantas medicinales",
    },
  ];
  return (
    <div className="flex flex-col w-full grid justify-items-center mt-14 ">
      {links.map((l, i) => (
        <div
          key={i}
          className="block my-4 w-3/4 flex justify-center content-center h-12"
        >
          <Card className="survival-card">
            <Link to={l.Link} className="m-auto">
              {l.title}
            </Link>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default FisrtAid;
