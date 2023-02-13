import "../styles/DangerHuggers.scss"
import Card from "./Card"

function DangerHuggers({animalData}){
    return(<div className="content-bears">
        <div className="grid">
          {animalData.map((animal)=>(
            <div className="greater-card">
                <Card 
                name={animal.name}
                image={animal.image}
                description={animal.description}
                family={animal.family}
                key={animal.id}
                />
                <div className="about-section">
                <h1 className="name">{animal.name}</h1>
                <p className="about">{animal.about}</p>
                </div>
                </div>
                ))}
    </div>
    </div>)
}

export default DangerHuggers