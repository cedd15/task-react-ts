import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import type { Todo } from "../model";
import "./styles.css"

type Props = {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({ todo, todos, setTodos } : Props) => {

    const handleDone = (id : number) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isDone: !todo.isDone} : todo))
    };

    const handleDelete = (id : number) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    return (
        <form className="singleTodos" action="">
            {
                todo.isDone ? (
                    <s className="singleTodosText">{todo.todo}</s>
                ) : (
                    <span className="singleTodosText">{todo.todo}</span>
                )
            }
            <div>
                <span className="icon">
                    <AiFillEdit />
                </span>
                <span className="icon" onClick={() => handleDelete(todo.id)}>
                    <AiFillDelete />
                </span>
                <span className="icon" onClick={() => handleDone(todo.id)}>
                    <MdDone />
                </span>
            </div>
        </form>
    )
}

export default SingleTodo;