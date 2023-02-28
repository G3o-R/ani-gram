import "../styles/Card.scss"

function Card({animal, greater}){
    const {image, name, description, about, family} = animal
    return(
        <div className={greater ? "greater-card" : ""}>
    <div className="card">
        <div className="image-container">
            <img src={image} alt={name} className="image" />
        </div>
        <div className="body-container">
            <p className="name">{`The ${name}`}</p>
            <p className="description">{description}</p>
        </div>
        <div className="bottom">{family}</div>
        </div>
        {greater === true ?   <div className="about-section">
                        <h1 className="name">{name}</h1>
                         <p className="about">{about}</p>
                    </div>
                 : null}
    </div>
    )
}

export default Card