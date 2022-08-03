import styles from "./Accordion.module.css"
import { WiSunrise, WiDaySunny } from "react-icons/wi"
import {BsMoonStars} from "react-icons/bs"
import { FaEdit } from "react-icons/fa"
import GemProgress from "./GemProgress"
import Toggle from "./Toggle"
import { useState } from "react"
import { TaskInterface } from '../../types'
import { useUserData } from "../../helpers/UserProvider"
import TimeOfDayIcon from "../../helpers/TimeOfDayIcon"
import getRepeatDate from "../../helpers/getRepeatDate"
import Link from "next/link"

const Accordion = ( props: {
  title: "Morning" | "Daytime" | "Evening",
  tasks: TaskInterface[],
  iconUrl: string,
}) => {
  const [isOpen, setIsOpen] = useState (false);
  const {state} = useUserData();
  return (
    //@ts-ignore-next: Spread types may only be created from object types.ts(2698)
    <details {... isOpen ? "open" : ""} className={styles.details}>
      <summary onClick={() => setIsOpen(isOpen => !isOpen)} className={styles.summary} role="button">
        <div className={styles.titleContainer}>
          <TimeOfDayIcon timeOfDay={props.title} />
          <h2>{props.title}</h2>
        </div>
        <GemProgress tasksCompleted={0} />
        <Toggle isOpen={isOpen}/>
      </summary>
      <ul role="list">
        {state.habits.filter(habit => habit.timeOfDay == props.title.toLowerCase()).map((habit) => (
          <li className={styles.habit}>
            <span>{habit.name}</span>
          </li>
        ))}
      </ul>
    </details>
    )
}

export default Accordion;