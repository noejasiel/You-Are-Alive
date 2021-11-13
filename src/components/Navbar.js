import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logotipo.svg";
import menu from "../assets/menu.svg";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className=" w-100 h-20 bg-red-600">
      <nav className="w-100 h-20">
        <div className="w-100 h-20 flex flex-wrap justify-around  content-center">
          <div class="relative bottom-100 left-0">
            <Link to="/">
              <img width="65px" className="" src={logo}></img>
            </Link>
          </div>
          <div></div>
          <div className=" flex flex-wrap content-center">
            <img width="25px" onClick={handleToggle} src={menu}></img>
          </div>
          <ul className={!toggle ? "" : "hidden"}>
            <li>
              <Link to="/survival-guide">Supervivencia</Link>
            </li>
            <li>
              <Link to="/first-aid">Primeros Auxilios</Link>
            </li>
            <li>
              <Link to="/geolocation">Mapas</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
