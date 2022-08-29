import { Todo } from './Todo'
import styles from './TodoList.module.css'

export const TodoList = () => {
  return (
    <div className={styles.TodoList}>
      <Todo />
      <Todo />
      <Todo />
      <Todo />
    </div>
  )
}
