import { Link } from "react-router-dom"

export default function MainMenu() {
    return (
        <nav>
            <Link to="/">Inicio</Link>
            <Link to="/champions">Champions</Link>
        </nav>
    )
}