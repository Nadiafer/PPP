const axios = require('axios');
const {Pokemon,Type} = require('../db');




//1- TRAEMOS DE LA API LOS POKEMONS
const getApiInfo = async () => { 

        const getApiUrl = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=40");
        const apiResult = getApiUrl.data.results.map(e => axios.get(e.url)); 
        const infoUrlPokemons = await axios.all(apiResult);   
        let pokemons = infoUrlPokemons.map(obj => obj.data);
        
        let informacionPokemons = pokemons.map(poke=>{

            return {
                
                id: poke.id,
                name: poke.name,
                life: poke.stats[0].base_stat,
                attack: poke.stats[1].base_stat,
                defense: poke.stats[2].base_stat,
                speed: poke.stats[5].base_stat,
                height: poke.height,
                weight: poke.weight,
                sprite: poke.sprites.other.dream_world.front_default,
                types: poke.types.length < 2 ? [poke.types[0].type.name] : [poke.types[0].type.name, poke.types[1].type.name],
            }
          
        }) 
        return informacionPokemons


};


//2- TRAEMOS POKEMONES DE LA BASE DE DATOS 
const getPokedb = async () => {
return await Pokemon.findAll({
    include: 
         {model: Type,
        attributes: ["name"],
    through:{attributes: [] }
         }   
        
})
}



//3- CONCATENAMOS AMBAS INFORMACIONES, DE API Y DE BD 

const getAllPoke = async () => {
    
        const apiPokeData = await getApiInfo();
        const dbPokeData = await getPokedb();

        const pokemonesTotales = apiPokeData.concat(dbPokeData)
        return pokemonesTotales

   
};



module.exports = {
    getAllPoke
}