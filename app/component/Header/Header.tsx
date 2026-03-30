import Link from "next/link"
import styles from './Header.module.scss'
const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <p className={styles.headerTitle}>
        <Link href="/">Smart Goals</Link>
      </p>
    </div>
  )
}

export default Header