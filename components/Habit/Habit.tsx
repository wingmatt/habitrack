import TimeOfDayIcon from "../../helpers/TimeOfDayIcon"
import getRepeatDate from "../../helpers/getRepeatDate";
import { FaEdit } from "react-icons/fa";
import { HabitInterface } from "../../types";



export default function Habit(props: HabitInterface) {
  const repeatDate = getRepeatDate(props.lastCompleted, props.daysUntilRepeat)
  return (
    <li>
      <TimeOfDayIcon timeOfDay={props.timeOfDay} />
      <span>{props.name}</span>
      <span>Repeats: {repeatDate}</span>
      <FaEdit />
    </li>
  );
}