import { LogOut } from "@/components/LogOut"
import { Link, Outlet } from "react-router-dom"
import MainMenu from "@/components/MainMenu"
import Grid from "@/components/Grid"
import MainHeader from "@/components/MainHeader"
import Page from "@/components/Page"
import Menu from "../../../components/Menu"


export default function SummonerProfile() {
    return (
        <Grid>
            <MainHeader>
                <h2 className="subtitle">Profile</h2>
                <MainMenu />
            </MainHeader>
            <Page>
                <Menu mode="center">
                    <Link to="history">History</Link>
                    <Link to="stats">Stats</Link>
                    <Link to="qualifying">Qualifying</Link>
                    <LogOut />
                </Menu>
                <Outlet />
            </Page>
        </Grid>

    )

}
