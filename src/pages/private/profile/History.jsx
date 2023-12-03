import { useStore } from "@/context/Store.ctx"
import { useEffect, useState } from "react"
import { getListOfMatches } from "../../../api/lol"
import Match from "../../../components/Match"

export default function History() {
    const { summoner } = useStore()
    const [matches, setMatches] = useState()

    useEffect(() => {
        getListOfMatches(summoner.puuid)
            .then(matches => setMatches(() => matches))
    }, [])
    return (
        <article>
            <h2 className="title">History</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: "1rem", padding: "2rem 60px" }}>
                {matches && matches.map((match, key) => <Match key={key} matchId={match} />)}
            </div>
        </article>
    )
}