import styles from "./css/leagues.module.css";
import { capitalizeWord } from "@/utils";
import { PUBLIC_URL_EMBLEM_LATEST } from "@/config";

export default function RankingEmblem({ tier, ranked, points }) {
    return (
        <div className={styles.emblemFlag}>
            <img src={PUBLIC_URL_EMBLEM_LATEST.replace("{emblem}", capitalizeWord(tier))} alt="Ranked Emblem" />
            <span><strong>{tier}</strong><strong>{ranked}</strong></span>
            <span className={styles.points}>{points} PL</span>
        </div>
    )

}
