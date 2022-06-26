import axios from "axios";



 export function getPokemons(){
    return async function (dispatch){
        var json = await axios('/pokemon');
     
        return dispatch ({
            type:"GET_POKEMONS",
            payload:json.data
        })
    }
}

export function getTypes(){
    return async function (dispatch){
        var json = await axios('/types');
        return dispatch ({
            type:"GET_TYPES",
            payload:json.data
        })
    }
}   

export function getNamePokemons(name){
    return async function (dispatch){
        var json = await axios.get("/pokemon?name=" + name);
        return dispatch ({
            type:"GET_NAME_POKEMONS",
              payload:json.data
        })

    
  }  

}

export function getDetails(id){
    return async function (dispatch){
        var json = await axios.get("/pokemon/"+ id);
        return dispatch ({
            type:"GET_DETAILS",
            payload:json.data
            
        })
            
            
    }  
    
}





export function postPokemon(payload){
    return async function (dispatch){
    var respuesta= await axios.post('/pokemon', payload);
    
        return respuesta
 
        }
    
    }

//FILTROS

export function filterPokemonesPorTypo(payload){

    return{
        type: "FILTER_POR_TIPO",
        payload
    }

}
export function borrarEstado(payload){

    return{
        type: "BORRAR_ESTADO",
        payload
    }

}



export function filterCreado(payload){
     
    return{
        type: "FILTER_CREADO",
        payload
    }
}

export function ordenadoPorNombre(payload){
    return {
        type: "ORDENADO_POR_NOMBRE",
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
            type:"RESET",
            payload:json.data
        })
    }
}