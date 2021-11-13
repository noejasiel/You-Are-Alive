import React from "react";
import logo from "../assets/logotipo.svg";
import menu from "../assets/menu.svg";

const Header = () => {
  return (
    <div className=" w-100 h-20 bg-red-600">
      <nav className="w-100 h-20">
        <div className="w-100 h-20 flex flex-wrap justify-around  content-center">
          <div class="relative bottom-100 left-0">
            <img width="65px" className="" src={logo}></img>
          </div>
          <div></div>
          <div className=" flex flex-wrap content-center">
            <img width="25px" src={menu}></img>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
