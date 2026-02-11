import type React from "react";
import type { Todo } from "../model";
import SingleTodo from "./SingleTodo";
import { Droppable } from "react-beautiful-dnd";

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    completedTodos: Todo[];
    setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList : React.FC<Props> = ({todos, setTodos, completedTodos, setCompletedTodos} : Props) => {
    return (
        <div className="todosContainer">
            <Droppable droppableId="TodosList">
                {
                    (provided) => (
                        <div className="todos" ref={provided.innerRef} {...provided.droppableProps}>
                            <span className="todosHeading">
                                Active Tasks
                            </span>
                            {todos.map((t, index) => (
                                <SingleTodo index={index} todo={t} key={t.id} todos={todos} setTodos={setTodos} />
                            ))}
                        </div>
                    )
                }
            </Droppable>
            <Droppable droppableId="TodosRemove">
                {
                    (provided) => (
                        <div className="todos removed" ref={provided.innerRef} {...provided.droppableProps}>
                            <span className="todosHeading">
                                Completed Tasks
                            </span>
                            {completedTodos.map((t, index) => (
                                <SingleTodo index={index} todo={t} key={t.id} todos={completedTodos} setTodos={setCompletedTodos} />
                            ))}
                        </div>
                    )
                }
                
            </Droppable>
        </div>
    )
}

export default TodoList;