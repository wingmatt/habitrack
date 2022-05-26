import TaskTally from "./TaskTally"
import { FaGem } from "react-icons/fa"


const GemProgress = (props: {
  tasksCompleted: number
}) => {
  return (
    <figure>
      <FaGem />
      <FaGem />
      <TaskTally />
    </figure>
  )
}

export default GemProgress