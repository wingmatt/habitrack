import Header from './Header'
import styles from './Layout.module.css'
import Link from "next/link";
import { useUserData } from '../../helpers/UserProvider';
import { Alert } from '@reach/alert';

const clearAlert = (dispatch) => {
  dispatch({type: "UPDATE_ALERT", payload: ""})
}

export default function Layout ({children}) {
  const {state, dispatch} = useUserData();

  return (
    <>
      <Header/>
      <main className={styles.main}>
      {state.alert ? <Alert type="polite" className={styles.alert}>{state.alert} <button onClick={() => clearAlert(dispatch)}>X</button></Alert> : ""}
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