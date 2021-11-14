import React from "react";
import { Link } from "react-router-dom";
import Card from "../GeneralUI/Card/Card";

const Survival = () => {
  const links = [
    {
      Link: "/survival-guide/1",
      icon: "icon-url",
      title: "como hacer cargar aparatos Eletronicos sin elctricidad",
    },
    {
      Link: "/survival-guide/2",
      icon: "icon-url",
      title: "Generador manual de manivela",
    },
    {
      Link: "/survival-guide/3",
      icon: "icon-url",
      title: "Panel Solar",
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

export default Survival;
