import { Link } from "react-router-dom"
import { LogOut } from "./LogOut"
import { useStore } from "@/context/Store.ctx"
export default function MainMenu() {
    const { summoner } = useStore()
    return (
        <nav style={{ display: "flex", gap: "1rem", placeContent: "flex-end", background: "#223", margin: 'none', padding: "1rem" }}>
            <Link to="/">Inicio</Link>
            <Link to="/champions">Champions</Link>
            <Link to="/profile">{summoner && summoner.name}</Link>
            <LogOut />
        </nav>
    )
}