import GreaterCard from "./GreaterCard"
import NewAnimalForm from "./NewAnimalForm"
import { useState } from "react"
import "../styles/AddNewForm.scss"

function AddNewForm({handleNewAnimal}){
    const [form, setForm] = useState({})

    // build initially empty greater card
    // NewAnimalForm right below
    // any input should be displayed automatically as a preview
    // card is posted

    const {image, name, description, family, about} = form

    return(<div className="Add-New-Form">
        <div className="preview-greater-card">
            <div className="preview-card">
                <div className="image-container">
                    <img src={image} className="image"/>
                </div>
                <div className="body-container">
                    <p className="name">{`The ${name}`}</p>
                    <p className="description">{description}</p>
                </div>
                <div className="bottom">{family}</div>

            </div>
                <div className="about-section">
                    <h1 className="name">{name}</h1>
                    <p className="about">{about}</p>
                </div>

        </div>
        <div className="footer">
            <NewAnimalForm handleNewAnimal={handleNewAnimal} 
            form={form} 
            setForm={setForm}/>
        </div>
        
    </div>)
}
export default AddNewForm