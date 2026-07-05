import { Plus } from "lucide-react";
import { useState } from "react";

const TaskForm = ({ addTask }) => {

    const [newTask, setNewTask] = useState("");
    const [newPriority, setNewPriority] = useState(1);

    const handleSubmit = () => {
        if (newTask.trim()){
            addTask(
                {"id": Date.now(), "text": newTask, "priority": newPriority, "done": false}
            );

            setNewTask("");
            setNewPriority(1);
        }
    };

    const inputStyle = {
        padding: "8px",
        borderRadius: "5px",
        boder: "1px solid #ccc",
    }

    return (
        <div>
            <div 
            style={{
                display: "flex",
                gap: "10px"
            }}>
                <input 
                type = "text"
                placeholder = "Enter new task!"
                value = {newTask}
                onChange = {(entry) => setNewTask(entry.target.value)}
                style = {{
                    ...inputStyle,
                    flexGrow: "1",
                }}>
                </input>
                <input 
                type = "number"
                min = "1"
                value = {newPriority}
                onChange = {(entry) => setNewPriority(Number(entry.target.value))}
                style={{...inputStyle, width: "3.75rem"}}>
                </input>
            </div>
            <button 
            onClick={handleSubmit}
            style={{
                display: "block",
                margin: "20px auto 0",
                borderRadius: "50%",
                cursor: "pointer",
                backgroundColor: "#007bff",
                color: "white",
                padding: "12px",
            }}>
                <Plus size={20} />
            </button>
        </div>
    )
}

export default TaskForm;