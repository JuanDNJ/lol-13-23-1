import styles from "./css/grid.module.css"
import { Children } from "react"
export default function Grid({ children }) {

    return (
        <section className={styles.grid}>
            {children}
        </section>
    )

}


