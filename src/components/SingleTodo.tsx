import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import type { Todo } from "../model";
import "./styles.css"
import { useEffect, useRef, useState } from "react";
import { Draggable } from "react-beautiful-dnd";

type Props = {
    index: number;  
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({ index, todo, todos, setTodos } : Props) => {

    const [edit, setEdit] = useState(false);
    const [editTodo, setEditTodo] = useState(todo.todo);

    const handleDone = (id : number) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isDone: !todo.isDone} : todo))
    };

    const handleDelete = (id : number) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const handleEdit = (e : React.SubmitEvent<HTMLFormElement>, id:number) => {
        e.preventDefault();

        setTodos(todos.map(t => (
            t.id === id ? {...t, todo:editTodo } : t
        )))
        setEdit(false);
    }

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, [edit])

    return (
        <Draggable draggableId={todo.id.toString()} index={index}>
            {
                (provided) => (
                    <form 
                        className="singleTodos" 
                        action="" 
                        onSubmit={(e) => handleEdit(e, todo.id)}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                    {
                        edit ? (
                            <input value={editTodo} onChange={(e) => setEditTodo(e.target.value)} className="singleTodosText" ref={inputRef}/>
                        ) : todo.isDone ? (
                            <s className="singleTodosText">{todo.todo}</s>
                        ) : (
                            <span className="singleTodosText">{todo.todo}</span>
                        )
                    }
                    <div>
                        <span className="icon" onClick={() => {
                            if (!edit && !todo.isDone) 
                                setEdit(!edit)
                        }}>
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
        </Draggable>
    )
}

export default SingleTodo;