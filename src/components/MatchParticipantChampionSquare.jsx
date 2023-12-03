import { CHAMPIONS_SQUARE } from "../config";

export default function MatchParticipantChampionSquare({ nameChampion }) {

    return (
        <img src={CHAMPIONS_SQUARE.replace("{square}", nameChampion)} alt="Champion Square" />
    )
}