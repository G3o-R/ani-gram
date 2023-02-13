import "../styles/Nopes.scss"
import Card from "./Card"
import GreaterCard from "./GreaterCard"

function Nopes({animalData}){
    return(<div className="content-nope">
    <div className="grid">
      {animalData.map((animal)=> <GreaterCard animal={animal} key={animal.id}/>)}
</div>
</div>)
}

export default Nopes