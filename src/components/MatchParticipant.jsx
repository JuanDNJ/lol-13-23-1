import styles from "./css/match.module.css"
import { useStore } from "@/context/Store.ctx"
import { useEffect, useState } from "react"
import MatchParticipantChampionSquare from "./MatchParticipantChampionSquare"
export default function MatchParticipant({ player }) {

    const { summoner } = useStore()

    const [playerMatch, setPlayerMatch] = useState()


    useEffect(() => {
        if (player && player.puuid === summoner.puuid) {
            console.log("matchParticipant")
            setPlayerMatch(() => player)
        }
    }, [])
    return (<>

        {playerMatch ? <div className={styles.matchParticipant}>
            <MatchParticipantChampionSquare nameChampion={playerMatch.championName} />

            <div className={styles.matchParticipantInfo}>
                <strong>{playerMatch.championName}</strong>
                <strong>Level: {playerMatch.champLevel}</strong>
                <strong>{playerMatch.win ? 'Victory' : 'Defeat'}</strong>
                <strong>{playerMatch.individualPosition !== 'Invalid' ? <span> {playerMatch.role}</span> : null}</strong>
            </div>
            <div className={styles.matchParticipantItems}>
                <strong style={{ border: "1px solid snow" }}>{playerMatch.item0}</strong>
                <strong style={{ border: "1px solid snow" }}>{playerMatch.item1}</strong>
                <strong style={{ border: "1px solid snow" }}>{playerMatch.item2}</strong>
                <strong style={{ border: "1px solid snow" }}>{playerMatch.item3}</strong>
                <strong style={{ border: "1px solid snow" }}>{playerMatch.item4}</strong>
                <strong style={{ border: "1px solid snow" }}>{playerMatch.item5}</strong>
                <strong style={{ border: "1px solid snow" }}>{playerMatch.item6}</strong>
            </div>

        </div> : null}
    </>)
}
