import { createContext, useContext, useCallback, useMemo, useState } from "react";


const CTX = createContext();


export default function StoreCtx({ children }) {

    const [userName, setUserName] = useState(JSON.parse(localStorage.getItem("summoner")) ?? false)


    const saveUserName = useCallback((name) => {
        localStorage.setItem("summoner", JSON.stringify(name))
        setUserName(() => JSON.parse(localStorage.getItem("summoner")) ?? false);
    }, [userName])
    const removeUserName = useCallback(() => {
        localStorage.removeItem("summoner")
        setUserName(() => JSON.parse(localStorage.getItem("summoner")) ?? false);
    }, [userName])
    const value = useMemo(() => ({
        userName,
        saveUserName,
        removeUserName
    }), [userName, saveUserName, removeUserName])

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