import Header from './Header'
import styles from './Layout.module.css'

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
            <a href="/habits/new">New Habit</a>
          </li><li>
            <a href="/habits/">All Habits</a>
          </li>
        </ul>
      </footer>
    </>
  )
}