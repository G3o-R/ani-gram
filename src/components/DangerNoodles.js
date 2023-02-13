import "../styles/DangerNoodles.scss"
import Card from "./Card"

function DangerNoodles({animalData}){
    console.log("test")
    return(<div className="content-noodle">
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

export default DangerNoodles