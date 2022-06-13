import {FaUserAstronaut} from 'react-icons/fa'

export default function Layout () {

  return (
    <>
      <header>
        <h1>Habitrack</h1>
        <nav>
          <ul role="list">
            <li>
              <a href="/dashboard">Dashboard</a>
            </li>
            
          </ul>
        </nav>
        <FaUserAstronaut/>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <ul role="list">
          <li>
            <a href="/tasks/new">New Task</a>
            <a href="/tasks/manage">Manage Tasks</a>
          </li>
        </ul>
      </footer>
    </>
  )
}