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
              <img width="65px" className="" src={logo} alt="Logotipo"/>
            </NavLink>
          </div>
          <div></div>
          <div className=" flex flex-wrap content-center">
            {toggle 
            ? <img width="25px" className="cursor-pointer" onClick={handleToggle} src={Close_Icon} alt="close menu"/>
            :<img width="25px" className="cursor-pointer" onClick={handleToggle} src={menu} alt="hamburguer menu"/>
            }
          </div>
          <ul className={toggle ? "absolute top-20 right-44 bg-purple-500 p-5 rounded-b" : "hidden"}>
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
