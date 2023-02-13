import "../styles/DangerHuggers.scss"
import GreaterCard from "./GreaterCard"

function DangerHuggers({animalData}){
    return(<div className="content-bears">
        <div className="grid">
        {animalData.map((animal)=> <GreaterCard animal={animal} key={animal.id}/>)}
    </div>
    </div>)
}

export default DangerHuggers