import { FaAngleDoubleDown, FaAngleDoubleUp } from 'react-icons/fa'

const Toggle = (props: {
  isOpen: boolean
}) => {
  if (props.isOpen) return <FaAngleDoubleUp />
  else return <FaAngleDoubleDown />
}

export default Toggle