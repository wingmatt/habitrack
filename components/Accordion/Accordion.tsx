import { WiSunrise } from "react-icons/wi"
import GemProgress from "./GemProgress"
import Toggle from "./Toggle"
import { useState } from "react"

const Accordion = ( props: {
  title: string,
  tasks: string[],
  iconUrl: string,
}) => {
  const [isOpen, setIsOpen] = useState (true);
  return (
    <details {... isOpen ? "open" : ""} >
      <summary onClick={() => setIsOpen(isOpen => !isOpen)}>
        <WiSunrise />
        <h2>{props.title}</h2>
        <GemProgress tasksCompleted={0} />
        <Toggle isOpen={isOpen}/>
      </summary>
      Tasks will go here someday!
    </details>
    )
}

export default Accordion;