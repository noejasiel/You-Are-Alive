import React, { useEffect, useState } from "react";
import {NavLink } from "react-router-dom";
import logo from "../assets/logotipo.svg";
import menu from "../assets/menu.svg";
import {useLocation} from 'react-router-dom';
import Close_Icon from '../assets/close.svg';

const Navbar = () => {
  let location = useLocation();
  const [toggle, setToggle] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    if (location.pathname !== '/') {
      setShowNav(true);
    }else{
      setShowNav(false);
    }
  })

  return (
    <div className={showNav ? "w-100 h-20 bg-gradient-to-l from-purple-600 to-purple-400": "hidden"}>
      <nav className="w-100 h-20">
        <div className="w-100 h-20 flex flex-wrap justify-around  content-center">
          <div className="relative bottom-100 left-0">
            <NavLink to="/">
              <img width="65px" className="" src={logo} alt="Logotipo" />
            </NavLink>
          </div>
          <div></div>
          <div className=" flex flex-wrap content-center">
            {toggle 
            ? <img width="25px" className="cursor-pointer" onClick={handleToggle} src={Close_Icon} alt="close menu"/>
            :<img width="25px" className="cursor-pointer" onClick={handleToggle} src={menu} alt="hamburguer menu"/>
            }
          </div>
          <ul className={toggle ? "absolute top-20 right-0 bg-purple-500 rounded-b z-10" : "hidden"}>
            <li className="hover:bg-indigo-900 cursor-pointer p-6 active:bg-indigo-900 z-index">
              <NavLink className="p-2 text-white font-bold " to="/survival-guide">Supervivencia</NavLink>
            </li>
            <li className="hover:bg-indigo-900 cursor-pointer p-6 active:bg-indigo-900 z-index">
              <NavLink className="p-2 text-white font-bold " to="/first-aid">Primeros Auxilios</NavLink>
            </li>
            <li className="hover:bg-indigo-900 cursor-pointer p-6 active:bg-indigo-900 z-index">
              <NavLink className="p-2 text-white font-bold " to="/geolocation">Mapas</NavLink>
            </li>
            <li className="hover:bg-indigo-900 cursor-pointer p-6 active:bg-indigo-900 z-index">
              <NavLink className="p-2 text-white font-bold " to="/communications">Comunicacion</NavLink>
            </li>
            <li className="hover:bg-indigo-900 cursor-pointer p-6 active:bg-indigo-900 z-index">
              <NavLink className="p-2 text-white font-bold " to="/wellness">Salud mental</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
