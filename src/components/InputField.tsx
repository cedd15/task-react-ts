import type React from "react";
import "./styles.css"
import { useRef } from "react";

interface Props {
    toDo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e : React.SubmitEvent) => void;
}

const InputField : React.FC<Props> = ({toDo, setTodo, handleAdd}) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form className="input" onSubmit={(e) => {
            handleAdd(e);
            inputRef.current?.blur();
        }}>
            <input ref={inputRef} type="input" placeholder="Enter a task" className="inputBox" 
            value={toDo} onChange={(e) => setTodo(e.target.value)} />
            <button type="submit" className="inputSubmit" >Go</button>
        </form>
    );
}

export default InputField