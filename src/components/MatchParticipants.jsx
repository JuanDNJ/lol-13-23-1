import styles from "./css/match.module.css"
import MatchParticipant from "./MatchParticipant"


export default function MatchParticipants({ match }) {

    return (
        <div className={styles.matchParticipants}>
            {match && match.map((participant, key) => <MatchParticipant key={key} player={participant} />)}
        </div>
    )
}