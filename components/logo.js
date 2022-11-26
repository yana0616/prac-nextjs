import Link from 'next/link'
import styles from 'styles/logo.module.sass'

export default function Logo({ boxOn = false }) {
  return (
    // TODO:
    //   Linkコンポーネント使えば、aタグで括らなくていいっぽい（本だとaタグ括れって書いてる）
    <Link href='/' className={boxOn ? styles.box : styles.basic}>
      CUBE
    </Link>
  )
}