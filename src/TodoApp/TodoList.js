import { Todo } from './Todo'
import styles from './TodoList.module.css'

export const TodoList = ({ todos, todoToggle, todoDel }) => {
  return (
    <div className={styles.TodoList}>
      {todos.map((todo) => (
        <Todo
          todo={todo}
          key={todo.id}
          todoToggle={todoToggle}
          todoDel={todoDel}
        />
      ))}
    </div>
  )
}
