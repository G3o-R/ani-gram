import "../styles/NavBar.scss"
import { NavLink } from "react-router-dom"

function NavBar({isVisible}){

    return(
            <div className={`navBar ${isVisible}`}>
                <h1 className="title">Ani-Gram</h1>
            <div className="navLinks">
                <NavLink to= "/" className="link" style={{marginRight: "10px"}}>
                    Home
                </NavLink>
                <NavLink to="/animalInfo" className="link" style={{marginRight: "10px"}}>
                    About the animals
                </NavLink>
                <NavLink to="/addNewAnimal" className="link" style={{marginRight: "10px"}}>
                    Add Animal
                </NavLink>
            </div>
            </div>
    )
}
export default NavBar