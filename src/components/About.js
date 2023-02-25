import "../styles/About.scss"
import GreaterCard from "./GreaterCard"
import { useState } from "react"

function About({animalData}){

   let allDisplay =  animalData.map((animal)=> <GreaterCard animal={animal} key={animal.id}/>)

    // const allDisplay =  animalData.map((animal)=> <GreaterCard animal={animal} key={animal.id}/>)

    const [selected, setSelected] = useState("All")
    const [filteredAnimals, setFilteredAnimals] = useState("All")

    // console.log(animalsToDisplay)
    // console.log(allDisplay)
    
    function handleFilter(e){
        e.preventDefault()
        // this is where I'll make my filter
        if(selected === "All"){
            setFilteredAnimals("All")
        }
        else{
            console.log(selected)
            setFilteredAnimals(animalData.filter((animals)=> animals.family === selected))
            // console.log(animalData.filter((animals)=> animals.family === selected))
        }
    }
    // const nopes = animalData.filter( animal => animal.family === "nope")
    return(<div className="about">
        <div className="grid">
        {/* <div className="filter"> */}
        <form onSubmit={handleFilter}>
        <select type="text" name="family" placeholder="filter..."  onChange={(e)=>setSelected(e.target.value)}>
            <option value="All">All</option>
            <option value="hugger">Huggers</option>
            <option value="snek">Sneks</option>
            <option value="nope">Nopes</option>
        </select>
        <button type="submit">Filter</button>
        </form>
        {/* </div> */}
        {filteredAnimals === "All"  ? allDisplay : filteredAnimals.map((animal)=><GreaterCard animal={animal} key={animal.id}/>)}
    </div>
    </div>)
}

export default About