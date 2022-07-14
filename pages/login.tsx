import { useState, useEffect } from "react";
import { supabase } from "../utils/supabaseClient";
import Auth from "../components/Auth";
import { AiOutlineLoading } from "react-icons/ai";
import { useRouter } from "next/router";
import { Session } from "@supabase/supabase-js";

export default function Home() {
  const [session, setSession] = useState<Session | null | undefined>(undefined);
  const router = useRouter();
  useEffect(() => {
    const supabaseSession = supabase.auth.session();
    if (supabaseSession) setSession(supabaseSession);

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);
  useEffect(() => {
    if (!(session === null)) router.push("/dashboard");
  }, [session]);
  return (
    <div className="container" style={{ padding: "50px 0 100px 0" }}>
      {!session ? <Auth /> : <AiOutlineLoading />}
    </div>
  );
}
