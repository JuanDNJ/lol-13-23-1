import styles from "./css/leagues.module.css";
const PUBLIC_URL_EMBLEM = 'http://localhost:5173/images/ranked-emblems-latest/Rank={emblem}.png';
const capitalizeWord = (word) => {
    const letter = word.trim().toLowerCase()
    const firstChar = letter.charAt(0).toUpperCase()
    return firstChar + letter.slice(1)
}
export default function RankingEmblem({ tier, ranked, points }) {
    return (
        <div className={styles.emblemFlag}>
            <img src={PUBLIC_URL_EMBLEM.replace("{emblem}", capitalizeWord(tier))} alt="Ranked Emblem" />
            <span><strong>{tier}</strong><strong>{ranked}</strong></span>
            <span className={styles.points}>{points} PL</span>
        </div>
    )
}