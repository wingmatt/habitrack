import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { AiOutlineLoading } from "react-icons/ai";
import { supabase } from "../utils/supabaseClient";

export default function AuthRequired({ children }) {
  const [session, setSession] = useState(undefined);
  const router = useRouter();
  useEffect(() => {
    setSession(supabase.auth.session());
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);
  useEffect(() => {
    console.log(session);
    if (session === null) router.push("/profile");
  }, [session]);
  if (session) {
    return <>{children}</>;
  } else {
    return <AiOutlineLoading />;
  }
}
