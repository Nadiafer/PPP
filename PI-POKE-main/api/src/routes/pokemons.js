const {Router} = require('express')
const {getAllPoke} = require('../midleware/PokemonControl');
const { Pokemon, Type} = require('../db')


const router = Router()




//UNIFICO RUTAS, PARA BUSCAR NAME POR QUERY Y TODOS LOS POKEMONES

router.get('/pokemons', async (req, res) => {

const name = req.query.name
const pokemonesTodos= await getAllPoke()

if(name){

  let pokeName= await pokemonesTodos.filter(e=> e.name.toUpperCase().includes(name.toUpperCase()))//busqueda global 
  pokeName.length ? 
  res.status(200).send(pokeName) :
  res.send(["Pokemon no encontrado"])
}else{
  res.status(200).send(pokemonesTodos)
}
});


//CREO UN POKEMON
router.post ('/pokemon' , async (req, res)=>{
  const {name, sprite, hp, attack, defense, speed, height, weight, creadoBd, types} = req.body
  const pokemonCreated = await Pokemon.create({
                name: name.toLowerCase(),
                
                hp,
                attack,
                defense,
                speed,
                height,
                weight,
                creadoBd,
                sprite,
                

});
const allTypes = await Type.findAll({
                where: {
                    name: types
                }
});
pokemonCreated.addType(allTypes)
return res.send('Pokemon Creado con exito')

}
)


    
 router.get("/pokemons/:id", async (req,res)=>{

  const id =parseInt(req.params.id)
  const PokeTotal= await getAllPoke()

  if(id){
    let pokeId= await PokeTotal.filter(e=> e.id === id)
   pokeId.length?
   res.status(200).json(pokeId):
   res.status(404).send("No se encontro pokemon")
  }
  else{
            res.status(200).json (pokemonTotal);
  }



 })





  module.exports = router;









