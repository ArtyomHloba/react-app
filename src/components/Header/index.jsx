import logoImg from "./logo.png"
import styles from './header.module.css'

function Header(){
    return <header className={styles.pageHeader}>
        <img className={styles.logoImg} src={logoImg} alt="logo" />
    </header>
}

export default Header