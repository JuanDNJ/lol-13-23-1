import styles from "../css/history.module.css"
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

    const renderMatches = matches && matches.map((match, key) => <Match key={key} matchId={match} />)

    return (
        <article>
            <h2 className="title">History</h2>
            <div className={styles.historyPage}>
                {renderMatches}
            </div>
        </article>
    )
}