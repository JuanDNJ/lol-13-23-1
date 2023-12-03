import { CHAMPIONS_SQUARE } from "../config";
import styles from "./css/match.module.css"
export default function MatchParticipantChampionSquare({ nameChampion }) {

    return (
        <img className={styles.matchParticipantCahmpionSquare} src={CHAMPIONS_SQUARE.replace("{square}", nameChampion)} alt="Champion Square" />
    )
}