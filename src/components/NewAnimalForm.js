import "../styles/NewAnimalForm.scss"
import { useState } from "react"

function NewAnimalForm({handleNewAnimal, form, setForm}){

    function handleChange(e){
        let name = e.target.name
        let value = e.target.value
        setForm({...form, [name]:value})
    }

    function handleNewAnimalSubmit(e){
        e.preventDefault()
        fetch("http://localhost:4000/animals",{
           method: "POST",
           headers: { 'Content-Type': 'application/json'},
           body: JSON.stringify(form) 
        })
        .then(res=>res.json())
        handleNewAnimal(form)
        // handleNewAnimal(form)
    }

    return(<div className="animal-form">
        <h1>Add New Animal</h1>
        <form onSubmit={handleNewAnimalSubmit}>
            <input type="text" name="image" placeholder="image..." onChange={handleChange}/>
            <input type="text" name="name" placeholder="name..." onChange={handleChange}/>
            <input type="text" name="description" placeholder="description..." onChange={handleChange}/>
            <input type="text" name="about" placeholder="about..." onChange={handleChange}/>
            {/* family should be an onSwitch/ category change */}
            <select type="text" name="family" placeholder="family..." onChange={handleChange}>
                <option value="hugger">hugger</option>
                <option value="snek">snek</option>
                <option value="nope">nope</option>

            </select>
            <button type="submit">Add Animal</button>
        </form>
    </div>)
}

export default NewAnimalForm