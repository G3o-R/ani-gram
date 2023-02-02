import "../styles/Home.scss"
import Card from "./Card"

function Home({animalData}){
    console.log(animalData)
    return(
        <div className="content">
            {/* test */}
            {animalData.map((animal)=>(
                <Card 
                name={animal.name}
                image={animal.image}
                description={animal.description}
                family={animal.family}
                id={animal.id}
                />
            ))}
        </div>
    )
}

export default Home