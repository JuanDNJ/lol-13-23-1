import { Link } from "react-router-dom";

export default function Page404() {
    return (
        <>
            <h2>404</h2>
            <strong>Page not found!</strong>
            <Link to="/">Home</Link>
        </>
    )
}