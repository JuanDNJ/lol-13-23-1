import { Link } from "react-router-dom"
import { LogOut } from "./LogOut"

export default function MainMenu() {
    return (
        <nav>
            <Link to="/">Inicio</Link>
            <Link to="/champions">Champions</Link>
            <LogOut />
        </nav>
    )
}