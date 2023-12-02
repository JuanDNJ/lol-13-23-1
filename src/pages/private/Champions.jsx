import styles from "./css/champions.module.css";
import { useEffect, useState } from "react"
import { CHAMPIONS, CHAMPIONS_LOADING } from "@/config"
import { Link } from "react-router-dom";
import MainMenu from "../../components/MainMenu";
import Grid from "../../components/Grid";
import MainHeader from "../../components/MainHeader";
import Page from "../../components/Page";
export default function Champions() {
    const [champions, setChampions] = useState([]);

    useEffect(() => {
        fetch(CHAMPIONS.replace("{language}", "es_ES"))
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
            })
            .then((res) => {
                const data = Object.values(res.data)
                const parseData = data.map(champion => {
                    champion.image.full = CHAMPIONS_LOADING.replace('{loading}', `${champion.id}_0`)
                    return champion
                })
                setChampions(() => parseData)
                // console.log(data)
            });
    }, []);

    const renderChampions = champions.map(
        (champion, keyId) => {
            return (
                <li className={styles.item} key={keyId}>
                    <Link className={styles.linkItem} to={`/champion/${champion.key}`}>
                        {champion.name}
                    </Link>
                    <img className={styles.imageItem} src={champion.image.full} alt="Imagen de carga del campeon" />
                </li>
            )
        }
    )
    return (
        <Grid>
            <MainHeader>
                <h2 className="subtitle">Champions</h2>
                <MainMenu />
            </MainHeader>
            <Page>
                <ul className={styles.listChampions}>
                    {renderChampions}
                </ul>
            </Page>
        </Grid>

    )
}