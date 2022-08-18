import { useEffect } from "react";
import Auth from "../components/Auth";
import { useRouter } from "next/router";
import { useUserData } from "../helpers/UserProvider";
import Layout from "../components/Layout";
import Loading from "../components/Layout/Loading";


export default function Home() {
  const {state} = useUserData();
  const router = useRouter();
  useEffect(() => {
    if (!(state.user == null)) router.push("/dashboard");
  }, []);
  return (
    <Layout>
      <h1 className="header">Supabase + Next.js</h1>
      <p className="description">Sign in via magic link with your email below</p>
      {!state.user ? <Auth /> : <Loading />}
    </Layout>
  );
}
