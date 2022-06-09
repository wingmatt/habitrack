import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabaseClient'
import Accordion from '../components/Accordion/'

export default function Dashboard() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    setSession(supabase.auth.session())

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])
  return (
    <div className="container" style={{ padding: '50px 0 100px 0' }}>
      <Accordion key="1" title="Morning" iconUrl='something' tasks={[{complete: false, name: "mornin'"}, {complete: true, name: "Second morning thing"}]}></Accordion>
      <Accordion key="2" title="Daytime" iconUrl='something' tasks={[{complete: false, name: "howdy'"}]}></Accordion>
      <Accordion key="3" title="Evening" iconUrl='something' tasks={[{complete: false, name: "evenin'"}]}></Accordion>
    </div>
  )
}