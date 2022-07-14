import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { AiOutlineLoading } from "react-icons/ai";
import { supabase } from "../utils/supabaseClient";
import { UserProvider } from "./UserProvider";

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
    if ((session === null) || (session?.user && session.user.email === undefined)) router.push("/login");
  }, [session]);
  if (session && session.user.email) {
    return <UserProvider>{children}</UserProvider>;
  } else {
    return <AiOutlineLoading />;
  }
}
