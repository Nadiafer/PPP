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
    spite: "",
    type: []

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
       
      if(input.type.length > 2) return alert("Máximo 2 tipos")
      else{
        const {name, vida,  attack, defensa,velocidad,altura, peso, type }= input
   
        if(name && vida && attack && defensa && velocidad && altura && peso && type){

          
          dispatch(postPokemon(input)) 
          alert("Personaje creado con exito")
          setinput({
            name: "",
            vida: "" ,
            attack: "",
            defensa: "",
            velocidad:"",
            altura: "",
            peso: "",
            imagen: "",
            type: []
        
         
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
      type: input.type.filter(typ => typ !== e)
    })
  }



  useEffect(()=>{
    dispatch(getTypes())

  }, [dispatch])




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
           value={input.vida}
           name="vida"
           min="0"
           max="255"
           onChange={ (e)=>handleChange(e)}/>
           {errores.vida &&(<p>{errores.vida}</p>)}
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
           value={input.defensa}
           name="defensa"
           min="0"
           max="255"
           onChange={ (e)=>handleChange(e)}/>
           {errores.defensa &&(<p>{errores.defensa}</p>)}
         </div>

         <div>
           <label>Velocidad:</label>
           <input
           
           className='nombre'
           type="number"
           value={input.velocidad}
           name="velocidad"
           min="0"
           max="255"
           onChange={ (e)=>handleChange(e)}/>
           {errores.velocidad &&(<p>{errores.velocidad}</p>)}
         </div>

         <div>
           <label>Altura:</label>
           <input
          className='nombre'
           type="number"
           value={input.altura}
           name="altura"
           min="0"
           max="255"
           onChange={ (e)=>handleChange(e)}/>
           {errores.altura &&(<p>{errores.altura}</p>)}
         </div>

         <div>
           <label>Peso:</label>
           <input
             className='nombre'
           type="number"
           value={input.peso}
           name="peso"
           min="0"
           max="255"
           onChange={ (e)=>handleChange(e)}/>
           {errores.peso &&(<p>{errores.peso}</p>)}
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
              <option value={typ.name}>
                {typ.name}
              
                  </option>
           ))}
        </select>  
        </div> 
        <div className='volver'>
        <h6 type="submit"><button>Crear Pokemon</button></h6>
          <h6><NavLink to="/home">Volver</NavLink></h6>
     
      
       </div>



        </form>
        {input.type.map((e) => 
        <div className='tipos'>
          <p>{e}</p>
          <button className='eliminar' onClick={()=> handleDelete(e)}>x</button>
        </div> 

        )}
    </div>
  )


}




