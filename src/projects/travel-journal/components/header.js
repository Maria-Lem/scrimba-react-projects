import styles from "../styles/travel-journal.module.css";
import logo from "../images/logo.svg";

export default function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo} alt="website logo" />
      <h1 className={styles.webpageTitle}>my travel journal.</h1>
    </header>
  )
}