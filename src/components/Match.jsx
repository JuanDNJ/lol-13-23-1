import styles from "./css/match.module.css"
import { useEffect, useState } from "react"
import { getDataMatchById } from "../api/lol";
import MatchParticipants from "./MatchParticipants";

export default function Match({ matchId }) {
    const [match, setMatch] = useState();
    const [dataTime, setDatatime] = useState();
    useEffect(() => {
        getDataMatchById(matchId)
            .then((match) => {
                console.log(match);
                setDatatime(() => new Date(match.info.gameCreation))
                setMatch(match)
            })
    }, [])

    const renderDataTime = dataTime && (<>
        <strong>{match.info.gameMode}</strong>
        <strong style={{ color: 'red' }}>{dataTime.getDay()}/{dataTime.getMonth()}/{dataTime.getFullYear()}</strong>
        <div><span>Time played </span><strong>{dataTime.getMinutes()}</strong>:<strong>{dataTime.getSeconds()}</strong></div>
    </>);

    return (
        <div className={styles.match}>
            {match && <MatchParticipants match={match.info.participants} />}
            <div className={styles.matchInfo}>
                {renderDataTime}
            </div>
        </div>
    )
}

{/* <time datetime={Date.now(match.info.gameDuration).toLocaleString()}>{Date.now(match.info.gameDuration).toLocaleString()}</time> */ }