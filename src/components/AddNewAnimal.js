import "../styles/NewAnimalForm.scss"
import { useState } from "react"
import PreviewCard from "./PreviewCard"

function AddNewAnimal({handleNewAnimal}){
    const [formData, setForm] = useState({
        image: "",
        name: "",
        description: "",
        about: ""
    })
    const {image, name, description, about} = formData
// console.log(form)
// console.log(image)
    function handleChange(e){
        let name = e.target.name
        let value = e.target.value
        setForm({...formData, [name]:value})
        // console.log(form)
    }

    function handleNewAnimalSubmit(e){
        e.preventDefault()
        fetch("http://localhost:4000/animals",{
           method: "POST",
           headers: { 'Content-Type': 'application/json'},
           body: JSON.stringify(formData) 
        })
        .then(res=>res.json())
        .then((newAnimal)=>handleNewAnimal(newAnimal))
        setForm({
            image: "",
            name: "",
            description: "",
            about: ""
        })
    }

    return(
        <>
        <PreviewCard formData={formData}/>
        <div className="footer">
    <div className="animal-form">
        <h1>Add New Animal</h1>
        <form onSubmit={handleNewAnimalSubmit}>
            <input type="text" name="image" value={image} placeholder="image..." onChange={handleChange}/>
            <input type="text" name="name" value={name} placeholder="name..." onChange={handleChange}/>
            <input type="text" name="description" value={description} placeholder="description..." onChange={handleChange}/>
            <input type="text" name="about" value={about} placeholder="about..." onChange={handleChange}/>
            {/* family should be an onSwitch/ category change */}
            <select type="text" name="family" placeholder="family..." onChange={handleChange}>
                <option value="hugger">hugger</option>
                <option value="snek">snek</option>
                <option value="nope">nope</option>

            </select>
            <button type="submit">Add Animal</button>
        </form>
        </div>
    </div>
        </>
    )
}

export default AddNewAnimal