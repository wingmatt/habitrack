import { useUserData } from '../../helpers/UserProvider'
import { FiCheckSquare, FiSquare } from 'react-icons/fi'
import { HabitInterface } from '../../types'
import {updateHabit} from '../../helpers/updateUserData'

interface CheckboxProps {
  habit: HabitInterface;
}

const updateCheckedStatus = async (wasChecked: boolean | undefined, habit: HabitInterface, dispatch: any): void => {
  habit.complete = !(habit.complete)
  const response = await updateHabit(habit);
  dispatch({type: "UPDATE_HABIT", payload: {
    habit: response,
    alert: ''
  }})
}

const Checkbox = ({habit}: CheckboxProps) => {
  const {dispatch} = useUserData()
  // TODO: Add testing to ensure this doesn't break when we refactor
  return (
    <>
      {habit?.complete ? <FiCheckSquare focusable="false" title="Checked" /> : <FiSquare focusable="false" title="Unchecked"/>}
      <input className="sr-only"
        type="checkbox"
        checked={habit?.complete}
        onChange={() => {
          updateCheckedStatus(habit?.complete, habit, dispatch)
        }}
      />
    </>
  )
}

export default Checkbox