import styles from "./css/champion.module.css";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { CHAMPIONS_FULL, CHAMPIONS_SPLASH } from "@/config"
import MainMenu from "../../components/MainMenu";
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
        <>
            <MainMenu />
            <h2>{champion && champion.name}</h2>
            <img src={champion && champion.image.full} alt="" />
            <h3>{champion && champion.title}</h3>
            <p>
                {champion && champion.lore}
            </p>
        </>
    )
}