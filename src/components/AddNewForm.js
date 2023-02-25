import GreaterCard from "./GreaterCard"
import NewAnimalForm from "./NewAnimalForm"
import { useState } from "react"
import "../styles/AddNewForm.scss"

function AddNewForm(){
    const [form, setForm] = useState({})

    // build initially empty greater card
    // NewAnimalForm right below
    // any input should be displayed automatically as a preview
    // card is posted
    const emptyAnimal = {
      name: "",
      image: "",
      description: "",
      family: "",
      about: "",
      id: 22

    }

    function handleNewAnimal(form){
    }
    console.log(form)
    const {image, name, description, family} = form
    console.log(image)

    return(<div className="Add-New-Form">
        <div className="preview-greater-card">
            <div className="preview-card">
                <div className="image-container">
                    <img src={image} className="image"/>
                </div>

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