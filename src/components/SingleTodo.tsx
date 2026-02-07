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
    return (
        <form className="singleTodos" action="">
            <span className="singleTodosText">
                {todo.todo}
            </span>
            <div>
                <span className="icon">
                    <AiFillEdit />
                </span>
                <span className="icon">
                    <AiFillDelete />
                </span>
                <span className="icon">
                    <MdDone />
                </span>
            </div>
        </form>
    )
}

export default SingleTodo;