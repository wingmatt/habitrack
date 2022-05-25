import Icon from "./Icon"
import GemProgress from "./GemProgress"
import Toggle from "./Toggle"

const Accordion = ( props: {
  title: string,
  tasks: string[],
  iconUrl: string,
}) => {
  return (
    <details>
      <summary>
        <Icon url={props.iconUrl} />
        <h2>{props.title}</h2>
        <GemProgress />
        <Toggle />
      </summary>
      Tasks will go here someday!
    </details>
    )
}

export default Accordion;