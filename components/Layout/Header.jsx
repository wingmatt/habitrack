import styles from "./Header.module.css";
import Link from "next/link";
import { FaGem, FaUserAstronaut } from "react-icons/fa";
import { HiFire, HiMenu } from "react-icons/hi";
import { useUserData } from "../../helpers/UserProvider";

const HeaderLinks = () => {
const {state} = useUserData();
return (
  <ul role="list">
  { state.user ?
    <>
    <li>
      <Link href="/dashboard">
        <a>Dashboard</a>
      </Link>
    </li>
    <li>
      <Link href="/habits">
        <a>Habits</a>
      </Link>
    </li>
    <li>
      <Link href="/progress">
        <a>Progress</a>
      </Link>
    </li>
    </> : 
  <>
  <li><Link href="/login"><a>Sign up or Login</a></Link></li>
  </>
  }
  </ul>
);
}

const StatCounter = ({ icon, stat, title }) => (
  <figure title={title}>
    {icon}
    <span>{stat}</span>
  </figure>
);

export default function Header() {
  const {state} = useUserData();
  return (
    <header className={styles.header}>
      <details className={styles.navSm}>
        <summary>
          <HiMenu />
        </summary>
        <nav>
          <HeaderLinks state={state} />
        </nav>
      </details>
      <h1>
        <Link href="/">
          <a>Habitrack</a>
        </Link>
      </h1>
      <nav className={styles.navLg}>
        <HeaderLinks />
      </nav>
      {state.user ? <>
      <StatCounter icon={<FaGem />} stat={state.user.gems} title="Total Gems" />
      <StatCounter icon={<HiFire />} stat={state.user.streak} title="Current Streak" />
      <Link href="/profile">
        <a>
        Profile <FaUserAstronaut />
        </a>
      </Link>
      </> : "" }
      
    </header>
  );
}
