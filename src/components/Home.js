import "../styles/Home.scss"
import Card from "./Card"
import NewAnimalForm from "./NewAnimalForm"


function Home({animalData,handleNewAnimal}){
   
    return(
        <>
        <div className="content">
            {animalData.map((animal)=>(
                <Card 
                name={animal.name}
                image={animal.image}
                description={animal.description}
                family={animal.family}
                key={animal.id}
                />
                ))}
        </div>
                <div className="footer">
                {/* <NewAnimalForm handleNewAnimal={handleNewAnimal}/> */}
                </div>
                </>
    )
}

export default Home