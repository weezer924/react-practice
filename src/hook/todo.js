import { ulid } from "ulid"

import { useEffect, useState } from "react"
import * as todoData from "../api/todo"

export const useTodo = () => {
  const [todoList, setTodoList] = useState([])

  useEffect(() => {
    console.log("use custom hook")
    todoData.getAllTodo().then((data) => {
      setTodoList([...data].reverse())
    })
  },[])

  const toggleStatusTodoList = (id, done) => {

    const todoItem = todoList.find(item => item.id === id)

    const newTodo = { ...todoItem, done: !done }
    todoData.updateTodo(newTodo).then((updated) => {
      const newTodo = todoList.map(item => item.id !== updated.id ? item : updated)

      setTodoList(newTodo)
    })
  }

  const addTodo = (content) => {

  }

  const deleteTodo = (id) => {

  }

  return {
    todoList,
    toggleStatusTodoList,
    addTodo,
    deleteTodo
  }
}