import { LogOut } from "@/components/LogOut"
import { Link, Outlet } from "react-router-dom"
import MainMenu from "@/components/MainMenu"
import Grid from "@/components/Grid"
import MainHeader from "@/components/MainHeader"
import Page from "../../../components/Page"
export default function SummonerProfile() {
    return (
        <Grid>
            <MainHeader>
                <h2 className="subtitle">Profile</h2>
                <MainMenu />
            </MainHeader>
            <Page>
                <nav>
                    <Link to="history">History</Link>
                    <Link to="stats">Stats</Link>
                    <Link to="qualifying">Qualifying</Link>
                    <LogOut />
                </nav>
                <h2 className="title">Summoner profile</h2>
                <Outlet />
            </Page>
        </Grid>

    )
}