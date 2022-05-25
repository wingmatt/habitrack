import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabaseClient'
import Auth from '../components/Auth'
import Account from '../components/Account'
import Accordion from '../components/Accordion/'

export default function Home() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    setSession(supabase.auth.session())

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <div className="container" style={{ padding: '50px 0 100px 0' }}>
      <Accordion title="Morning" iconUrl='something' tasks={["howdy"]}></Accordion>
      <Accordion title="Daytime" iconUrl='something' tasks={["howdy"]}></Accordion>
      <Accordion title="Evening" iconUrl='something' tasks={["howdy"]}></Accordion>
    </div>
  )
}