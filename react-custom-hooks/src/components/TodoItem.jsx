import { memo } from "react";

const TodoItem = ({ todo, onToggle }) => {

    console.log(`Rendering to Item ${todo.text}`);

    return(
        <li
            style={{
                margin: "0.5rem 0",
                padding: "0.5rem",
                border: "1px solid #ccc",
                cursor: "pointer",
            }}

            onClick={() => onToggle(todo.id)}
        >
            {todo.text} {todo.completed ? "✅" : "❌"}
        </li>
    );


}

export default memo(TodoItem);