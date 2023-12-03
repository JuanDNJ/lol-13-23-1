import { CHAMPIONS_SQUARE } from "../config";

export default function MatchParticipantChampionSquare({ nameChampion }) {

    return (
        <img style={{ width: "100%", objectFit: "cover" }} src={CHAMPIONS_SQUARE.replace("{square}", nameChampion)} alt="Champion Square" />
    )
}