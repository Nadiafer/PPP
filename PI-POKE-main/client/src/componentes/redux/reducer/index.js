

const initialState = {
    Pokemones : [],
    Types: [],
    Pokemones2:[],
    Detail:[],
    error:[],
    Reset:[2]
  
}



function rootReducer(state= initialState, action){
    switch(action.type){
        case "GET_POKEMONS":
       return {
           ...state,
           Pokemones: action.payload,
           Pokemones2:action.payload,
           
       }
       case "GET_TYPES":
        return {
            ...state,
            Types: action.payload
        }
        
        case "GET_NAME_POKEMONS":
            return {
                ...state,
                Pokemones: action.payload
            }

        case "POST_POKEMON":
            return{
                ...state
            }

            case "GET_DETAILS":
                return{
                    ...state,
                Detail: action.payload
                }
                case "BORRAR_ESTADO":
                    return{
                        ...state,
                    Detail: []
                    }
    
                

 
    

             //FILTROS
        case "FILTER_POR_TIPO":

            const todoPokemones= state.Pokemones2
            
            const filterTipo = todoPokemones.filter(e => e.Types?.find(e => e.name === action.payload) || e.types?.includes(action.payload))
            
            
            let errors 
            if(!filterTipo.length){
                errors= " No hay tipo, crealo"
            }
            
            
            return {
                ...state,
                Pokemones: filterTipo,
                error: errors?[errors]: []
                
            }
            
            
            case "FILTER_CREADO":
                const todoPokemones2 = state.Pokemones2
                const filterCreado = action.payload ==="creados"? todoPokemones2.filter(e=>e.creadoBd) : todoPokemones2.filter(e=> !e.creadoBd)  
    
                return {
                    ...state,
                    Pokemones: action.payload === "Todos" ? state.Pokemones: filterCreado,

                }


                //ORDENAMIENTOS

             case "ORDENADO_POR_NOMBRE":
                 let sort= action.payload === "asc"?
                 state.Pokemones.sort(function(a,b){
                     if(a.name > b.name){
                         return 1;
                     }
                     if(b.name > a.name){
                        return -1;
                    }
                    return 0;

                 }) :
                 state.Pokemones.sort(function(a,b){
                    if(a.name > b.name){
                        return -1;
                    }
                    if(a.name > b.name){
                        return 1;
                    }
                    return 0
                 })

                return {
                    ...state,
                  Pokemones:sort
               
                }


                case "ORDENADO_POR_ATTACK":
                  

                    let sortAttack= action.payload === "fuerza-"?
                    state.Pokemones.sort(function(a,b){
                        
                        return a.attack - b.attack
                        
                    }): state.Pokemones.sort(function(a,b){

                        return b.attack - a.attack

                    })
                    

                        return {
                            ...state,
                            Pokemones:sortAttack
                            
                        }  
                         
                
                
                    
              

                        case "RESET":
                            return {
                                ...state,
                                Pokemones: action.payload,
                                Pokemones2:action.payload,
                                Reset:[]
                            }

                  
                        



        
                  default:
                         return state;
                     }
                }
                    ;

 
        


export default rootReducer;