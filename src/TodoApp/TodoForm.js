import { useState } from 'react'
import { Button } from '../UI/Button'
import styles from './TodoForm.module.css'

export const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('')

  const sendTodoForm = (e) => {
    e.preventDefault()
    if (!text.length) return
    addTodo(text)
    setText('')
  }

  return (
    <form className={styles.TodoForm} onSubmit={sendTodoForm}>
      <input
        type="text"
        placeholder="add your todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button>Add+</Button>
    </form>
  )
}
