import "../styles/NavBar.scss"
import { NavLink } from "react-router-dom"

function NavBar({isVisible}){

    return(
            <div className={`navBar${isVisible}`}>
            <div className="navLinks">
                <NavLink to= "/" className="link" style={{marginRight: "10px"}}>
                    Home
                </NavLink>
                <NavLink to="/dangerHuggers" className="link" style={{marginRight: "10px"}}>
                    Huggers
                </NavLink>
                <NavLink to="/dangerNoodles" className="link" style={{marginRight: "10px"}}>
                    Danger Noodles
                </NavLink>
                <NavLink to="/nopes" className="link" style={{marginRight: "10px"}}>
                    Nopes
                </NavLink>
            </div>
            </div>
    )
}
export default NavBar