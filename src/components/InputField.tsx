import type React from "react";
import "./styles.css"

interface Props {
    toDo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField : React.FC<Props> = ({toDo, setTodo}) => {
    return (
        <form className="input">
            <input type="input" placeholder="Enter a task" className="inputBox" 
            value={toDo} onChange={(e) => setTodo(e.target.value)} />
            <button type="submit" className="inputSubmit" >Go</button>
        </form>
    );
}

export default InputField