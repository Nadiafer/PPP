
// const fetch=require("node-fetch")

const { default: axios } = require('axios');
const {Type} = require('../db');


const getTypeApi = async () => {
    let reqType = await axios('https://pokeapi.co/api/v2/type');
     const typesResults = await reqType.data.results.map(e=>e.name)
     await typesResults.forEach(type => Type.create({name: type}))

    
      const types = await Type.findAll()
  
      
      return types;

}


module.exports = {
    getTypeApi
};