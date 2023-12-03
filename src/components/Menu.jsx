import styles from "./css/menu.module.css"

export default function Menu({ children, mode }) {
    const { menuCenter, menuStart, menuEnd, menuBetween, menuEvenly } = styles;
    let menuMode = menuCenter;
    if (mode === 'between') menuMode = menuBetween
    if (mode === 'evenly') menuMode = menuEvenly
    if (mode === 'start') menuMode = menuStart
    if (mode === 'end') menuMode = menuEnd

    return (
        <nav className={menuMode}>
            {children}
        </nav>
    )
}