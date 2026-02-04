import { useState } from 'react';
import './App.css'
import InputField from './components/InputField'

function App() {
  const [toDo, setTodo] = useState<string>("");

  return (
    <div className='App'>
      <span className='heading'>Taskify</span>
      <InputField toDo={toDo} setTodo={setTodo} />
    </div>
  )
}

export default App
