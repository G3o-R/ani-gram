import "../styles/Card.scss"

function Card({name,image,description,family,id}){
    return(
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
    )
}

export default Card