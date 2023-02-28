import "../styles/Home.scss"
import Card from "./Card"


function Home({animalData}){
   
    return(
        <>
        <div className="content">
            {animalData.map((animal)=>(
                <Card 
                greater={false}
                animal={animal}
                key={animal.id}
                />
                ))}
        </div>
                <div className="footer">
                </div>
                </>
    )
}

export default Home