import Link from 'next/link'
import styles from 'styles/nav.module.sass'

export default function Nav() {
  return (
    <nav>
      <ul className={styles.list}>
        <li>
          <Link href='/'>
            home
          </Link>
        </li>
        <li>
          <Link href='/about'>
            about
          </Link>
        </li>
        <li>
          <Link href='/blog'>
            blog
          </Link>
        </li>
      </ul>
    </nav>
  )
}