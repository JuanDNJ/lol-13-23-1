import { Link } from "react-router-dom";
import { useStore } from "../context/Store.ctx";

export function LogOut() {
    const { removeSummoner } = useStore()
    const handlerExit = (eve) => {
        removeSummoner()
    }
    return (
        <Link onClick={handlerExit} to="/logout">LogOut</Link>
    )
}