import axios from "axios"

const todoDataUrl = "http://localhost:3100/todos"

export const getAllTodo = async() => {
  const response = await axios.get(todoDataUrl);

  return response.data
}

export const addTodo = async(todo) => {
  const response = await axios.post(todoDataUrl, todo)

  return response.data
}

export const deleteTodo = async(id) => {
  await axios.delete(`${todoDataUrl}/${id}`)

  return id
}

export const updateTodo = async(todo) => {
  const response = await axios.put(`${todoDataUrl}/${todo.id}`, todo)

  return response.data
}