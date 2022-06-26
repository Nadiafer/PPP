import React from "react"
import "./paginado.css"



export default function Paginado({pokemonPorPagina,TodoPokemons,paginado}){
   
    const numerosPagina=[]

    for (let i=1; i<=Math.ceil(TodoPokemons/pokemonPorPagina); i++) {
     
     numerosPagina.push(i);        
    }
    return (
        <nav>
            <ul className="paginacion">
                {numerosPagina && 
                numerosPagina.map(numero=>(
                    <li className="number" key= {numero}>
                    <button className="pagButton"onClick={()=> paginado(numero)}>{numero}</button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}