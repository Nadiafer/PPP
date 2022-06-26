import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetails,borrarEstado} from "../redux/actions";
import { useEffect } from "react";
import "./details.css"



export default function Detail(){

const dispatch = useDispatch()
const { id } = useParams();

const miPokemon= useSelector((state)=> state.Detail)

    



useEffect(()=> {
    dispatch(getDetails(id))
    return ()=>{
        dispatch(borrarEstado())
    }

},[dispatch,id])



return(
      <div className="contenedortodo">
         <div className="contenedorcard2" >
        {miPokemon?.length > 0?
        <div>
            <div className="card">
                <div className="cover2">
            <h1>{miPokemon[0]?.name}</h1>

            <img src={miPokemon[0]?.sprite || miPokemon[0]?.imagen || "https://media1.giphy.com/media/DRfu7BT8ZK1uo/200.gif" } alt="imagen"/>
            <div className="fondo"></div>
            </div>
            <div className="descripcion2">
            <h3><span>Tipo:</span> {!miPokemon[0]?.creadoBd?miPokemon[0]?.types + " ": miPokemon[0].Types.map(e => e.name + (" "))}</h3>                    
            <h4><span>vida:</span> {miPokemon[0]?.life || miPokemon[0]?.vida}</h4>
            <h4><span>Ataque:</span> {miPokemon[0]?.attack }</h4>
            <h4><span>Defensa:</span> {miPokemon[0]?.defense || miPokemon[0]?.defensa }</h4>
            <h4><span>Velocidad:</span> {miPokemon[0]?.speed || miPokemon[0]?.velocidad }</h4>
            <h4><span>Altura:</span> {miPokemon[0]?.height || miPokemon[0]?.altura }</h4>
            <h4><span>Peso:</span> {miPokemon[0]?.weight || miPokemon[0]?.peso}</h4>
            </div>
            <div className="boton">
                    <Link to="/home">Volver</Link>
                    </div>
            </div>
         </div>
         :
         <div className="cargando">
             <img src="https://2img.net/h/orig01.deviantart.net/9ac3/f/2013/330/a/7/pikachu_animaci_oacute_n_15fps_by_slaugthervk-d6vr3cx.gif" alt="imagen no funciona"/>
         </div>
        }
    </div>
    </div>
)
}