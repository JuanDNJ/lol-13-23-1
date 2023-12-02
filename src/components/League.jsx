import { useEffect, useState } from "react"
import styles from "./css/leagues.module.css"
import { useStore } from "@/context/Store.ctx";
import RankingEmblem from "./RankingEmblem";
import { getLeagueById } from "@/api/lol";
import { ordenarMayorAmenor } from "@/utils";

export default function League({ leagueId, ranked }) {
    const [league, setLeague] = useState();
    const { summoner } = useStore()
    const [points, setPoints] = useState();

    useEffect(() => {
        getLeagueById({ region: summoner.region, id: leagueId })
            .then(res => {
                const PL = res.entries.find(sum => sum.summonerId === summoner.id)
                setPoints(() => PL.leaguePoints)
                setLeague(() => res)
            })

    }, [leagueId])

    return (
        <section className={styles.league}>
            {league && <>
                <h4>{league.name}</h4>
                <RankingEmblem tier={league.tier} ranked={ranked} points={points} />
                <article className={styles.table}>
                    <header className={styles.leaderBoardHader}>
                        <strong >Summoners</strong>
                        <strong >Losses</strong>
                        <strong >Wins</strong>
                        <strong >Points</strong>
                    </header>
                    {league.entries.toSorted(ordenarMayorAmenor).map((record, key) => {
                        if (record.rank === ranked) {
                            return <div key={key} className={styles.leaderBoardBody}>
                                <strong className={styles.name}>{record.summonerName}</strong>
                                <strong className={styles.losses}>{record.losses}</strong>
                                <strong className={styles.wins}>{record.wins}</strong>
                                <strong className={styles.points}>{record.leaguePoints}</strong>
                            </div>
                        }

                    })}
                </article>
            </>}
        </section>
    )

}
