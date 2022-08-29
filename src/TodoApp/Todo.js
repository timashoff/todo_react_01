import {
  RiTodoLine,
  RiCheckboxCircleLine,
  RiCloseCircleLine,
} from 'react-icons/ri'
import styles from './Todo.module.css'

export const Todo = () => {
  return (
    <div className={styles.Todo}>
      <RiTodoLine />
      <p>The light green is set to space-evenly</p>
      <RiCheckboxCircleLine className={styles.iconDone} />
      <RiCloseCircleLine className={styles.iconDelete} />
    </div>
  )
}
