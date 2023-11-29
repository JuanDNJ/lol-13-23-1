
import { useStore } from "../context/Store.ctx"
const Index = () => {
    const { userName } = useStore()

    return (
        <>
            <h1>Vite + React {userName}</h1>
        </>
    )
}

export default Index;