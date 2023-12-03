import styles from "./css/summoner-icon.module.css"
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import { getProfileIcon } from "@/api/lol";

export default function MatchParticipantIcon({ player }) {

    const [icon, setIcon] = useState('')

    useEffect(() => {
        getProfileIcon(player).then(url => setIcon(() => url))
    }, [])

    const renderIcon = icon && <img className={styles.summonerIcon} src={icon} alt={`Summoner icon by ${player.name}`} />;

    return (
        <>
            <Link className={styles.summonerLinkIcon} to="/profile">
                {renderIcon}
            </Link>
        </>
    )

}