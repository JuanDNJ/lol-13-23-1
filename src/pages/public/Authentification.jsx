import { useStore } from "@/context/Store.ctx";

import { Navigate } from 'react-router-dom';
import { DEVELOPMENT_API_KEY, GET_SUMMONER_DATA } from "../../config";
export default function Authentification() {
    const { summoner, saveSummoner } = useStore()

    if (summoner) {
        return <Navigate to="/" />
    }

    const handlerSubmit = (eve) => {
        eve.preventDefault();
        console.log(eve.target.summoner.value)
        fetch(GET_SUMMONER_DATA.replace("{region}", eve.target.region.value).replace("{summonerName}", eve.target.summoner.value).replace("{token}", DEVELOPMENT_API_KEY))
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

    return (
        <>
            <h2>Authentification</h2>
            <form onSubmit={handlerSubmit}>
                <input type="text" name="region" placeholder="Insert your region by summoner name" defaultValue="euw1" />
                <input type="text" name="summoner" placeholder="Insert your summoner name" />
                <button type="submit">Send</button>
            </form>
        </>
    )
}