import styles from "./css/page.module.css"
export default function Page({ children }) {
    return (
        <section className={styles.page}>
            {children}
        </section>
    )
}