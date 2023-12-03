import { useState } from "react"
import MatchParticipant from "./MatchParticipant"


export default function MatchParticipants({ match }) {

    return (
        <div style={{ display: "flex", flex: '2', background: "gray", padding: ".5rem 1rem" }}>
            {match && match.map((participant, key) => <MatchParticipant key={key} player={participant} />)}
        </div>
    )
}