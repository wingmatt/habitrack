import {FaUserAstronaut} from 'react-icons/fa'
import styles from './Layout.module.css'

export default function Layout ({children}) {

  return (
    <>
      <header className={styles.header}>
        <h1><a href="/dashboard">Habitrack</a></h1>
        <nav>
          <ul role="list">
            <li>
              <a href="/dashboard">Dashboard</a>
            </li>
            
          </ul>
        </nav>
        <FaUserAstronaut/>
      </header>
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