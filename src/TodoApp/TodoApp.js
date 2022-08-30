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

  const todoDelHandler = (index) =>
    setTodos(todos.filter((todo) => todo.id !== index))

  const clearAllHandler = () => setTodos([])
  const clearDoneHandler = () =>
    setTodos(todos.filter((todo) => !todo.isCompleted))

  const doneCount = todos.filter((todo) => todo.isCompleted).length
  const doneTask = doneCount > 1 ? `${doneCount} tasks` : `${doneCount} task`

  return (
    <div className={styles.TodoApp}>
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodoHandler} />
      {!todos.length && <p>...there are no new challenges here</p>}
      <TodoList
        todos={todos}
        todoToggle={todoToggleHandler}
        todoDel={todoDelHandler}
      />
      {!!todos.length && (
        <TodoActions
          clearAll={clearAllHandler}
          clearDone={clearDoneHandler}
          doneCount={doneCount}
        />
      )}
      {!!doneCount && <p>you have done {doneTask}</p>}
    </div>
  )
}
