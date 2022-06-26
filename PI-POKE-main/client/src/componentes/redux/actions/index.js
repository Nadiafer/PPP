import axios from "axios";

export const GET_POKEMONS = 'GET_POKEMONS';
export const GET_TYPES = 'GET_TYPES';
export const GET_NAME_POKEMONS = 'GET_NAME_POKEMONS';
export const GET_DETAILS = 'GET_DETAILS';
export const FILTER_POR_TIPO= 'FILTER_POR_TIPO';
export const BORRAR_ESTADO='BORRAR_ESTADO';
export const FILTER_CREADO = 'FILTER_CREADO';
export const ORDENADO_POR_NOMBRE='ORDENADO_POR_NOMBRE';
export const ORDENADO_POR_ATTACK='ORDENADO_POR_ATTACK';
export const RESET = 'RESET';
export const POST_POKEMON = 'POST_POKEMON'










 export function getPokemons(){
    return async function (dispatch){
        var json = await axios.get('http://localhost:3001/pokemons');
        console.log(json.data)
     
        return dispatch ({
            type: GET_POKEMONS,
            payload:json.data
        })
    }
}

export function getTypes(){
    return async function (dispatch){
        var json = await axios.get('http://localhost:3001/types');
        // let todoTypes =json.data.sort((a,b)=> a.name.localeCompare(b.name))
        return dispatch ({
            type: GET_TYPES,
            payload:json.data
        })
    }
}   

export function getNamePokemons(name){
    return async function (dispatch){
        var json = await axios.get("http://localhost:3001/pokemons?name=" + name);
        return dispatch ({
            type: GET_NAME_POKEMONS,
              payload:json.data
        })

    
  }  

}

export function getDetails(id){
    return async function (dispatch){
        var json = await axios.get("http://localhost:3001/pokemons/"+ id);
        return dispatch ({
            type: GET_DETAILS,
            payload:json.data
            
        })
            
            
    }  
    
}


export function postPokemon(payload){
  console.log(payload)
    return async function (){
      try {
        let respuesta= await axios.post('http://localhost:3001/pokemon', payload);
        
        
            return  ({
              type:POST_POKEMON,
              
 
            })
            
        
      } catch (error) {
        console.log(error)
      }

 
        }
    
    }

//FILTROS

export function filterPokemonesPorTypo(payload){

    return{
        type: FILTER_POR_TIPO,
        payload
    }

}
export function borrarEstado(payload){

    return{
        type: BORRAR_ESTADO,
        payload
    }

}



export function filterCreado(payload){
     
    return{
        type: FILTER_CREADO,
        payload
    }
}

export function ordenadoPorNombre(payload){
    return {
        type: ORDENADO_POR_NOMBRE,
        payload
    }
} 

export function ordenadoPorAttack(payload){
    return{
        type: "ORDENADO_POR_ATTACK",
        payload
    }
}



export function getReset(){
    return async function (dispatch){
        var json = await axios.get('/pokemon');
     
        return dispatch ({
            type: RESET,
            payload:json.data
        })
    }
}