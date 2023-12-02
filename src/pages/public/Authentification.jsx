import styles from "./css/forms.module.css"
import { useStore } from "@/context/Store.ctx";
import { Navigate } from 'react-router-dom';
import { ALL_REGIONS, BROWSER_LANGUAGE } from "@/config";
import { useEffect, useState } from "react";
import Flag from "@/components/Flag";
import { BANDERAS_JSON } from "@/config";
import { getSummonerByName } from "@/api/lol";
import { getListFlags } from "../../api/lol";

export default function Authentification() {
    const { summoner, saveSummoner } = useStore()
    const [regions, setRegions] = useState([])
    const [countries, setCountries] = useState([])
    const [selectedCountrie, setSelectedCountrie] = useState(BROWSER_LANGUAGE.slice(0, 2))

    if (summoner) {
        return <Navigate to="/" />
    }

    const handlerSubmit = async (event) => {
        const fields = Object.fromEntries(new FormData(event.target))
        event.preventDefault();
        const data = await getSummonerByName(fields)
        saveSummoner(data)
    }
    const handlerCountrie = (event) => {
        setSelectedCountrie(() => event.target.value)
    }

    useEffect(() => {
        setRegions(() => Object.entries(ALL_REGIONS).map(region => {
            return {
                value: region[0],
                region: region[1],
            }
        }))
        getListFlags()
            .then(list => {
                setCountries(() => Object.entries(list))
            })
    }, [selectedCountrie])

    const regionsRender = regions.map((record, keyId) => (<option key={keyId} value={record.region}>{record.value}</option>))
    const renderCountries = countries.map((countrie, keyId) => (
        <option key={keyId} value={countrie && countrie[0]}>
            {countrie && countrie[1]}
        </option>
    ));

    return (
        <section className="container authentication">
            <h2 className="title">Authentification</h2>
            <form onSubmit={handlerSubmit} className={styles.formSelectSummoner}>
                <div className={styles.formControl}>
                    <strong>Select Region</strong>
                    <select name="region" defaultValue={'EUW1'}>
                        {regionsRender}
                    </select>
                </div>
                <div className={styles.formControl}>
                    <strong>Select language <Flag size={'32x24'} code={selectedCountrie && selectedCountrie} /></strong>
                    <select onChange={handlerCountrie} name="language" value={selectedCountrie}>
                        {renderCountries}
                    </select>
                </div>
                <div className={styles.formControl}>
                    <strong>Summoner Name</strong>
                    <input type="text" id="summoner" name="summonerName" placeholder="Insert name" />
                </div>
                <div className={styles.formControl}>
                    <button type="submit">Send</button>
                </div>
            </form>
        </section>
    )
}