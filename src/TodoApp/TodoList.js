import { Todo } from './Todo'
import styles from './TodoList.module.css'

export const TodoList = ({ todos, todoToggle }) => {
  return (
    <div className={styles.TodoList}>
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} todoToggle={todoToggle} />
      ))}
    </div>
  )
}
