import Container from './container';
import Logo from './logo';
import styles from 'styles/footer.module.sass';

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <Logo />
          [ソーシャル]
        </div>
      </Container>
    </footer>
  )
}