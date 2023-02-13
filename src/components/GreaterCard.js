import Card from "./Card"

function GreaterCard({animal}){
    return (
            <div className="greater-card">
                <Card 
                name={animal.name}
                image={animal.image}
                description={animal.description}
                family={animal.family}
                id={animal.id}
                />
                <div className="about-section">
                <h1 className="name">{animal.name}</h1>
                <p className="about">{animal.about}</p>
                </div>
                </div>
                )
}

export default GreaterCard