import Container from "./container";
import Logo from "./logo";
import Nav from "./nav";
import styles from "styles/header.module.sass";


export default function Header() {
  return (
    <header>
      <Container large>
        <div className={styles.flexContainer}>
          <Logo boxOn />
          <Nav />
        </div>
      </Container>
    </header>
  )
}