import Logo from "./logo";
import Nav from "./nav";
import styles from "styles/header.module.sass"


export default function Header() {
  return (
    <header>
      <div className={styles.flexContainer}>
        <Logo boxOn />
        <Nav />
      </div>
    </header>
  )
}