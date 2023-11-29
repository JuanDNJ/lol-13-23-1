import { useStore } from "@/context/Store.ctx";
import { useEffect } from "react";
import { Navigate } from 'react-router-dom';
export default function Authentification() {
    const { userName, saveUserName } = useStore()

    if (userName) {
        return <Navigate to="/" />
    }

    const handlerSummoner = (eve) => {
        console.log(eve.target.value)
        saveUserName(eve.target.value)
    }

    return (
        <>
            <h2>Authentification</h2>
            <input onChange={handlerSummoner} type="text" name="summoner" placeholder="Insert your summoner name" />
        </>
    )
}