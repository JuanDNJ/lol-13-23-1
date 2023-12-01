import { useEffect, useState } from "react";
import League from "@/components/League";
import ContainerButtons from "../../../components/ContainerButtons";

export default function Qualifying() {
    const URL = "https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/zPOhFoI3Bt_4rU8fnsOzTJPKZlhLP4IEt-8sUPrCzR1Ps4Q?api_key=RGAPI-f1cee9c7-a2d8-4436-92e6-dce2caf3c89e";
    const [qualifying, setQualifying] = useState([])
    const [leagueId, setLeagueId] = useState()
    const [rank, setRank] = useState()
    const handlerLeague = (id, ranked) => {
        setLeagueId(() => id)
        setRank(() => ranked)
    }

    useEffect(() => {
        fetch(URL)
            .then(record => record.json())
            .then(res => {
                // console.log(res)
                setQualifying(() => res)

            })

    }, [])

    return (
        <article>
            <h2 className="title">Qualifying</h2>
            <ContainerButtons>
                {qualifying && qualifying.map((qualify, key) =>
                    <button key={key} onClick={() => handlerLeague(qualify.leagueId, qualify.rank)}>
                        {qualify.queueType}
                    </button>
                )}
            </ContainerButtons>
            {leagueId && <League leagueId={leagueId} ranked={rank} />}
        </article>
    )
}