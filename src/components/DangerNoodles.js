import "../styles/DangerNoodles.scss"
import Card from "./Card"
import GreaterCard from "./GreaterCard"

function DangerNoodles({animalData}){
    return(<div className="content-noodle">
        <div className="grid">
          {animalData.map((animal)=> <GreaterCard animal={animal} key={animal.id}/>)}
    </div>
    </div>)
}

export default DangerNoodles