import "../styles/AnimalList.scss"
import Card from "./Card"
import { useState } from "react"

function AnimalList({animalData}){
    const [selected, setSelected] = useState("All")
    
    // let allDisplay =
    //  animalData.map((animal)=>( 
    //  <Card
    //   animal={animal}
    //   greater={true}
    //   key={animal.id}/>))
    const animalsToDisplay = animalData.filter((animal)=> animal.family === selected || selected === "All")
  
    return(<div className="about">
        <div className="grid">
        <form >
        <select type="text" name="family" placeholder="filter..." value={selected} onChange={(e)=>setSelected(e.target.value)}>
            <option value="All">All</option>
            <option value="hugger">Huggers</option>
            <option value="snek">Sneks</option>
            <option value="nope">Nopes</option>
        </select>
        </form>
       
        {
        animalsToDisplay.map((animal)=>
        <Card 
        greater={true} 
        animal={animal} 
        key={animal.id}/>)}
    </div>
    </div>)
}

export default AnimalList