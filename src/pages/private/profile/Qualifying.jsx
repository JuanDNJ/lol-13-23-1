import { useEffect, useState } from "react";
import League from "@/components/League";
import ContainerButtons from "@/components/ContainerButtons";
import { getLeagueEntriesBySummonerId } from "@/api/lol";
import { useStore } from "@/context/Store.ctx";

export default function Qualifying() {
    const [qualifying, setQualifying] = useState([])
    const [leagueId, setLeagueId] = useState()
    const [rank, setRank] = useState()
    const { summoner } = useStore()

    const handlerLeague = (id, ranked) => {
        setLeagueId(() => id)
        setRank(() => ranked)
    }

    useEffect(() => {
        getLeagueEntriesBySummonerId(summoner).then(res => {
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
