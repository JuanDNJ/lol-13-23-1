import styles from "./css/summoner-icon.module.css"
import { Link } from "react-router-dom";
import { useStore } from "@/context/Store.ctx";
import { useEffect, useState } from "react";
import { PROFILE_ICON } from "../config";

export default function SummonerIcon() {

    const { summoner } = useStore()
    const [icon, setIcon] = useState('')
    // console.log(summoner)

    useEffect(() => {
        fetch(PROFILE_ICON.replace("{profileiconid}", summoner.profileIconId))
            .then(record => record.url)
            .then(res => setIcon(() => res))
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