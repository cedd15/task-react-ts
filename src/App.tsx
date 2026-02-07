import { useState } from 'react';
import './App.css'
import InputField from './components/InputField'
import { type Todo } from './model';
import TodoList from './components/TodoList'

function App() {
  const [toDo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e : React.SubmitEvent) => {
    e.preventDefault();

    if (toDo) {
      setTodos([...todos, {id: Date.now(), todo: toDo, isDone: false}]);
      setTodo("");
    }
  };

  console.log(todos);

  return (
    <div className='App'>
      <span className='heading'>Taskify</span>
      <InputField toDo={toDo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
      {/* {todos.map(t => <li>{t.todo}</li>)} */}
    </div>
  )
}

export default App
