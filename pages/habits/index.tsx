import Layout from "../../components/Layout";
import AuthRequired from "../../helpers/AuthRequired";
import Habit from "../../components/Habit";
import { useUserData } from "../../helpers/UserProvider";
import TimeOfDayIcon from "../../helpers/TimeOfDayIcon";
import getRepeatDate from "../../helpers/getRepeatDate";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";
import styles from "../../components/Habit/Habit.module.css"

export default function Habits() {
  const { state } = useUserData();
  return (
    <Layout>
      <AuthRequired>
        <h2>My Habits</h2>
        <ul role="list">
          {state.habits.map((habit) => (
              <li className={styles.habit}>
              <TimeOfDayIcon timeOfDay={habit.timeOfDay} />
              <span>{habit.name}</span>
              <span>Repeats: {getRepeatDate(habit.lastCompleted, habit.daysUntilRepeat)}</span>
              <Link href={"/habits/edit/" + habit.id}>
                <a>
                  <FaEdit />
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <h2>Habits Shared with Me</h2>
      </AuthRequired>
    </Layout>
  );
}
