import React from 'react'
import {useState} from "react"
import { useDispatch } from 'react-redux'
import {getNamePokemons} from "../redux/actions/index"
import "./searchBar.css"

export default function SearchBar({refresc}) {
 const dispatch = useDispatch()
 const [name, setname] = useState("")

 function handleInputChange(e){
     e.preventDefault()
     setname(e.target.value)
 }
function handleSubmit(e){
    e.preventDefault()
    dispatch(getNamePokemons(name))
    refresc(1)
}
    return (

        <div className='searchInput'>
            <input className='input' type= "text"
            placeholder='Busca tu pokemon favorito..'
            onChange={e=> handleInputChange(e)}
             ></input>
                <button className='searchboton' type="submit" onClick={(e)=> handleSubmit(e)}>Buscar</button>
                </div>             
     
    )
}
