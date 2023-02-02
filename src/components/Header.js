import "../styles/Header.scss"
import { NavLink } from "react-router-dom"

function Header({effect}){
    return(
        <header className={`menu-header-content ${effect}`}>
            <div className="navBar">
            <div className="navLinks">
                <NavLink to="/goodBois" className="link" style={{marginRight: "10px"}}>
                    Good Bois
                </NavLink>
                <NavLink to="/sneks" className="link" style={{marginRight: "10px"}}>
                    Danger Noodles
                </NavLink>
                <NavLink to="/nopes" className="link" style={{marginRight: "10px"}}>
                    Nopes
                </NavLink>
            </div>
            </div>
        </header>
    )
}
export default Header