import Header from './Header'
import styles from './Layout.module.css'
import Link from "next/link";

export default function Layout ({children}) {

  return (
    <>
      <Header/>
      <main className={styles.main}>
        {children}
      </main>
      <footer className={styles.footer}>
        <ul role="list">
          <li>
            <Link href="/habits/new"><a>New Habit</a></Link>
          </li><li>
            <Link href="/habits/"><a>All Habits</a></Link>
          </li>
        </ul>
      </footer>
    </>
  )
}