import { Trash, Pencil } from "lucide-react";

const TaskItem = ({ task, toggleTaskDone, deleteTask, setEditingTaskID }) => {

    return (
        <>
            <div style={{display: "flex", alignItems: "center", flexGrow: 1}}>
                <input type="checkbox" 
                checked = {task.done} 
                onChange={() => toggleTaskDone(task.id)} 
                style={{marginRight: "10px"}}>
                    
                </input>
                <span 
                style = {{
                    textDecoration: task.done? "line-through" : "none",
                    flexGrow: 1,
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                }}>
                    {task.text}
                    <span 
                    style={{
                        backgroundColor: "#6f42c1",
                        color: "white",
                        borderRadius: "30%",
                        padding: "4px 8px",
                        fontSize: "12px",
                        fontWeight: "bold",
                        textAlign: "center",
                        display: "inline-block"
                    }}>
                        {task.priority}
                    </span>
                </span>
            </div>
            <button
            onClick={() => setEditingTaskID(task.id)} 
            style={{
                borderRadius: "50%",
                backgroundColor: "#ffc107",
                color: "black",
                padding: "10px",
                boder: "none",
                cursor: "pointer",
            }}>
                <Pencil />
            </button>
            <button
            onClick={() => deleteTask(task.id)} 
            style={{
                borderRadius: "50%",
                backgroundColor: "#dc3545",
                color: "black",
                padding: "10px",
                boder: "none",
                cursor: "pointer",
            }}>
                <Trash />
            </button>
        </>
    );
}

export default TaskItem;