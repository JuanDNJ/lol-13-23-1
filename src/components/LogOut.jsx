import { Link } from "react-router-dom";
import { useStore } from "../context/Store.ctx";

export function LogOut() {
    const { removeUserName } = useStore()
    const handlerExit = (eve) => {
        removeUserName()
    }
    return (
        <Link onClick={handlerExit} to="/logout">LogOut</Link>
    )
}