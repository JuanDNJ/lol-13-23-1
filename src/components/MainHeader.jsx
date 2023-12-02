import styles from "./css/main-header.module.css";
export default function MainHeader({ children }) {
    return (
        <header className={styles.mainHeader}>
            {children}
        </header>
    )
}