import styles from './TodoForm.module.css'
export const TodoForm = () => {
  return (
    <form className={styles.TodoForm}>
      <input type="text" placeholder="add your todo..." />
      <button>Add</button>
    </form>
  )
}
