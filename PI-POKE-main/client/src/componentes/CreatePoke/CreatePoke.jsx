import React from 'react'
import {useState, useEffect} from "react"
import {NavLink, useHistory} from "react-router-dom"
import {getTypes, postPokemon} from "../redux/actions/index"
import {useDispatch,useSelector} from "react-redux"
import validaciones from "./Validaciones"


export default function CreatePoke() {
  const dispatch = useDispatch()
  const history =useHistory()
  const types = useSelector(state => state.Types)
  const [errores, seterrores] = useState({})
  


  const [input, setinput] = useState({
    name: "",
    hp: "" ,
    attack: "",
    defense: "",
    speed:"",
    height: "",
    weight: "",
    sprite: "",
    types: []

  })

  function handleChange(e){
  
    setinput({
      ...input,
      [e.target.name] : e.target.value

    
    })
   seterrores(validaciones({
     ...input,
     [e.target.value]: e.target.value}))
  }
  
  function handleSelecTypo(e){
    if(!input.type.includes(e.target.value)) 
    setinput({
      ...input,
      type:[...input.type, e.target.value],

      

    })
    // console.log(input.type)

  }


//VALIDACIONES DE FORMULARIO

  function handleSubmit(e){
    e.preventDefault();
    if(typeof input.imagen === "string"){
    const ima=input.imagen.slice(0,5) ;
   
    if(ima !== "https") return  alert("La imagen debe ser https")
    else{ 
       
      if(input.types.length > 2) return alert("Máximo 2 tipos")
      else{
        const {name, hp,  attack, defense,speed,height, weight, types }= input
   
        if(name && hp && attack && defense && speed && height && weight && types){

          
          dispatch(postPokemon(input)) 
          alert("Personaje creado con exito")
          setinput({
            name: "",
            hp: "" ,
            attack: "",
            defense: "",
            speed:"",
            height: "",
            weight: "",
            sprite: "",
            types: []
        
         
          })
          history.push("/home")

        }else{
          return alert("falta completar campos")
        }

        
      }
      
    }
    
    
    
    
    
    
  }
  }

  function handleDelete(e){
    setinput({
      ...input,
      types: input.types.filter(typ => typ !== e)
    })
  }

  return (
    
    <div className='contenedores'>
       <h1>¡Crea tu pokemon!</h1>
       <form onSubmit={(e)=>handleSubmit(e)}>
         <div>
           <label>Nombre:</label>
           <input
           className='nombre'
           type="text"
           value={input.name}
           name="name"
           onChange={ (e)=>handleChange(e)}/>
           {errores.name &&(<p>{errores.name}</p>)}
           
         </div>

         <div>
           <label>Vida:</label>
           <input
            className='nombre'
           type="number"
           value={input.hp}
           name="hp"
           min="0"
           max="255"
           onChange={ (e)=>handleChange(e)}/>
           {errores.hp &&(<p>{errores.hp}</p>)}
         </div>

         <div>
           <label>Ataque:</label>
           <input
            className='nombre'
           type="number"
           value={input.attack}
           name="attack"
           min="0"
           max="255"
           onChange={ (e)=>handleChange(e)}/>
           {errores.attack &&(<p>{errores.attack}</p>)}
         </div>

         <div>
           <label>Defensa:</label>
           <input
            className='nombre'
           type="number"
           value={input.defense}
           name="defense"
           min="0"
           max="255"
           onChange={ (e)=>handleChange(e)}/>
           {errores.defense &&(<p>{errores.defense}</p>)}
         </div>

         <div>
           <label>Velocidad:</label>
           <input
           
           className='nombre'
           type="number"
           value={input.speed}
           name="speed"
           min="0"
           max="255"
           onChange={ (e)=>handleChange(e)}/>
           {errores.speed &&(<p>{errores.speed}</p>)}
         </div>

         <div>
           <label>Altura:</label>
           <input
          className='nombre'
           type="number"
           value={input.height}
           name="height"
           min="0"
           max="255"
           onChange={ (e)=>handleChange(e)}/>
           {errores.height &&(<p>{errores.height}</p>)}
         </div>

         <div>
           <label>Peso:</label>
           <input
             className='nombre'
           type="number"
           value={input.weight}
           name="weight"
           min="0"
           max="255"
           onChange={ (e)=>handleChange(e)}/>
           {errores.weight &&(<p>{errores.weight}</p>)}
         </div>

         <div>
           <label>Imagen:</label>
           <input
             className='nombre'
           type="text"
           value={input.imagen}
           name="imagen"
           onChange={ (e)=>handleChange(e)}/>
         </div>

         
         <div>
        <select  onChange={(e)=>handleSelecTypo(e)} >
            {types.map((typ)=>(
              <option value={typ}>
                {typ}
              
                  </option>
           ))}
        </select>  
        </div> 
        <div className='volver'>
        <h6 type="submit"><button>Crear Pokemon</button></h6>
          <h6><NavLink to="/home">Volver</NavLink></h6>
     
      
       </div>



        </form>
        {input.types.map((e) => 
        <div className='tipos'>
          <p>{e}</p>
          <button className='eliminar' onClick={()=> handleDelete(e)}>x</button>
        </div> 

        )}
    </div>
  )


}




