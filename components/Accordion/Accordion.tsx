import styles from "./Accordion.module.css"
import { WiSunrise, WiDaySunny } from "react-icons/wi"
import {BsMoonStars} from "react-icons/bs"
import GemProgress from "./GemProgress"
import Toggle from "./Toggle"
import Task from "./Task"
import { useState } from "react"
import { TaskInterface } from '../../types'


const getTitleIcon = (title: "Morning" | "Daytime" | "Evening") => {
  switch (title) {
    case "Morning":
      return <WiSunrise />;
    case "Daytime":
      return <WiDaySunny />;
    case "Evening":
      return <BsMoonStars />;
  }
}

const Accordion = ( props: {
  title: "Morning" | "Daytime" | "Evening",
  tasks: TaskInterface[],
  iconUrl: string,
}) => {
  const [isOpen, setIsOpen] = useState (false);
  return (
    <details {... isOpen ? "open" : ""} className={styles.details}>
      <summary onClick={() => setIsOpen(isOpen => !isOpen)} className={styles.summary} role="button">
        <div className={styles.titleContainer}>
          {getTitleIcon(props.title)}
          <h2>{props.title}</h2>
        </div>
        <GemProgress tasksCompleted={0} />
        <Toggle isOpen={isOpen}/>
      </summary>
      <ul role="list">
        {props.tasks.map(( task, index )=> <Task key={index} complete={task.complete} name={task.name} />)}
      </ul>
    </details>
    )
}

export default Accordion;