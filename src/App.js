import { useTodo } from "./hook/todo"

const TodoItem = ({ todo, toggleStatusTodoList }) => {

  const handleToggle = () => toggleStatusTodoList(todo.id, todo.done)

  return (
    <li key={todo.id}>
      {todo.content}
      <button onClick={handleToggle}>
        {todo.done ? "未完了リストへ":"完了リストへ"}
      </button>
      <button>削除</button>
    </li>
  )
}

const TodoList = ({ todoList, toggleStatusTodoList }) => {
  return (
    <ul>
      {todoList.map((todo) => <TodoItem todo={todo} key={todo.id} toggleStatusTodoList={toggleStatusTodoList} />)}
    </ul>
  ) 
}

function App() {
  const {todoList, toggleStatusTodoList} = useTodo();
  
  const doneList = todoList.filter(todo => todo.done)
  const undoList = todoList.filter(todo => !todo.done)

  return (
    <>
      <textarea />

      <button>+TODO追加</button>

      <h2>完了TODOリスト</h2>
      <TodoList todoList={doneList} toggleStatusTodoList={toggleStatusTodoList} />

      <h2>未完了TODOリスト</h2>
      <TodoList todoList={undoList} toggleStatusTodoList={toggleStatusTodoList} />
    </>
  );
}

export default App;
