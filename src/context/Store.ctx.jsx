import { createContext, useContext, useCallback, useMemo, useState } from "react";


const CTX = createContext();


export default function StoreCtx({ children }) {

    const [summoner, setSummoner] = useState(JSON.parse(localStorage.getItem("summoner")) ?? false)


    const saveSummoner = useCallback((name) => {
        localStorage.setItem("summoner", JSON.stringify(name))
        setSummoner(() => JSON.parse(localStorage.getItem("summoner")) ?? false);
    }, [summoner])
    const removeSummoner = useCallback(() => {
        localStorage.removeItem("summoner")
        setSummoner(() => JSON.parse(localStorage.getItem("summoner")) ?? false);
    }, [summoner])
    const value = useMemo(() => ({
        summoner,
        saveSummoner,
        removeSummoner
    }), [summoner, saveSummoner, removeSummoner])

    return (
        <CTX.Provider value={value}>
            {children}
        </CTX.Provider>
    )
}

export function useStore() {
    const context = useContext(CTX);
    if (context === undefined) {
        throw new Error('useStore must be used within a UseStore')
    }
    return context;
}