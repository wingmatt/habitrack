import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabaseClient'
import Auth from '../components/Auth'
import Account from '../components/Account'
import Layout from '../components/Layout'
import { useUserData } from '../helpers/UserProvider'

export default function Home() {
  const {state} = useUserData();

  return (
    <Layout>
      {!state.user ? <Auth /> : <Account key={state.user.id} session={state} />}
    </Layout>
  )
}