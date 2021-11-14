import React, { useState } from "react";
import {NavLink } from "react-router-dom";
import logo from "../assets/logotipo.svg";
import menu from "../assets/menu.svg";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className=" w-100 h-20 bg-blue-700">
      <nav className="w-100 h-20">
        <div className="w-100 h-20 flex flex-wrap justify-around  content-center">
          <div class="relative bottom-100 left-0">
            <NavLink to="/">
              <img width="65px" className="" src={logo} alt="Logotipo"/>
            </NavLink>
          </div>
          <div></div>
          <div className=" flex flex-wrap content-center">
            <img width="25px" className="cursor-pointer" onClick={handleToggle} src={menu} alt="hamburguer menu"></img>
          </div>
          <ul className={toggle ? "" : "hidden"}>
            <li>
              <NavLink to="/survival-guide">Supervivencia</NavLink>
            </li>
            <li>
              <NavLink to="/first-aid">Primeros Auxilios</NavLink>
            </li>
            <li>
              <NavLink to="/geolocation">Mapas</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
