
// const fetch=require("node-fetch")

const { default: axios } = require('axios');
const {Type} = require('../db');


const getTypeApi = async () => {
   let typesResults = await Type.findAll()
   if(typesResults.length===0){
    try {
      let reqType = await axios('https://pokeapi.co/api/v2/type');
       typesResults = await reqType.data.results.map(e=>e.name)
       await typesResults.forEach(type => Type.create({name: type}))
       return typesResults
       
    } catch (error) {
      next(error)
    }
   }else return typesResults.map(e =>e.name)
  
      

}


module.exports = {
    getTypeApi
};