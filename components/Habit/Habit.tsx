import TimeOfDayIcon from "../../helpers/TimeOfDayIcon"
import getRepeatDate from "../../helpers/getRepeatDate";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";
import { HabitInterface } from "../../types";
import styles from './Habit.module.css'



export default function Habit(props: HabitInterface) {
  const repeatDate = getRepeatDate(props.lastCompleted, props.daysUntilRepeat)
  return (
    <li class={styles.habit}>
      <TimeOfDayIcon timeOfDay={props.timeOfDay} />
      <span>{props.name}</span>
      <span>Repeats: {repeatDate}</span>
      <Link href={'/habits/edit/' + props.id}>
        <a><FaEdit /></a>
      </Link>
      
    </li>
  );
}