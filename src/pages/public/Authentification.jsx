import styles from "./css/forms.module.css"
import { useStore } from "@/context/Store.ctx";
import { Navigate } from 'react-router-dom';
import { DEVELOPMENT_API_KEY, GET_SUMMONER_DATA, ALL_REGIONS } from "@/config";
import { useEffect, useState } from "react";
export default function Authentification() {
    const { summoner, saveSummoner } = useStore()
    const [regions, setRegions] = useState([])
    if (summoner) {
        return <Navigate to="/" />
    }

    const handlerSubmit = (eve) => {
        const fields = Object.fromEntries(new FormData(eve.target))
        eve.preventDefault();
        fetch(GET_SUMMONER_DATA.replace("{region}", fields.region).replace("{summonerName}", fields.summoner).replace("{token}", DEVELOPMENT_API_KEY))
            .then(res => {

                if (res.status === 200) {
                    return res.json()
                }
                return false

            })
            .then(summoner => {
                saveSummoner(summoner)
            })
            .catch(err => console.error(err))

        // saveUserName(eve.target.summoner.value)
    }
    useEffect(() => {
        setRegions(() => Object.entries(ALL_REGIONS).map(region => {
            return {
                value: region[0],
                region: region[1],
            }
        }))
    }, [])
    const regionsRender = regions.map((record, keyId) => (<option key={keyId} value={record.region}>{record.value}</option>))
    return (
        <>

            <h2>Authentification</h2>
            <form onSubmit={handlerSubmit} className={styles.formSelectSummoner}>
                <div className={styles.formControlRow}>
                    <strong>Select Region</strong>
                    <select name="region" defaultValue={'EUW1'}>
                        {regionsRender}
                    </select>
                </div>
                <div className={styles.formControl}>
                    <strong>Summoner Name</strong>
                    <input type="text" id="summoner" name="summoner" placeholder="Insert name" />
                </div>
                <div className={styles.formControl}>
                    <button type="submit">Send</button>
                </div>
            </form>
        </>
    )
}