import React from "react";
import { NavLink} from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

import './navbar.css';

export const Navbar = ({refresc}) => {
  return (
    <div>
      <header className="header">
      <SearchBar refresc={refresc}/>
     
         <div className="crear">
        <ul>
       
            <NavLink to="/create"><button>Crea tu pokemon</button></NavLink>
          
      
           
        </ul>
        </div>
      </header>
    </div>
  );
};
