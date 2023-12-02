import styles from "./css/champion.module.css";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { CHAMPIONS_FULL, CHAMPIONS_SPLASH } from "@/config"
import MainMenu from "../../components/MainMenu";
import Grid from "../../components/Grid";
import MainHeader from "../../components/MainHeader";
import Page from "../../components/Page";
export default function Champion() {
    const { key } = useParams()
    const [champion, setChampion] = useState(null)
    useEffect(() => {
        fetch(CHAMPIONS_FULL.replace("{language}", "es_ES"))
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
            })
            .then((res) => {
                const data = Object.values(res.data)
                setChampion(() => data.find(rec => {
                    if (rec.key === key) {
                        rec.image.full = CHAMPIONS_SPLASH.replace("{splash}", `${rec.id}_0`)
                        return rec
                    }
                }))
                console.log(data.find(rec => rec.key === key))
            });
    }, [])

    return (
        <Grid>
            <MainHeader>
                <h2 className="subtitle">Champion</h2>
                <MainMenu />
            </MainHeader>
            <Page>
                <h2 className="title">{champion && champion.name}</h2>
                <div className={styles.imgFull}>
                    <img src={champion && champion.image.full} alt="" />
                </div>
                <h3 className="subtitle">{champion && champion.title}</h3>
                <p>
                    {champion && champion.lore}
                </p>
            </Page>
        </Grid>

    )
}