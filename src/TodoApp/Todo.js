import {
  RiTodoLine,
  RiCheckboxCircleLine,
  RiCloseCircleLine,
} from 'react-icons/ri'
import styles from './Todo.module.css'

export const Todo = ({ todo, todoToggle, todoDel }) => {
  return (
    <div
      className={`${styles.Todo} ${todo.isCompleted ? styles.TodoDone : ''}`}
      onClick={() => todoToggle(todo.id)}
    >
      <RiTodoLine />
      <p>{todo.text}</p>
      <RiCloseCircleLine
        className={styles.iconDelete}
        onClick={(e) => {
          e.stopPropagation()
          todoDel(todo.id)
        }}
      />
      <RiCheckboxCircleLine
        className={`${styles.iconDone} ${
          todo.isCompleted ? styles.iconGreen : ''
        }`}
        onClick={(e) => {
          e.stopPropagation()
          todoToggle(todo.id)
        }}
      />
    </div>
  )
}
