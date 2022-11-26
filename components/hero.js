import styles from 'styles/hero.module.sass'

export default function Hero({ title, subTitle, imageOn = false }) {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subTitle}</p>
      </div>
      {imageOn && <figure>【画像】</figure>}
    </div>
  )
}