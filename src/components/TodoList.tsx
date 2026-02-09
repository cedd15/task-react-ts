import type React from "react";
import type { Todo } from "../model";
import SingleTodo from "./SingleTodo";

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList : React.FC<Props> = ({todos, setTodos} : Props) => {
    return (
        <div className="todosContainer">
            <div className="todos">
                <span className="todosHeading">
                    Active Tasks
                </span>
                {todos.map(t => (
                    <SingleTodo todo={t} key={t.id} todos={todos} setTodos={setTodos} />
                ))}
            </div>
            <div className="todos removed">
                <span className="todosHeading">
                    Completed Tasks
                </span>
                {todos.map(t => (
                    <SingleTodo todo={t} key={t.id} todos={todos} setTodos={setTodos} />
                ))}
            </div>
        </div>
    )
}

export default TodoList;