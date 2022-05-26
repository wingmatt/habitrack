import { WiSunrise, WiDaySunny } from "react-icons/wi"
import {BsMoonStars} from "react-icons/bs"
import GemProgress from "./GemProgress"
import Toggle from "./Toggle"
import { useState } from "react"

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
  tasks: string[],
  iconUrl: string,
}) => {
  const [isOpen, setIsOpen] = useState (true);
  return (
    <details {... isOpen ? "open" : ""} >
      <summary onClick={() => setIsOpen(isOpen => !isOpen)}>
        {getTitleIcon(props.title)}
        <h2>{props.title}</h2>
        <GemProgress tasksCompleted={0} />
        <Toggle isOpen={isOpen}/>
      </summary>
      Tasks will go here someday!
    </details>
    )
}

export default Accordion;