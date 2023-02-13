import "../styles/DangerNoodles.scss"
import Card from "./Card"
import GreaterCard from "./GreaterCard"

function DangerNoodles({animalData}){
    console.log("test")
    return(<div className="content-noodle">
        <div className="grid">
          {animalData.map((animal)=> <GreaterCard animal={animal}/>)}
    </div>
    </div>)
}

export default DangerNoodles