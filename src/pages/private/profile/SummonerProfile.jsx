import { LogOut } from "@/components/LogOut"
import { Link, Outlet } from "react-router-dom"
import MainMenu from "@/components/MainMenu"
export default function SummonerProfile() {
    return (
        <section className="container">
            <MainMenu />
            <nav>
                <Link to="history">History</Link>
                <Link to="stats">Stats</Link>
                <Link to="qualifying">Qualifying</Link>
                <LogOut />
            </nav>
            <h2 className="title">Summoner profile</h2>

            <section className="outlet">
                <Outlet />
            </section>
        </section>
    )
}