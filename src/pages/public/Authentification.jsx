import { useStore } from "@/context/Store.ctx";
import { useEffect } from "react";
import { Navigate } from 'react-router-dom';
export default function Authentification() {
    const { userName, saveUserName } = useStore()

    if (userName) {
        return <Navigate to="/" />
    }

    const handlerSubmit = (eve) => {
        eve.preventDefault();

        console.log(eve.target.summoner.value)
        saveUserName(eve.target.summoner.value)
    }

    return (
        <>
            <h2>Authentification</h2>
            <form onSubmit={handlerSubmit}>
                <input type="text" name="summoner" placeholder="Insert your summoner name" />
                <button type="submit">Send</button>
            </form>
        </>
    )
}