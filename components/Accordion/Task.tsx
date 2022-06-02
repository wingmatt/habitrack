import { TaskInterface } from '../../types'
import styles from './Task.module.css'
import { useState } from 'react'
import { FiCheckSquare, FiSquare } from 'react-icons/fi'

const Task = (props: TaskInterface) => {
  // TODO: Add testing to ensure this doesn't break when we refactor
  // TODO: Refactor to get these values directly from props, which are taken from a big Supabase object somewhere
  const [complete, setComplete] = useState(props.complete)
  const [name, setName] = useState(props.name)

  return (
    <li>
      <label className={complete ? styles.complete : ""}>
        {complete ? <FiCheckSquare focusable="false" title="Checked" /> : <FiSquare focusable="false" title="Unchecked"/>}
        <input className="sr-only"
          type="checkbox"
          checked={complete}
          onChange={() => {
            setComplete(complete => !complete)
          }}
        />
        <span>{name}</span>
      </label>
    </li>
  )
}

export default Task

/*
<li className={styles.listItem} key={props.id}>
  <label className={checked ? styles.checked : ""}>
    {checked ? <FiCheckSquare focusable="false" title="Checked" /> : <FiSquare focusable="false" title="Unchecked"/>}
    <input className="sr-only"
      type="checkbox"
      checked={checked}
      onChange={() => {
        setChecked(!checked)
        dispatch({type: 'UPDATE_INGREDIENT_CHECKBOX', payload: {
          itemListId: props.itemListId,
          ingredientId: props.id,
          checked: !checked
        }})
      }}
    />
    <span>{props.ingredient}</span>
  </label>
</li>
*/