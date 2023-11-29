import { createContext, useContext, useCallback, useMemo, useState } from "react";


const CTX = createContext();


export default function StoreCtx({ children }) {

    const [userName, setUserName] = useState("PimpoBolson")


    const saveUserName = useCallback((name) => {
        setUserName(() => name)
    }, [userName])



    const value = useMemo(() => ({
        userName,
        saveUserName
    }), [userName, saveUserName])

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