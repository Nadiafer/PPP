import React from "react";
import { Link } from "react-router-dom";
import "./landingpage.css"


function landingpage() {
  return (

    <div className="fondototal">
    <div>
      

      {/* <h1>Conoce más de tus Pokemones favoritos</h1> */}
     
       <h5 className="fondototalh5">
      <Link to ="/home">
         
         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/481px-Pokebola-pokeball-png-0.png" alt="boton"/>
      </Link>
      
      </h5>
      
    </div>
    </div>
  )
}



export default landingpage

