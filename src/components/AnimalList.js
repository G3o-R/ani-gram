import "../styles/AnimalList.scss"
import Card from "./Card"
import { useState } from "react"

function AnimalList({animalData}){
    const [selected, setSelected] = useState("All")
    const [filteredAnimals, setFilteredAnimals] = useState("All")
    
    let allDisplay =  animalData.map((animal)=> <Card animal={animal} greater={true} key={animal.id}/>)
    
    function handleFilter(e){
        e.preventDefault()
        // this is where I'll make my filter
        if(selected === "All"){
            setFilteredAnimals("All")
        }
        else{
            console.log(selected)
            setFilteredAnimals(animalData.filter((animals)=> animals.family === selected))
        }
    }
    // const nopes = animalData.filter( animal => animal.family === "nope")
    return(<div className="about">
        <div className="grid">
        <form onSubmit={handleFilter}>
        <select type="text" name="family" placeholder="filter..."  onChange={(e)=>setSelected(e.target.value)}>
            <option value="All">All</option>
            <option value="hugger">Huggers</option>
            <option value="snek">Sneks</option>
            <option value="nope">Nopes</option>
        </select>
        <button type="submit">Filter</button>
        </form>
        {/* 
        
        */}
        {filteredAnimals === "All"  ? allDisplay : 
        filteredAnimals.map((animal)=>
        <Card 
        greater={true} 
        animal={animal} 
        key={animal.id}/>)}
    </div>
    </div>)
}

export default AnimalList