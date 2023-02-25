import "../styles/NavBar.scss"
import { NavLink } from "react-router-dom"

function NavBar({isVisible}){

    return(
            <div className={`navBar ${isVisible}`}>
            <div className="navLinks">
                <NavLink to= "/" className="link" style={{marginRight: "10px"}}>
                    Home
                </NavLink>
                <NavLink to="about" className="link" style={{marginRight: "10px"}}>
                    About
                </NavLink>
                <NavLink to="/addNewForm" className="link" style={{marginRight: "10px"}}>
                    Add Animal
                </NavLink>
            </div>
            </div>
    )
}
export default NavBar