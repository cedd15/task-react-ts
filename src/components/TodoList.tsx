import type React from "react";
import type { Todo } from "../model";
import SingleTodo from "./SingleTodo";
import { Droppable } from "@hello-pangea/dnd";

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
                    (provided, snapshot) => (
                        <div className={`todos ${snapshot.isDraggingOver ? "dragactive" : "" }`}
                         ref={provided.innerRef} {...provided.droppableProps}>
                            <span className="todosHeading">
                                Active Tasks
                            </span>
                            {todos.map((t, index) => (
                                <SingleTodo index={index} todo={t} key={t.id} todos={todos} setTodos={setTodos} />
                            ))}
                            {provided.placeholder}
                        </div>
                    )
                }
            </Droppable>
            <Droppable droppableId="TodosRemove">
                {
                    (provided, snapshot) => (
                        <div className={`todos removed ${snapshot.isDraggingOver ? "dragcomplete" : "" }`}
                        ref={provided.innerRef} {...provided.droppableProps}>
                            <span className="todosHeading">
                                Completed Tasks
                            </span>
                            {completedTodos.map((t, index) => (
                                <SingleTodo index={index} todo={t} key={t.id} todos={completedTodos} setTodos={setCompletedTodos} />
                            ))}
                            {provided.placeholder}
                        </div>
                    )
                }
                
            </Droppable>
        </div>
    )
}

export default TodoList;