import styles from "./css/summoner-icon.module.css"
import { Link } from "react-router-dom";
import { useStore } from "@/context/Store.ctx";
import { useEffect, useState } from "react";
import { getProfileIcon } from "@/api/lol";

export default function SummonerIcon() {

    const { summoner } = useStore()
    const [icon, setIcon] = useState('')

    useEffect(() => {
        getProfileIcon(summoner).then(url => setIcon(() => url))
    }, [])

    const renderIcon = icon && <img className={styles.summonerIcon} src={icon} alt={`Summoner icon by ${summoner.name}`} />;

    return (
        <>
            <Link className={styles.summonerLinkIcon} to="/profile">
                {renderIcon}
            </Link>
        </>
    )

}
