import styles from "./css/main-menu.module.css";
import { Link } from "react-router-dom"

import { useStore } from "@/context/Store.ctx"
import SummonerIcon from "./SummonerIcon"
export default function MainMenu() {
    const { summoner } = useStore()
    return (
        <nav className={styles.mainMenu} >
            <Link to="/">Inicio</Link>
            <Link to="/champions">Champions</Link>
            <SummonerIcon />
        </nav>
    )
}