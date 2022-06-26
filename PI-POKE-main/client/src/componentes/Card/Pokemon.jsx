import React from 'react'
import "./pokemon.css"


function Pokemon({name, image, type}) {

    return (
        <div className="contenedor_card">
            <div className='card'>
                <div className='cover'>
                 <img src={image}alt="imagen" className='cardImagen'/>
                 <div className='img_si'></div>
           </div>
        <div className='descripcion'>
        <h3>{name}</h3>
        <h4 >{type?.length?type[0]: null}</h4>
        <h4 >{type?.length? type[1]: null}</h4>
  
        
      

        <input type="button" value= "Más info"/>
       </div>
        
        </div>
        </div>
        
    )
}

export default Pokemon
