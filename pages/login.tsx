import { useEffect } from "react";
import Auth from "../components/Auth";
import { AiOutlineLoading } from "react-icons/ai";
import { useRouter } from "next/router";
import { useUserData } from "../helpers/UserProvider";


export default function Home() {
  const {state} = useUserData();
  const router = useRouter();
  useEffect(() => {
    if (!(state.user == null)) router.push("/dashboard");
  }, []);
  return (
    <div className="container" style={{ padding: "50px 0 100px 0" }}>
      {!state.user ? <Auth /> : <AiOutlineLoading />}
    </div>
  );
}
