import { useEffect } from "react";
import { useRouter } from "next/router";
import { AiOutlineLoading } from "react-icons/ai";
import { useUserData } from "./UserProvider";
import { Props } from "../types";

export default function AuthRequired({ children }: Props) {
  const {state} = useUserData();
  const router = useRouter();
  const userSession = state?.user;
  useEffect(() => {
    const userSession = state?.user;
    if (userSession === null || (userSession?.user && userSession.email === undefined))
      router.push("/login");
  }, []);
  if (userSession && userSession?.email) {
    return <>{children}</>;
  } else {
    return <AiOutlineLoading />;
  }
}
