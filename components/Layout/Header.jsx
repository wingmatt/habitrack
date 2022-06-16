import styles from "./Header.module.css";
import Link from "next/link";
import { FaGem, FaUserAstronaut } from "react-icons/fa";
import { HiFire, HiMenu } from "react-icons/hi";

const HeaderLinks = () => (
  <ul role="list">
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
  </ul>
);

const GemTotal = ({ total }) => (
  <>
    <FaGem />
    <span>{total}</span>
  </>
);

const StreakTotal = ({ total }) => (
  <>
    <HiFire />
    <span>{total}</span>
  </>
);

const StatCounter = ({ icon, stat, title }) => (
  <figure title={title}>
    {icon}
    <span>{stat}</span>
  </figure>
);

export default function Header() {
  //TODO get stats from DB
  return (
    <header className={styles.header}>
      <details className={styles.navSm}>
        <summary>
          <HiMenu />
        </summary>
        <nav>
          <HeaderLinks />
        </nav>
      </details>
      <h1>
        <Link href="/dashboard">
          <a>Habitrack</a>
        </Link>
      </h1>
      <nav className={styles.navLg}>
        <HeaderLinks />
      </nav>
      <StatCounter icon={<FaGem />} stat="42" title="Total Gems" />
      <StatCounter icon={<HiFire />} stat="17" title="Current Streak" />
      <Link href="/profile">
        <a>
          <FaUserAstronaut />
        </a>
      </Link>
    </header>
  );
}
