import React from 'react'
import { TodoActions } from './TodoActions'
import { TodoForm } from './TodoForm'
import { TodoList } from './TodoList'
import styles from './TodoApp.module.css'

export const TodoApp = () => {
  return (
    <div className={styles.TodoApp}>
      <h1>Todo List</h1>
      <TodoForm />
      <TodoList />
      <TodoActions />
    </div>
  )
}
