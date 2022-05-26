import TaskTally from "./TaskTally"
import { GiFireGem } from "react-icons/gi"


const GemProgress = (props: {
  tasksCompleted: number
}) => {
  return (
    <figure>
      <GiFireGem />
      <GiFireGem />
      <TaskTally />
    </figure>
  )
}

export default GemProgress