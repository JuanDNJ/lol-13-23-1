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
    // const date = new Date(dataTime && dataTime)
    // console.log(date)
    return (
        <div style={{ display: 'flex', flexDirection: 'row', border: "1px solid olive" }}>
            <MatchParticipants match={match && match.info.participants} />
            <div style={{ flex: '1', background: "darkblue" }} >
                <strong>{match && match.info.gameMode}</strong>
                {dataTime && <div>
                    <strong style={{ color: 'red' }}>{dataTime.getDay()}/{dataTime.getMonth()}/{dataTime.getFullYear()}</strong>
                </div>}
                {dataTime && <div>
                    <span>Time played </span><strong>{dataTime.getMinutes()}</strong>:<strong>{dataTime.getSeconds()}</strong>
                </div>}
            </div>
            {/* <time datetime={Date.now(match.info.gameDuration).toLocaleString()}>{Date.now(match.info.gameDuration).toLocaleString()}</time> */}

        </div>
    )
}