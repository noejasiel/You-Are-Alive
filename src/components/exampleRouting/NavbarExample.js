import React from "react";
import { Link } from "react-router-dom";


const NavbarExample = () => {

    return (
      <nav>
        <ul>
          <li>Logo</li>
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
      </nav>
    );
}
export default NavbarExample;