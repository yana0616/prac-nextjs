import styles from 'styles/post-body.module.sass'

export default function Postbody({ children }) {
  return (
    <div className={styles.stack}>
      {children}
    </div>
  )
}