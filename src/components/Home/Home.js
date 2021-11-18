import React from "react";
import Logo from '../../assets/logotipo.svg';
import Foco_Icon from '../../assets/Foco_Icon.svg';
import Aid_Icon from '../../assets/Aid_Icon.svg';
import Geolocation_Icon from '../../assets/Geolocation_Icon.svg';
import Mental_Icon from '../../assets/Mental_Icon.svg';
import Communication_Icon from '../../assets/Communication_Icon.svg';
import {Link} from 'react-router-dom';
import './Home.css';

const Home = () => {

  const seccions = [
    {
      title:'Tips de supervivencia',
      icon: Foco_Icon,
      link: '/survival-guide'
    },
    {
      title:'Primeros auxilios',
      icon: Aid_Icon,
      link: '/first-aid'
    },
    {
      title:'Geolocalizacion',
      icon: Geolocation_Icon,
      link: '/geolocation'
    },
    {
      title:'Salud mental',
      icon: Mental_Icon,
      link: '/wellness'
    },
    {
      title:'Comunicaciones',
      icon: Communication_Icon,
      link: '/communications'
    },
  ]

  return (
    <div className="body h-screen bg-gradient-to-l w-screen box-content">
      <div className="flex justify-around pt-14">
        <img width="100px" className="" src={Logo} alt="Logotipo"/>
        <div className="bg-gradient-to-l from-green-400 to-green-700 rounded-lg text-white font-bol d p-9 sm:p-5">
          Welcome to you're alive, depending on 
          the situation and what you need choose 
          an option.
        </div>
      </div>
      <div className="mt-20 flex  flex-wrap align-middle justify-around w-mind">
        {seccions.map( (s,i) => (
          <div key={i}>
            <Link to={s.link} className="cursor-pointer m-10 bg-gradient-to-l from-green-400 to-green-700 rounded-full sm:max-h-xs sm:max-w-xs w-36 h-36 flex justify-center">
              <img src={s.icon} width="80px" alt="icon"/>
            </Link>
            <h2 className="text-white text-center font-bold mt-6">{s.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Home;
