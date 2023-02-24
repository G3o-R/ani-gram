import "../styles/About.scss"
import GreaterCard from "./GreaterCard"

function About({animalData}){
    function handleSelect(e){
        const selected = e.target.family.value
        console.log(selected)
    }
    return(<div className="about">
        <div className="grid">
        <div className="filter">
        {/* <form onSubmit={handleFilter}> */}
        <select type="text" name="family" placeholder="filter..."  onChange={handleSelect}>
            <option value="All">All</option>
            <option value="hugger">Huggers</option>
            <option value="snek">Sneks</option>
            <option value="nope">Nopes</option>
        </select>
        {/* </form> */}
        </div>
        {animalData.map((animal)=> <GreaterCard animal={animal} key={animal.id}/>)}
    </div>
    </div>)
}

export default About