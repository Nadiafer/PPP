import React, {useEffect,useState} from "react";
import {useDispatch,useSelector} from "react-redux";
import {getPokemons, getTypes,filterPokemonesPorTypo,filterCreado,ordenadoPorNombre,ordenadoPorAttack,getReset} from "../redux/actions/index"
import {Link} from "react-router-dom"
import Card from "../Card/Pokemon"
import Paginado from "../Paginado/paginado"
import { Navbar } from "../NavBar/navbar";
import './Home.css'

function Home() {
  
  const dispatch = useDispatch()
  const TodoPokemons = useSelector(state => state.Pokemones) 
  
//congelar Filtrados
  const Reset= useSelector(state=>state.Reset)

  


const error = useSelector(state => state.error)
const [orden, setorden] = useState("")
console.log(orden)

//ORDENA TYPES 
const TodoTypes = useSelector(state => state.Types)


//ERROR 404 PAGINA
const errPage = TodoPokemons.includes("Pokemon no encontrado") 





//PAGINACION
const [paginaActual, setpaginaActual] = useState(1)
const [pokemonPorPagina] = useState(12)
const indexUltimoPoke = paginaActual * pokemonPorPagina
const indexPrimerPoke = indexUltimoPoke - pokemonPorPagina

 const actualPokemon =Reset.length>1?Reset.slice(indexPrimerPoke,indexUltimoPoke):TodoPokemons.slice(indexPrimerPoke,indexUltimoPoke)



const paginado =(numeroPagina)=>{
  setpaginaActual(numeroPagina)
}

//setear la paginas de filtrado
function refresc(){
  setpaginaActual(1)
}


useEffect(() => {
   dispatch(getPokemons());
   dispatch(getTypes());
   refresc()
  
}
, [])


function handleClick(e){
    e.preventDefault();
    dispatch(getPokemons())
    dispatch(getReset());
  }
  
  function handleFilterTipo(e){
    
    dispatch(filterPokemonesPorTypo(e.target.value))
    refresc()
  }

function handleFilterCreado(e){
    dispatch(filterCreado(e.target.value))
   
}

function handleOrderSort(e){
  e.preventDefault();
    dispatch(ordenadoPorNombre(e.target.value));
    setpaginaActual(1);
    setorden(`Ordenado${e.target.value}`)
}
function handleOrderAttack(e){
  e.preventDefault();
    dispatch(ordenadoPorAttack(e.target.value));
    setpaginaActual(1);
    setorden(`Ordenado${e.target.value}`)
   

}
console.log(TodoTypes)


    return (
        <div>
         <Navbar refresc={refresc}/>
         
          <div>
          </div>
  

        <h1 className="titulo">¡Primera Generacion de Pokemons!</h1>

          <div>

    
            <select className="selectores" onChange={e=> handleFilterTipo(e)} >
               
             <option value="Tipo">Tipo:</option>                                      
          {TodoTypes.map((p,i) => (

            
            <option value={p} key={i}>
              {p}
            </option>
          ))}

            </select>
              <select  className= "selectores" onChange={e=> handleOrderSort(e)}>
              <option value="">Ordenar por:</option>
              <option value="asc">A-Z</option>
              <option value="desc">Z-A</option>
              </select>


        
              <select  className= "selectores" onChange={e=>  handleOrderAttack(e)}>
              <option value="fuerza+">Mayor fuerza</option>
              <option value="fuerza-">Menor fuerza</option>
              </select>


         
            <select className="selectores" onChange={e=> handleFilterCreado(e)} >
             <option value="todos">Todos</option>
             <option value="api">Existentes</option>
             <option value="creados">Creados</option>
            </select>
             
           
             
           
           
            
         
          <Paginado 
             pokemonPorPagina={pokemonPorPagina}
             TodoPokemons={Reset?.length>1? Reset?.length:TodoPokemons?.length}
             paginado={paginado} />


          <div>
          <button className= "botonvolver" onClick={e=> {handleClick(e)}}>
          Volver a cargar pokemones
          </button>
          </div>
            

            <div className="containerCards" >

            {!errPage?
          
            TodoPokemons.length? 
                actualPokemon?.map((c,i)=> {
                  
                  if(c.Types){
                   var tipo= []
                   c.Types.forEach((e)=>tipo.push(e.name))

                  } 
                  
                    return (

                        <div className="cards" key={i} >
                            <Link to={"/pokemons/" + c.id} >
                                <Card name={c.name} image={ c.sprite?  c.sprite :"https://media1.giphy.com/media/DRfu7BT8ZK1uo/200.gif"} type={tipo?tipo:c.types}/>
                            </Link>
                            </div>
                    )
                  })
                  : !error.length ?
                  
                  
                  <h2 className="cargando"><img src="https://www.gratistodo.com/wp-content/uploads/2016/12/Pokemon-gifs-13.gif" alt="imagen"/></h2> : <h1>No se encuentra este tipo puedes <Link to="/create">crearlo.</Link></h1>
                  : <p> UPS! POKEMON NO ENCONTRADO
                <img clasname="cargando" src="https://stickers.wiki/static/stickers/piikachu/file_948258.gif"alt="cargando"/></p>

}

                </div>



          </div>

        </div>
    )

}
export default Home
