import TaskItem from "./TaskItem";
import TaskEditForm from "./TaskEditForm";
import { useState } from "react";

const TaskList = ({ tasks, showOnlyIncompleteTasks }) => {

    const [editingTaskID, setEditingTaskID] = useState(null);

    return (
        <ul>
            {tasks.filter((task) => !showOnlyIncompleteTasks || !task.done ).map((task) => (
            <li key={task.id}
            style={{
                display: "flex",
                borderBottom: "1px solid #ccc",
                gap: "10px",
                justifyContent: "space-between",
                padding: "10px",
                alignItems: "center",
            }}>
                {task.id === editingTaskID? 
                (
                    <TaskEditForm task={task} setEditingTaskID={setEditingTaskID}/>
                ) : (
                    <TaskItem task={task} setEditingTaskID={setEditingTaskID}/>
                )}
            </li> ))}
        </ul>
    );
}

export default TaskList;