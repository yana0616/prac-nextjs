import styles from 'styles/hero.module.sass'
import Image from 'next/image'
import cube from 'images/cube.jpg'

export default function Hero({ title, subTitle, imageOn = false }) {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subTitle}</p>
      </div>
      {imageOn && (
        <figure>
          <Image
            src={cube}
            alt=""
            sizes="(min-width: 1152px) 576px, (min-width: 768px) 50%, 100vw"
            style={{ width: '100%', height: 'auto' }}
            priority
            placeholder="blur"
          ></Image>
        </figure>
      )}
    </div>
  )
}