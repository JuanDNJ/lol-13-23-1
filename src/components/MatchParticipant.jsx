import styles from "./css/match.module.css"
import { useStore } from "@/context/Store.ctx"
import { useEffect, useState } from "react"
import MatchParticipantChampionSquare from "./MatchParticipantChampionSquare"
import { ITEM_ASSETS } from "../config"
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
                <span>Level: <small style={{ color: "orange" }}>{playerMatch.champLevel}</small></span>
                <span style={{ color: playerMatch.win ? 'green' : 'red' }}>{playerMatch.win ? 'Victory' : 'Defeat'}</span>
                {playerMatch.individualPosition !== 'Invalid' ? <span style={{ color: 'skyblue' }}> {playerMatch.role}</span> : null}
            </div>
            <div className={styles.matchParticipantItems}>
                {playerMatch.item0 > 0 ? <img className={styles.matchPArticipantItemAsset} src={ITEM_ASSETS.replace("{item}", playerMatch.item0)} alt="item" /> : null}
                {playerMatch.item1 > 0 ? <img className={styles.matchPArticipantItemAsset} src={ITEM_ASSETS.replace("{item}", playerMatch.item1)} alt="item" /> : null}
                {playerMatch.item2 > 0 ? <img className={styles.matchPArticipantItemAsset} src={ITEM_ASSETS.replace("{item}", playerMatch.item2)} alt="item" /> : null}
                {playerMatch.item3 > 0 ? <img className={styles.matchPArticipantItemAsset} src={ITEM_ASSETS.replace("{item}", playerMatch.item3)} alt="item" /> : null}
                {playerMatch.item4 > 0 ? <img className={styles.matchPArticipantItemAsset} src={ITEM_ASSETS.replace("{item}", playerMatch.item4)} alt="item" /> : null}
                {playerMatch.item5 > 0 ? <img className={styles.matchPArticipantItemAsset} src={ITEM_ASSETS.replace("{item}", playerMatch.item5)} alt="item" /> : null}
                {playerMatch.item6 > 0 ? <img className={styles.matchPArticipantItemAsset} src={ITEM_ASSETS.replace("{item}", playerMatch.item6)} alt="item" /> : null}
            </div>

        </div> : null}
    </>)
}
