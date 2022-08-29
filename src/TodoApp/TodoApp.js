import React, { useState } from 'react'
import { TodoActions } from './TodoActions'
import { TodoForm } from './TodoForm'
import { TodoList } from './TodoList'
import styles from './TodoApp.module.css'

export const TodoApp = () => {
  const [todos, setTodos] = useState([])

  const addTodoHandler = (text) => {
    const newTodo = {
      text,
      id: Date.now(),
      isCompleted: false,
    }
    setTodos([...todos, newTodo])
  }

  const todoToggleHandler = (index) =>
    setTodos(
      todos.map((todo) =>
        todo.id === index
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    )

  return (
    <div className={styles.TodoApp}>
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList todos={todos} todoToggle={todoToggleHandler} />
      <TodoActions />
    </div>
  )
}
