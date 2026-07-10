import { Check } from "lucide-react";
import { useState } from "react";
import { useTaskActions } from "../contexts/TaskContext";

const TaskEditForm = ( { task, setEditingTaskID } ) => {

    const {updateTask} = useTaskActions();

    const [newText, setNewText] = useState(task.text);
    const [newPriority, setNewPriority] = useState(task.priority);
    
    const saveEdit = () => {
        if (newText.trim()){
            updateTask(task.id, newText, newPriority);
            setEditingTaskID(null);
        }
    }

    return (
        <div>
            <input type="text" value={newText}
            onChange={(entry) => setNewText(entry.target.value)}
            style={{
                flexGrow: 1,
                padding: "5px",
                borderRadius: "5px",
                border: "1px solid #ccc",
            }}>
            </input>
            <input type="number" min="1" value={newPriority}
            onChange={(entry) => setNewPriority(Number(entry.target.value))}
            style={{
                width: "50px",
                padding: "5px",
                borderRadius: "5px",
                border: "1px solid #ccc",
            }}
            >
            </input>
            <button
            onClick={saveEdit} 
            style={{
                borderRadius: "50%",
                backgroundColor: "#28a745",
                color: "white",
                padding: "10px",
                border: "none",
                cursor: "pointer",
            }}>

                <Check size={16}/>
            </button>
        </div>
    );
}

export default TaskEditForm;