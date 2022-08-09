import styles from "./Accordion.module.css"

import GemProgress from "./GemProgress"
import Toggle from "./Toggle"
import Checkbox from "./Checkbox"
import { useState } from "react"
import { useUserData } from "../../helpers/UserProvider"
import TimeOfDayIcon from "../../helpers/TimeOfDayIcon"

const Accordion = ( props: {
  title: "Morning" | "Daytime" | "Evening"
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
          <li  key={habit.id} className={styles.habit}>
            <label className={habit.complete ? styles.complete : ""}>
              <Checkbox habit={habit} />
              <span>{habit.name}</span>
            </label>
          </li>
        ))}
      </ul>
    </details>
    )
}

export default Accordion;